let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

const loader = document.querySelector(".loader");
const items = document.querySelector("#items");
xhr.onreadystatechange = function () {
    loader.classList.remove("loader_active");
    let json = JSON.parse(xhr.responseText);
    let valutes = json.response.Valute;
    console.log(valutes);
    for (let key in valutes) {
        console.log(key);
        const valute = valutes[key];
        console.log(valute);
        const code = valute.CharCode;
        const value = valute.Value;
        let currentItem = document.createElement("div");
        currentItem.innerHTML = `<div class="item__code">${code}</div>
        <div class="item__value">${value}</div>
        <div class="item__currency">руб.</div>`;
        currentItem.className = "item";
        items.appendChild(currentItem);
        }
    


};