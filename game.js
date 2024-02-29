
let apple = 1
let onclick_price = 25
let apple_bank_price = 125000
let apple_bank_upgrade = 0
let onclick_uppgrade = 1
let apple_tree_price = 250
let apple_tree_upgrade = 0
let apple_farm_upgrade = 0
let apple_farm_price = 2500
let apple_mine_price = 13500
let apple_mine_upgrade = 0
let apple_per_second = 0
let apple_church_price = 1000000
let apple_church_upgrade = 0
let apple_city_price = 10000000
let apple_city_upgrade = 0
const display_apple_per_second = document.getElementById("apple_per")
load_data()
function sava_data(){
    sessionStorage.setItem("sapple", apple)

}
function load_data(){
    let sava_value = sessionStorage.getItem("sapple")
    if(!isNaN(sava_value)){
        apple = parseInt(sava_value)
        console.log(sava_value)
    }
    else{
        console.error("erro");
    }
}
display_apple(apple)
function Buy_anamtion(element_name){
    element_name.style.color = 'Green'
}
function price_of_upgrade(value, muti) {
    value = Math.round(value * muti)
    return value
}

function format_apple_display(apple) {
    if (apple >= 1000000000000) {
        return (apple / 1000000000000).toFixed(1) + "Tril"
    }
    else if (apple >= 1000000000) {
        return (apple / 1000000000).toFixed(1) + "Bil"
    }
    else if (apple >= 1000000) {
        return (apple / 1000000).toFixed(1) + "Mil"
    }
    else if (apple >= 1000) {
        return (apple / 1000).toFixed(1) + "K"
    }
    else {
        return apple
    }
}
function display_apple(apple) {
    const v_display_apple = document.getElementById("Money")
    v_display_apple.innerText = "You Have" + " " + format_apple_display(apple) + " " + "Apples"
}

function apple_per_function() {
    apple += apple_per_second
    display_apple_per_second.innerText = "You Get " + apple_per_second + " " + "Apple's Per Second"

    display_apple(apple)
}

function onclick_apple() {

    apple = apple + onclick_uppgrade
    display_apple(apple)
}
function Fonclick_uppgrade() {
    const display_click_upgrade_stat = document.getElementById("upgrade_stats")
    console.log(display_click_upgrade_stat)
    const display_price_onclick_uppgrade = document.getElementById("click_uppgrade")
    display_click_upgrade_stat.innerText = "You Get " + onclick_uppgrade + " " + "Per Click"
    if (apple >= onclick_price) {
        console.log(onclick_uppgrade)
        onclick_uppgrade += 1
        apple -= onclick_price
        onclick_price = price_of_upgrade(onclick_price, 1.025)
        display_apple(apple)
        display_price_onclick_uppgrade.innerText = "Buy Click Uppgrade $" + format_apple_display(onclick_price)
        Buy_anamtion(display_click_upgrade_stat)
    }
    else {
        alert("Not Even Your Mom's Credit Card Is Enough")
    }
}

function fapple_tree_upgrade() {
    const display_apple_tree_upgrade_stat = document.getElementById("apple_upgrade_stat")
    const display_price_apple_tree_uppgrade = document.getElementById("apple_tree_upgrade")
    display_apple_tree_upgrade_stat.innerText = "You Have " + apple_tree_upgrade + " " + "Apple Trees"
    if (apple > apple_tree_price) {
        apple_tree_upgrade += 1
        apple -= apple_tree_price
        apple_tree_price = price_of_upgrade(apple_tree_price, 1.025)
        apple_per_second += 1
        display_price_apple_tree_uppgrade.innerText = "Buy Apple Tree $" + format_apple_display(apple_tree_price)
        apple_tree_upgrade += 1
        display_apple(apple)
    }
    else {
        alert("Not Even Your Mom's Credit Card Is Enough")
    }
}

