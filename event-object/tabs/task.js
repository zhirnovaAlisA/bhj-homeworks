const headers = document.querySelectorAll(".tab");
const paragraphs = document.querySelectorAll(".tab__content")
const masHeaders = Array.from(headers);
const masParagraphs = Array.from(paragraphs);

for( let i = 0; i < headers.length; i ++){
    let header = headers[i];
    header.addEventListener("click", () => {
        for ( let j = 0; j < headers.length; j ++){
            paragraphs[j].classList.remove("tab__content_active");
            headers[j].classList.remove("tab_active");
        }
        paragraphs[i].classList.add("tab__content_active");
        headers[i].classList.add("tab_active");
    })
}