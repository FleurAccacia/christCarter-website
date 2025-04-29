document.addEventListener('DOMContentLoaded', () => {
    // Gestion des animations pour les séparateurs, services et la section "À propos"
    const separators = document.querySelectorAll('.separator');
    const services = document.querySelectorAll('.service');
    const aproposElements = document.querySelectorAll("#apropos, #apropos .zoom-text, #apropos .zoom-btn");
    const elementsToAnimate = document.querySelectorAll('.hidden');

    // IntersectionObserver pour les animations au défilement
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden'); // Supprime la classe 'hidden'
            }
        });
    }, {
        threshold: 0.5 // Déclenche lorsque 50% de l'élément est visible
    });

    // Observer les séparateurs
    separators.forEach((separator) => {
        observer.observe(separator);
    });

    // Observer les services
    services.forEach((service) => {
        observer.observe(service);
    });

    // Observer les éléments de la section "À propos"
    aproposElements.forEach((el) => {
        observer.observe(el);
    });

    // Ajouter la classe 'visible' directement au chargement de la page
    elementsToAnimate.forEach((el) => {
        el.classList.add('visible');
        el.classList.remove('hidden'); // Supprime la classe 'hidden'
    });

    // Gestion de la vidéo en plein écran (si applicable)
    const video = document.querySelector(".histoire-video");
    if (video) {
        video.addEventListener("click", () => {
            video.classList.toggle("fullscreen");
        });
    }

    // // Gestion du menu mobile (désactivé pour l'instant)
    // const menuToggle = document.querySelector('.menu-toggle');
    // const navMenu = document.querySelector('header nav ul');

    // menuToggle.addEventListener('click', () => {
    //     navMenu.classList.toggle('show');
    // });
});