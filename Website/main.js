/*===== MENU SHOW =====*/

// const showMenu= (toggleID,navID,menu)=> {
//     const toggle=document.getElementById(toggleID);
//     const nav= document.getElementById(navID);
//     const menu= document.getElementById(menu);
//     document.onclick=function (event) {
//         if( event.target.id!== toggle && event.target.id!== navID && event.target.id!== menu)
//         menu.classList.remove('show')
//     };
//     toggle.onclick = function() {
//         toggle.classList.toggle ('show')
//         menu.classList.toggle('show')
//     }

//     }
//     showMenu('nav-toggle','nav-menu','menu')


const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    //     reset: true
});

sr.reveal('.about__data, .contact__img, .publications__subtitle, .publications__text', {});
sr.reveal('.about__img, .contact__subtitle, .publications__text, .publications__img,.section-title', { delay: 200 });
sr.reveal('.about__social-icon', { interval: 200 });
sr.reveal('.publications__data, .work__img, .reviews__input', { interval: 200 });

const navmenu = document.getElementById('nav-menu');
// document.addEventListener("click", closeMenu );

function closeMenu() {

    if (navmenu.classList.contains("show")) {
        // navmenu.classList.remove("show");
        console.log("menu open");
    }
}

// window.scroll = function (event) {
window.addEventListener("scroll", closeMenuOnScroll);
// window.addEventListener("click", closeMenuOnClick);
const toggle = document.getElementById('nav-toggle');

function closeMenuOnScroll(event) {


    if (navmenu.classList.contains("show")) {
        // console.log('You clicked outside the box!');
        navmenu.classList.remove("show");
    } else {
        // console.log('You clicked inside the box!');
    }
}
function closeMenuOnClick(event) {

    if (navmenu.classList.contains("show") && event.target !== navmenu) {
        // console.log('You clicked outside the box!');
        navmenu.classList.remove("show");
    } else {
        //console.log('You clicked inside the box!');
    }
}