// floating bubbles
function createBubbles() {
    const container = document.querySelector('.bubbles-container');
    for(let i=0; i<35; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        const size = Math.random() * 80 + 20;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDuration = `${Math.random() * 15 + 8}s`;
        bubble.style.animationDelay = `${Math.random() * 10}s`;
        container.appendChild(bubble);
    }
}
createBubbles();

// scroll reveal
const revealElements = document.querySelectorAll('.section-reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, { threshold: 0.2 });
revealElements.forEach(el => observer.observe(el));

// tilt effect for cards
document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(800px) rotateY(${x*10}deg) rotateX(${y*-8}deg) translateY(-5px)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// mobile menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if(hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if(target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// parallax effect for hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if(hero) hero.style.backgroundPositionY = `${window.scrollY * 0.4}px`;
});
