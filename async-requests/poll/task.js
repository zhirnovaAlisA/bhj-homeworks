let xhr = new XMLHttpRequest( ); // экземпляр объекта XMLHttpRequest
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll'); // создаём запрос
xhr.send();

const pollTitle = document.querySelector(".poll__title");
const pollButtons = document.querySelector(".poll__answers");

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
    console.log(xhr.responseText);
    let json = JSON.parse(xhr.responseText);
    let title = json.data.title;
    pollTitle.textContent = title;
    let answers = json.data.answers;
    console.log(answers);
    for (let answer of answers){
        let button = document.createElement("button");
        button.className = "poll__answer";
        button.textContent = answer;
        pollButtons.appendChild(button);
        button.addEventListener("click", ()=>{
            alert("Спасибо, ваш голос засчитан!");
        })
    }

    };
    };



