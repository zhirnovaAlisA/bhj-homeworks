const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const formData = new FormData(form); 
    const xhr = new XMLHttpRequest(); 

    
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    
    xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
            const progressValue = event.loaded / event.total; 
            progress.value = progressValue; 
        }
    };

 
    xhr.onload = () => {
        if (xhr.status === 200) {
            alert('Файл успешно загружен!');
        } else {
            alert('Произошла ошибка при загрузке файла.');
        }
    };


    xhr.onerror = () => {
        alert('Ошибка сети или сервера.');
    };

    xhr.send(formData); 
});
