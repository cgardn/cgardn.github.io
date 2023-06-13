// changing root variables for switching light and dark 
// document.querySelector(':root').style.setProperty('--background', 'var(--light-background)')

// elements
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mainContent = document.querySelector("main");
const portrait = document.querySelector(".portrait");

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
const menus = [document.getElementById("desktop-menu"), document.getElementById("mobile-menu")];
menus.forEach(menu => {
	if (menu) {
		menu.addEventListener("click", (e) => {
			const currentSlide = document.querySelector('[data-current-slide="true"]');
			if (e.target.dataset.slide == currentSlide.dataset.slide) { return }
			if (e.target.classList.contains('menu-item') && Object.keys(e.target.dataset).includes('slide')) {
				const slideTargets = document.querySelectorAll('.content-container .content')
				slideTargets.forEach(el => {
					if (el.dataset.slide == e.target.dataset.slide) { el.dataset.currentSlide = 'true' }
					else { el.dataset.currentSlide = 'false' }
					el.classList.remove("active")
					el.classList.add("inactive")
					setTimeout( () => {
						// this movement should only be happening when all slides are opacity 0
						el.style.transform = `translateX(-${Number(e.target.dataset.slide)*100}%`
					}, 300) // make sure this matches the CSS animation timing for content-in and content-out, later get from JS CSSKeyframesRule interface when remote hosted (cors blocks js access of stylesheets)
					setTimeout( () => {
						el.classList.add("active")
						el.classList.remove("inactive")
					}, 300)
				})
			}
		})
	}
})