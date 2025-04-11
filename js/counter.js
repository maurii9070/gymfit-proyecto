function startCounter(element, target, duration = 1000) {
	let start = 0
	const increment = target / (duration / 16) // 16ms = ~60fps
	let current = 0

	const timer = setInterval(() => {
		current += increment
		if (current >= target) {
			clearInterval(timer)
			element.textContent = target
			element.style.animation = 'pulse 0.5s ease'
		} else {
			element.textContent = Math.floor(current)
		}
	}, 16)
}

document.addEventListener('DOMContentLoaded', () => {
	const counters = document.querySelectorAll('.counter')

	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const counter = entry.target.querySelector('.counter')
					const target = parseInt(counter.getAttribute('data-target'))
					startCounter(counter, target)
					observer.unobserve(entry.target)
				}
			})
		},
		{ threshold: 0.5 }
	)

	document.querySelectorAll('.stat-item').forEach(item => {
		observer.observe(item)
	})
})
