// Auto year
document.getElementById('year').textContent = new Date().getFullYear();

// Close mobile nav on link click
function navOff() {
  document.getElementById('nav-toggle').checked = false;
}

// Reveal on scroll
const IO = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: .12 });

document.querySelectorAll('.reveal').forEach(el => IO.observe(el));
