function hide() {
    let popup = document.getElementById('popup1');

    popup.addEventListener('click', () =>{
        if(popup.style.display === 'none'){
            popup.style.display = 'block'
        }
        else{
            popup.style.display = 'none'
        }
    })
}

function moveToRight() {
    let popup = document.getElementById('popup1');
    let position = 0;
    let id = setInterval(frame, 5)
    function frame(){
        if(position == 400) {
            clearInterval(id)
        }
        else {
            position++;
            popup.style.left = position + "px";
        }
    }
}


var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.button');

let currentSlide = 1;

var manualNav = function(manual) {

    slides.forEach((slide) => {
        slide.classList.remove('active')
    })

    btns.forEach((button) => {
        button.classList.remove('active')
    })

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((button, i)=> {
    button.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    })
})

var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function(){

            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active')
            })

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if(slides.length == i){
                i = 0;
            }
            if(i > slides.length){
                return;
            }
            repeater();
        }, 6000);
    }
    repeater()
}
repeat()




