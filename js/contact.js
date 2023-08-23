// submit contact form
const form = document.getElementById("contact-form");
const postMessage = document.getElementById(".post-submit-message");
form.querySelector("button").addEventListener("click", submitForm)

async function submitForm(e) {
	// disable inputs and textarea, also button, also change button text
	e.preventDefault();
	form.querySelectorAll("input, textarea, button").forEach(el => el.disabled = true);
	form.querySelector("button").innerText = "Submitting..."
	try {
		let json = {}
		for ([key, value] of new FormData(form).entries()) { obj[key] = value };
		const response = await fetch("https://submit-form.com/b79R1d88", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				Accept: "application/json"
			},
			body: JSON.stringify(json)
		})
		const data = await response.json()
		if (response.status && response.status != 200) { throw new Error("Submission failed") }
		form.querySelectorAll("input, textarea, button").forEach(el => el.disabled = false);
		form.querySelector("button").innerText = "Submit";
		form.classList.add("fade-slide-out");
		window.setTimeout( () => {
			elementsToHide(.forEach(
			postMessage.classList.add("fade-slide-in");
		}, 350);
	} catch (err) {
		console.log(err);
		form.querySelectorAll("input, textarea, button").forEach(el => el.disabled = false);
		form.querySelector("button").innerText = "Submit"
	}
	form.querySelectorAll("input, textarea, button").forEach(el => el.disabled = false);
	form.querySelector("button").innerText = "Submit"
}