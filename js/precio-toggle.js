document.addEventListener('DOMContentLoaded', function () {
	const toggle = document.getElementById('plan-toggle')

	toggle.addEventListener('change', function () {
		const monthlyPrices = document.querySelectorAll('.monthly')
		const annualPrices = document.querySelectorAll('.annually')

		if (this.checked) {
			monthlyPrices.forEach(price => (price.style.display = 'none'))
			annualPrices.forEach(price => (price.style.display = 'block'))
		} else {
			monthlyPrices.forEach(price => (price.style.display = 'block'))
			annualPrices.forEach(price => (price.style.display = 'none'))
		}
	})
})
