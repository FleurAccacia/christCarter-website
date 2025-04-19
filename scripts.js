document.addEventListener('DOMContentLoaded', () => {
    // Gestion des animations pour les séparateurs et les services
    const separators = document.querySelectorAll('.separator');
    const services = document.querySelectorAll('.service');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.5 
    });

    // Observer les séparateurs
    separators.forEach((separator) => {
        observer.observe(separator);
    });

    // Observer les services
    services.forEach((service) => {
        observer.observe(service);
    });

    // // Gestion du menu mobile
    // const menuToggle = document.querySelector('.menu-toggle');
    // const navMenu = document.querySelector('header nav ul');

    // menuToggle.addEventListener('click', () => {
    //     navMenu.classList.toggle('show');
    // });
});