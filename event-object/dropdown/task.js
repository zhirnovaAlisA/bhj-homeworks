const button = document.querySelector(".dropdown__value");
const list = document.querySelector(".dropdown__list");
const languages = Array.from(document.querySelectorAll(".dropdown__link"));
const currentLanguage = document.querySelector(".dropdown__value");

for (let i=0; i < languages.length; i++){
    let language = languages[i];
    language.addEventListener("click", (event)=>{
        event.preventDefault();
        currentLanguage.textContent = language.textContent; 
        list.classList.remove("dropdown__list_active");})
}

function buttonClick(){
    list.classList.toggle("dropdown__list_active");
}
button.addEventListener("click", buttonClick);