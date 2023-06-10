// changing root variables for switching light and dark 
// document.querySelector(':root').style.setProperty('--background', 'var(--light-background)')

// elements
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mainContent = document.querySelector("main");

function toggleMobileMenu() {
	if (mobileMenu) {
		mobileMenu.classList.toggle("active")
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
const menus = [document.getElementById("desktop-menu"), document.getElementById("mobile-menu")];
menus.forEach(menu => {
	if (menu) {
		menu.addEventListener("click", (e) => {
			if (e.target.classList.contains('menu-item') && Object.keys(e.target.dataset).includes('slide')) {
				const slideTargets = document.querySelectorAll('.content-container .content')
				slideTargets.forEach(el => {
					el.style.transform = `translateX(-${Number(e.target.dataset.slide)*100}%`
					if (el.dataset.slide == e.target.dataset.slide) { el.classList.add("active") }
					else el.classList.remove("active")
				})
			}
		})
	}
})