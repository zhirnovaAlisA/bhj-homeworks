const headers = document.querySelectorAll(".tab");
const paragraphs = document.querySelectorAll(".tab__content")

function tabsChanger(index) {
    for (let j = 0; j < headers.length; j++) {
        paragraphs[j].classList.remove("tab__content_active");
        headers[j].classList.remove("tab_active");
    }
    paragraphs[index].classList.add("tab__content_active");
    headers[index].classList.add("tab_active");
}

for (let i = 0; i < headers.length; i++) {
    let header = headers[i];
    header.addEventListener("click", () => tabsChanger(i));
}