function fapple_farm_upgrade() {
    const display_apple_farm_upgrade_stat = document.getElementById("apple_farm_stat")
    const display_price_apple_farm_uppgrade = document.getElementById("apple_farm_upgrade")
    display_apple_farm_upgrade_stat.innerText = "You Have " + apple_farm_upgrade + " " + "Apple Farms"
    if (apple > apple_farm_price) {
        apple_farm_upgrade += 1
        apple -= apple_farm_price
        apple_farm_price = price_of_upgrade(apple_farm_price, 1.025)
        apple_per_second += 5
        display_price_apple_farm_uppgrade.innerText = "Buy Apple Farm $" + format_apple_display(apple_farm_price)
        display_apple(apple)
    }
    else {
        alert("Not Even Your Mom's Credit Card Is Enough")
    }
}
function fapple_mine_upgrade() {
    const display_apple_mine_upgrade_stat = document.getElementById("apple_mine_stat")
    const display_price_apple_mine_uppgrade = document.getElementById("apple_mine_upgrade")
    display_apple_mine_upgrade_stat.innerText = "You Have " + apple_mine_upgrade + " " + "Apple Mines"
    if (apple > apple_mine_price) {
        apple_mine_upgrade += 1
        apple -= apple_mine_price
        apple_mine_price = price_of_upgrade(apple_mine_price, 1.025)
        apple_per_second += 25
        display_price_apple_mine_uppgrade.innerText = "Buy Apple Mine $" + format_apple_display(apple_mine_price)
        display_apple(apple)
    }
    else {
        alert("Not Even Your Mom's Credit Card Is Enough")
    }
}
function fapple_bank_upgrade() {
    const display_apple_bank_upgrade_stat = document.getElementById("apple_bank_stat");
    const display_price_apple_bank_uppgrade = document.getElementById("apple_bank_upgrade");
    display_apple_bank_upgrade_stat.innerText = "You Have " + apple_bank_upgrade + " " + "Apple Banks";
    if (apple > apple_bank_price) {
        apple_bank_upgrade += 1;
        apple -= apple_bank_price;
        apple_bank_price = price_of_upgrade(apple_bank_price, 1.025);
        apple_per_second += 125;
        display_price_apple_bank_uppgrade.innerText = "Buy Apple Bank $" + format_apple_display(apple_bank_price);
        display_apple(apple);
    } else {
        alert("Not Even Your Mom's Credit Card Is Enough");
    }
}
function fapple_church_upgrade() {
    const display_apple_church_upgrade_stat = document.getElementById("apple_church_stat");
    const display_price_apple_church_uppgrade = document.getElementById("apple_church_upgrade");
    display_apple_church_upgrade_stat.innerText = "You Have " + apple_church_upgrade + " " + "Apple Churches";
    if (apple > apple_church_price) {
        apple_church_upgrade += 1;
        apple -= apple_church_price;
        apple_church_price = price_of_upgrade(apple_church_price, 1.025);
        apple_per_second += 1000;
        display_price_apple_church_uppgrade.innerText = "Buy Apple Church $" + format_apple_display(apple_church_price);
        display_apple(apple);
    } else {
        alert("Not Even Your Mom's Credit Card Is Enough");
    }
}
function fapple_city_upgrade() {
    const display_apple_city_upgrade_stat = document.getElementById("apple_city_stat");
    const display_price_apple_city_uppgrade = document.getElementById("apple_city_upgrade");
    display_apple_city_upgrade_stat.innerText = "You Have " + apple_city_upgrade + " " + "Apple Cities";
    if (apple > apple_city_price) {
        apple_city_upgrade += 1;
        apple -= apple_city_price;
        apple_city_price = price_of_upgrade(apple_city_price, 1.025);
        apple_per_second += 2500;
        display_price_apple_city_uppgrade.innerText = "Buy Apple City $" + format_apple_display(apple_city_price);
        display_apple(apple);
    } else {
        alert("Not Even Your Mom's Credit Card Is Enough");
    }
}
function gamabling() {
    window.location.href = "gamabling.html"
}
function home() {
    window.location.href = "index.html"
}
function sumit_gamabling(event) {
    event.preventDefault()
    alert("Hello")
    console.log("test")
}

setInterval(apple_per_function, 1000)
/setInterval(sava_data, 1000);

display_apple(apple)
