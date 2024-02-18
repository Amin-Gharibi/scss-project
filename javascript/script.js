// get needed elements for header settings from DOM
const documentBody = document.body
const header = document.querySelector(".header")
const nav = document.querySelector(".nav")
const navToggle = document.querySelector(".nav__toggle")
const navMenu = document.querySelector(".nav__menu")
const navLink = document.querySelectorAll(".nav__link")
const navLink1 = document.getElementById("nav__link1")
const navLink2 = document.getElementById("nav__link2")
const navLink3 = document.getElementById("nav__link3")
const navLink4 = document.getElementById("nav__link4")
const navLink5 = document.getElementById("nav__link5")
const navLink6 = document.getElementById("nav__link6")
const changeTheme = document.querySelector(".change-theme")
const footerTag = document.getElementById("footer")

window.addEventListener('load', () => {
    if(localStorage.getItem('theme') === "dark") {
        changeTheme.classList.replace("bi-toggle-off", "bi-toggle-on")
    }
})

// func to show or hide the menu
const toggleNavMenu = () => {
    navMenu.classList.toggle("show-menu")
}

// Event to check if burger toggle has been clicked or not
navToggle.addEventListener("click", toggleNavMenu)

// Event to check if nav links has been clicked or not
navLink1.addEventListener("click", toggleNavMenu)
navLink2.addEventListener("click", toggleNavMenu)
navLink3.addEventListener("click", toggleNavMenu)
navLink4.addEventListener("click", toggleNavMenu)
navLink5.addEventListener("click", toggleNavMenu)
navLink6.addEventListener("click", toggleNavMenu)

// func to add a box shadow as soon as user scrolls
const addShadowWhenScroll = () => {
    if (this.scrollY >= 40) {
        header.classList.add("scroll-header")
    } else {
        header.classList.remove("scroll-header")
    }
}

// event to look for scrolling and calling add shadow when scroll
window.addEventListener("scroll", addShadowWhenScroll)

// scroll section active link
const sections = document.querySelectorAll('section[id]')

const addActiveDot = () => {
    const scrollY = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

// Event to look for scrolling and calling scroll active
window.addEventListener('scroll', addActiveDot)

// show scroll up button
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

// Event to look for scrolling and calling scrollUp
window.addEventListener('scroll', scrollUp)


// change theme controller
const changeThemeFunc = () => {
    if (changeTheme.classList.contains("bi-toggle-off")) {
        changeTheme.classList.replace("bi-toggle-off", "bi-toggle-on")
        documentBody.classList.add("dark-theme")
        localStorage.setItem("theme", "dark")
    } else {
        changeTheme.classList.replace("bi-toggle-on", "bi-toggle-off")
        documentBody.classList.remove("dark-theme")
        localStorage.setItem("theme", "light")
    }
}

// event to look for click on toggle to change the theme
changeTheme.addEventListener("click", changeThemeFunc)