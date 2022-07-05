
// toggle menu

let toggleMenu = document.querySelector(".toggle-menu");
let navBar = document.querySelector('nav');


// <i class='bx bx-x'></i>
toggleMenu.addEventListener('click', () => {
    toggleMenu.classList.toggle("active");
    navBar.classList.toggle("open");
});





// change active class curriculum
function handleActive(el) {
    el.forEach((chevron) => {
        chevron.addEventListener('click', (e) => {
            if (e.currentTarget.parentElement.parentElement.nextElementSibling.classList.contains('active')) {
                e.currentTarget.parentElement.parentElement.nextElementSibling.classList.remove('active');
                e.currentTarget.classList.remove('bx-chevron-up');
                e.currentTarget.classList.add('bx-chevron-down');
            } else {
                el.forEach((chevron) => {
                    chevron.parentElement.parentElement.nextElementSibling.classList.remove('active');
                    chevron.classList.remove('bx-chevron-up');
                    chevron.classList.add('bx-chevron-down');
                });
                e.currentTarget.parentElement.parentElement.nextElementSibling.classList.add("active");
                e.currentTarget.classList.add('bx-chevron-up');
    }
            });
    });
}
const chevrons = document.querySelectorAll(' .curriculum .container .chapitre .title>span i');
handleActive(chevrons);




// slider function

let slider = (containers, nxtBtn, preBtn) => {


    containers.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
            console.log(item.scrollLeft);
        })

        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
            console.log(item.scrollLeft);
        })
    })
}

const testimonialContainers = [...document.querySelectorAll('.All-testimonials')];
const testimonialNxtBtn = [...document.querySelectorAll('.testimonials .move-arrow.next')];
const testimonialPreBtn = [...document.querySelectorAll('.testimonials .move-arrow.prev')];
slider(testimonialContainers, testimonialNxtBtn, testimonialPreBtn);
const projectContainers = [...document.querySelectorAll('.all-projects')];
const projectNxtBtn = [...document.querySelectorAll('.projects .move-arrow.next')];
const projectPreBtn = [...document.querySelectorAll('.projects .move-arrow.prev')];
slider(projectContainers, projectNxtBtn, projectPreBtn);