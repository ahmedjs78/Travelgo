const swiperElement = document.querySelector('.swiper');
const nextElement = document.querySelector('.next');
const prevElement = document.querySelector('.prev');




function next(){

    swiperElement.classList.add('nextTransition');
    swiperElement.classList.remove('prevTransition');

}
function prev(){
    swiperElement.classList.add('prevTransition');
}
nextElement.addEventListener('click', next);
prevElement.addEventListener('click', prev);