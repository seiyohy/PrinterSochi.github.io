// Slider
const slides = document.querySelector('.slides');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;

function updateSlidePosition() {
		slides.style.transform = `translateX(-${currentIndex * 100}%)`;
		indicators.forEach((indicator, index) => {
				indicator.classList.toggle('active', index === currentIndex);
		});
}

function showNextSlide() {
		currentIndex = (currentIndex < indicators.length - 1) ? currentIndex + 1 : 0;
		updateSlidePosition();
}

document.querySelector('.prev').addEventListener('click', () => {
		currentIndex = (currentIndex > 0) ? currentIndex - 1 : indicators.length - 1;
		updateSlidePosition();
});

document.querySelector('.next').addEventListener('click', () => {
		currentIndex = (currentIndex < indicators.length - 1) ? currentIndex + 1 : 0;
		updateSlidePosition();
});

indicators.forEach((indicator, index) => {
		indicator.addEventListener('click', () => {
				currentIndex = index;
				updateSlidePosition();
		});
});

updateSlidePosition();
setInterval(showNextSlide, 10000);
// Scroll
function scrollToAdvantages() {
	const targetPosition = document.getElementById("advantages").offsetTop;
	const startPosition = window.pageYOffset;
	const distance = targetPosition - startPosition;
	const duration = 2000;
	let start = null;

	window.requestAnimationFrame(step);

	function step(timestamp) {
			if (!start) start = timestamp;
			const progress = timestamp - start;
			const y = easeInOutQuad(progress, startPosition, distance, duration);
			window.scrollTo(0, y);
			if (progress < duration) {
					window.requestAnimationFrame(step);
			}
	}

	function easeInOutQuad(t, b, c, d) {
			t /= d / 2;
			if (t < 1) return c / 2 * t * t + b;
			t--;
			return -c / 2 * (t * (t - 2) - 1) + b;
	}
}
// More(button)
function toggleMenu() {
	const btn = document.querySelector('.more-btn');
	btn.classList.toggle('active');
}

document.addEventListener('click', (event) => {
	const btn = document.querySelector('.more-btn');
	if (!btn.contains(event.target) && btn.classList.contains('active')) {
			btn.classList.remove('active');
	}
});