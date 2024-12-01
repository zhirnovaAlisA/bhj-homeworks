const fsCheckers = document.querySelectorAll(".font-size");
const bookContent = document.querySelector(".book");

for (let i = 0; i < fsCheckers.length; i++){
    let currentChecker = fsCheckers[i];
    currentChecker.addEventListener("click", (event) => {
    for (let j = 0; j < fsCheckers.length; j++){
        fsCheckers[j].classList.remove("font-size_active");
        event.preventDefault();
    }
    currentChecker.classList.add("font-size_active");
    switch (i) {
        case 0:
          bookContent.classList.remove("book_fs-big");
          bookContent.classList.add("book_fs-small");
          break;
        case 1:
            bookContent.classList.remove("book_fs-small");
            bookContent.classList.remove("book_fs-big");
            break;
        case 2:
            bookContent.classList.remove("book_fs-small");
            bookContent.classList.add("book_fs-big");
            break;
    
      }
}
)}