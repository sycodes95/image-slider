const buttons = document.querySelectorAll('[data-slide-button]');

buttons.forEach(e => {
    e.addEventListener('click', ()=> {
        const offset = e.dataset.slideButton === 'next' ? 1 : -1;
        const slides = e.closest('[data-container').querySelector('[data-slide-container]')
    

        const activeSlide = slides.querySelector('[data-active]');
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if(newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active
    }) 
})