const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
	accordion.addEventListener("click", (e) => {
		accordion.classList.toggle("active")
		accordion.querySelector("i").classList.toggle("bx-rotate-180")

		accordions.forEach((accordion2) => {
			
			if (accordion != accordion2 && accordion2.classList.contains("active")) {
				accordion2.classList.toggle("active")
				accordion2.querySelector("i").classList.toggle("bx-rotate-180")
''
			}
		})

	})
})