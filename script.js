
// Exemplo de animação com JavaScript
const heroImage = document.querySelector('.hero-image img');

heroImage.addEventListener('mouseenter', () => {
    heroImage.style.filter = 'blur(2px)';
});

heroImage.addEventListener('mouseleave', () => {
    heroImage.style.filter = 'none';
});

// Animação de rolagem suave para links internos
const linksInternos = document.querySelectorAll('a[href^="#"]');

linksInternos.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const scrollPosition = targetElement.getBoundingClientRect().top;
            const headerHeight = document.querySelector('header').offsetHeight;

            window.scrollTo({
                top: scrollPosition - headerHeight,
                behavior: 'smooth'
            });
        }
    });
});
