const slider = document.querySelector('.slider_foto');
const btnleft = document.querySelector('.btn_left');
const btnrigth = document.querySelector('.btn_right');
const slids = document.querySelectorAll('div.slide');

init();

function update() {
    const leftSlide = document.getElementById(`0`);
    const CentrSlide = document.getElementById(`1`);
    const rightSlide = document.getElementById(`2`);
    CentrSlide.style.zIndex = `30`
    leftSlide.style.zIndex = `20`
    rightSlide.style.zIndex = `20`

    leftSlide.style.left = '20px'
    leftSlide.style.bottom = `35px`
    leftSlide.style.width = `480px`
    leftSlide.style.height = `360px`
    leftSlide.style.opacity = `50%`

    CentrSlide.style.width = `720px`
    CentrSlide.style.height = `480px`
    CentrSlide.style.left = `240px`

    rightSlide.style.bottom = `35px`
    rightSlide.style.width = `480px`
    rightSlide.style.height = `360px`
    rightSlide.style.left = '700px'
    rightSlide.style.opacity = `50%`

}

function del() {
    const leftSlide = document.getElementById(`0`);

    leftSlide.style = null;

    const CentrSlide = document.getElementById(`1`);

    CentrSlide.style = null;

    const rightSlide = document.getElementById(`2`);

    rightSlide.style = null;
}

function anime() {
    const leftSlide = document.getElementById(`0`);
    const CentrSlide = document.getElementById(`1`);
    const rightSlide = document.getElementById(`2`);
    leftSlide.style.transition = `all 0.5s`
    rightSlide.style.transition = `all 0.5s`
    CentrSlide.style.transition = `all 0.5s linear, z-index 0s ,opacity 0.3s linear, width 0.1s linear, height 0.3s linear`
}

function rtupdate() {
    del()
    const leftSlide = document.getElementById(`0`)
    const CentrSlide = document.getElementById(`1`)
    const rightSlide = document.getElementById(`2`)
    leftSlide.id = 2
    CentrSlide.id = 0
    rightSlide.id = 1
    anime()
    update()
}

function lfupdate() {
    del()
    const leftSlide = document.getElementById(`0`)
    const CentrSlide = document.getElementById(`1`)
    const rightSlide = document.getElementById(`2`)
    leftSlide.id = 1
    CentrSlide.id = 2
    rightSlide.id = 0
    anime()
    update()
}


btnleft.addEventListener('click', lfupdate());
btnrigth.addEventListener('click', rtupdate());


function init() {
    for (let i = 0; slids.length > i; i++) {
        const slide = slids[i]
        slide.id = i
    }
    update();
}



