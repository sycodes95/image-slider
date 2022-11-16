const buttons = document.querySelectorAll('[data-slide-button]');
const navButtons = document.querySelectorAll('.nav');
const slide = document.querySelectorAll('.slide')
const slideOne = document.querySelector('.slide.one')
const slideTwo = document.querySelector('.slide.two')
const slideThree = document.querySelector('.slide.three')
const navOne = document.querySelector('.nav.one')
const navTwo = document.querySelector('.nav.two')
const navThree = document.querySelector('.nav.three')



buttons.forEach(e => {

    
    e.addEventListener('click', ()=> { 
        navButtons.forEach(e =>{
            e.style.backgroundColor = 'white'
        })

        const offset = e.dataset.slideButton === 'next' ? 1 : -1;
        const slides = e.closest('[data-container').querySelector('[data-slide-container]')
    

        const activeSlide = slides.querySelector('[data-active]');
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if(newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active
        console.log(newIndex)

        console.log(navOne)

        console.log(slideOne.dataset)

        if (slideOne.dataset.active == 'true'){
            navOne.style.backgroundColor = 'rgba(52, 149, 205, 0.5)'
            
                
        } else if (slideTwo.dataset.active == 'true'){
            navTwo.style.backgroundColor = 'rgba(52, 149, 205, 0.5)'

        } else if (slideThree.dataset.active == 'true'){
            navThree.style.backgroundColor = 'rgba(52, 149, 205, 0.5)'
        }

        

        
    }) 
})

navOne.addEventListener('click', ()=>{
    delete slideTwo.dataset.active;
    delete slideThree.dataset.active;

    navButtons.forEach(e =>{
        e.style.backgroundColor = 'white'
    });
    navOne.style.backgroundColor = 'rgba(52, 149, 205, 0.5)'
    slideOne.dataset.active = true;
    //delete slideOne.dataset.active
    console.log(slideOne.dataset.active)
    console.log(slideTwo.dataset.active)
    console.log(slideThree.dataset.active)
})

navTwo.addEventListener('click', ()=>{
    delete slideOne.dataset.active;
    delete slideThree.dataset.active;

    navButtons.forEach(e =>{
        e.style.backgroundColor = 'white'
    });
    navTwo.style.backgroundColor = 'rgba(52, 149, 205, 0.5)'
    
    slideTwo.dataset.active = true;

    console.log(slideOne.dataset.active)
    console.log(slideTwo.dataset.active)
    console.log(slideThree.dataset.active)
    

    //delete slideTwo.dataset.active

})

navThree.addEventListener('click', ()=>{

    delete slideOne.dataset.active;
    delete slideTwo.dataset.active;
    navButtons.forEach(e =>{
        e.style.backgroundColor = 'white'
    });
    navThree.style.backgroundColor = 'rgba(52, 149, 205, 0.5)'
    
    slideThree.dataset.active = true;

    console.log(slideOne.dataset.active)
    console.log(slideTwo.dataset.active)
    console.log(slideThree.dataset.active)

    //delete slideThree.dataset.active

})




