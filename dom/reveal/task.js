const revealElements = document.querySelectorAll(".reveal");
let reveals = Array.from(revealElements);
window.addEventListener('scroll', function () {
    for (let i = 0; i < reveals.length; i++){
        let revealElement = reveals[i];
        let elementTop=revealElement.getBoundingClientRect().top;
        let elementBottom=revealElement.getBoundingClientRect().bottom;
        if ((elementBottom > 0) && ( elementTop <= window.innerHeight)){
            revealElement.classList.add("reveal_active");
        }
        else{
            revealElement.classList.remove("reveal_active");
        }
    }
  });