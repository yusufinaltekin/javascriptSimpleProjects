const search = document.querySelector('.search-container');
const btn = document.querySelector('.search-button');
const input = document.querySelector('.search-input');

btn.addEventListener('click', () => {
	search.classList.toggle('active');
	input.focus();
});