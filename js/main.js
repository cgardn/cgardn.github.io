// changing root variables for switching light and dark 
// document.querySelector(':root').style.setProperty('--background', 'var(--light-background)')

// elements
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mainContent = document.querySelector("main");
const portrait = document.querySelector(".portrait");
const desktopMenuItems = document.querySelectorAll('.desktop-menu .menu-item')

function toggleMobileMenu() {
	if (mobileMenu) {
		mobileMenu.classList.toggle("active")
	}
}
function togglePortrait() {
	if (portrait) {
		portrait.classList.toggle("active");
	}
}

// mobile menu toggle
if (mobileMenuToggle) { mobileMenuToggle.addEventListener("click", toggleMobileMenu) }

// conditional click on mobile page for closing mobile menu
if (mainContent) {
	mainContent.addEventListener('click', () => {
		if (mobileMenu && mobileMenu.classList.contains('active')) { toggleMobileMenu() }
	})
}

// slide controls
const menus = [document.getElementById("desktop-menu"), document.getElementById("mobile-menu"), document.querySelector('header')];
menus.forEach(menu => {
	if (menu) {
		menu.addEventListener("click", (e) => {
			e.preventDefault()
			if (e.target.parentElement.tagName === 'A') {
				if (new URL(e.target.parentElement.href).pathname === '/') {
					document.querySelectorAll('header a').forEach(el =>  {
						el.classList.add('fade-slide-out')
					})
				}
				document.querySelectorAll('.fade-slide-in').forEach(el => {
					el.classList.add('fade-slide-out');
				})
				setTimeout(() => {window.location.href = e.target.parentElement.href}, 350)
			}
		})
	}
})