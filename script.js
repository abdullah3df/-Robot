// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Close mobile menu when clicking links
function navOff(){ document.getElementById('nav-toggle').checked = false; }

// Reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in'); });
},{ threshold:.12 });

document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
