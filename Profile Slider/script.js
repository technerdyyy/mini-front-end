
document.addEventListener('DOMContentLoaded', function () {

    const rightArrow = document.getElementById('right');
    const carousel = document.querySelector('.carousel');
    const leftArrow = document.getElementById('left');

    rightArrow.addEventListener('click', function(){
        carousel.scrollBy({
            left:250,
            behavior:'smooth'
        });
    });

    leftArrow.addEventListener('click', function(){
        carousel.scrollBy({
            left:-250,
            behavior:'smooth'
        });
    });

});