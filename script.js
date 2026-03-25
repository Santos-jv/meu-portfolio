// Cursor Personalizado
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => { 
    mx = e.clientX; 
    my = e.clientY; 
});

const animCursor = () => {
    cursor.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
    requestAnimationFrame(animCursor);
};
animCursor();

// Efeito de Texto Digitado
const phrases = ['Back End Developer_', 'API Architect_', 'por alguma skill'];
let pi = 0, ci = 0, del = false;
const typed = document.getElementById('typedText');

const typeLoop = () => {
    const full = phrases[pi];
    if (!del) {
        typed.textContent = full.substring(0, ++ci);
        if (ci === full.length) { del = true; setTimeout(typeLoop, 1800); return; }
    } else {
        typed.textContent = full.substring(0, --ci);
        if (ci === 0) { del = false; pi = (pi + 1) % phrases.length; }
    }
    setTimeout(typeLoop, del ? 40 : 80);
};
typeLoop();

// Navbar ao scroll
window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 50);
});
// Captura o botão
const backToTopBtn = document.getElementById("backToTop");

// Mostra o botão quando o usuário descer 400px
window.onscroll = function() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        backToTopBtn.style.display = "flex";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// Função para subir suavemente
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const contactTrigger = document.getElementById('contactTrigger');
    const contactWrapper = document.querySelector('.contact-wrapper');

    if (contactTrigger) {
        contactTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            contactWrapper.classList.toggle('active');
            
            // Troca o texto para dar feedback
            if (contactWrapper.classList.contains('active')) {
                contactTrigger.innerText = "Fechar X";
            } else {
                contactTrigger.innerText = "Contato ↓";
            }
        });
    }
});