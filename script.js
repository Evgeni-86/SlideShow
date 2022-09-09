const cont = document.querySelector('.conteiner');
const prev = cont.querySelector('.prev');
const next = cont.querySelector('.next');
const show_image = cont.querySelector('.images'); 
const image_num = cont.querySelectorAll('.image_num');

const img_arr = [
    {src: './img/img1.jpg'},
    {src: './img/img2.jpg'},
    {src: './img/img3.jpg'}
];

ImageActive(1);//по умолчанию
setInterval(() => NextImg(), 5000);


function ImageActive(start) {
    const img_id = show_image.querySelector('img').id;
    image_num.forEach(element => { element.classList.remove('image_num_active'); });
    if(start) {
        show_image.innerHTML = '<img src="'+img_arr[start].src+'" id="'+start+'"></img>';
    };
    image_num[img_id].classList.add('image_num_active');//какая картинка открыта
}

function PrevImg() {
    const img_id = show_image.querySelector('img').id;
    let next_img_id;
    if (img_id >= 1) {
        next_img_id = Number(img_id) - 1;//предыдущий элемент
        show_image.innerHTML = '<img src="'+img_arr[next_img_id].src+'" id="'+next_img_id+'"></img>';
        ImageActive();
    } else {
        next_img_id = img_arr.length - 1;
        show_image.innerHTML = '<img src="'+img_arr[next_img_id].src+'" id="'+next_img_id+'"></img>';
        ImageActive();
    }
}

function NextImg() {
    const img_id = show_image.querySelector('img').id;
    let next_img_id;    
    if (img_id < (img_arr.length -1) ) {
        next_img_id = Number(img_id) + 1;//следующий элемент
        show_image.innerHTML = '<img src="'+img_arr[next_img_id].src+'" id="'+next_img_id+'"></img>';
        ImageActive();
    } else {
        next_img_id = 0;
        show_image.innerHTML = '<img src="'+img_arr[next_img_id].src+'" id="'+next_img_id+'"></img>';
        ImageActive();
    }
}

next.onclick = function() {
    NextImg();
};
prev.onclick = function () {
    PrevImg();
};
//переключение картинок
image_num.forEach(element => {
    element.onclick = function () {
        console.log(element.id);
        show_image.innerHTML = '<img src="'+img_arr[element.id].src+'" id="'+element.id+'"></img>';
        ImageActive();
    }
});