// const cookie = document.getElementById("cookie");
// const counter = document.getElementById("clicker__counter"); 
// let flag = true;
// cookie.onclick = function(){ 
//     counter.textContent = String(Number(counter.textContent) + 1);
//     if (flag === true){
//         cookie.width += 100;
//     }
//     else{
//         cookie.width -= 100;
//     }
//     flag =! flag;
// }

const cookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter"); 
let flag = true;
const counter_speed = document.createElement('div');
document.body.appendChild(counter_speed);
let click_counter = 0;
const startTime = new Date();
let currentTime;

cookie.onclick = function(){ 
    counter.textContent = String(Number(counter.textContent) + 1);
    if (flag === true){
        cookie.width += 100;
    }
    else{
        cookie.width -= 100;
    }
    flag =! flag;
    click_counter += 1;
     
    currentTime = new Date();
    counter_speed.textContent = (click_counter/((currentTime - startTime)/1000));
}