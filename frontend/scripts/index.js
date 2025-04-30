document.addEventListener('DOMContentLoaded', () => {
    // Initialisation de AOS
    AOS.init({
        duration: 1000, // Durée des animations (en ms)
        once: false,    // Les animations se rejouent à chaque fois qu'une section entre dans la vue
        offset: 120,    // Décalage avant le déclenchement de l'animation
    });

    // GSAP Animations
    // Animation des boutons au survol
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((btn) => {
        btn.addEventListener("mouseenter", () => {
            gsap.to(btn, { scale: 1.1, duration: 0.3 });
        });
        btn.addEventListener("mouseleave", () => {
            gsap.to(btn, { scale: 1, duration: 0.3 });
        });
    });

    // Animation des images de la galerie
    gsap.from("#galerie .grid a img", {
        duration: 1,
        opacity: 0,
        scale: 0.8,
        stagger: 0.2, // Délai entre chaque image
        delay: 0.5,
    });

    // Animation des services
    gsap.from("#services .service", {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.3, // Délai entre chaque service
        delay: 0.5,
    });
});