const SHOWING_CLASS = "showing";
const first_slide = document.querySelector(".slider_item:first-child");

function slide() {
    const current_slide = document.querySelector(`.${SHOWING_CLASS}`);

    if (current_slide) {
        current_slide.classList.remove(SHOWING_CLASS);
        const next_slide = current_slide.nextElementSibling;

        if (current_slide) {
            next_slide.classList.add(SHOWING_CLASS);
        }
        else {
            first_slide.classList.add(SHOWING_CLASS);
        }
    }
    else {
        first_slide.classList.add(SHOWING_CLASS);
    }
}

slide();
setInterval(slide, 3000);


//https://www.youtube.com/watch?v=KcdBOoK3Pfw