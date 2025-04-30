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
        el.classList.remove('hidden'); 
    });

    // Initialisation de AOS
    AOS.init({
        duration: 1000, 
        once: false,    
        offset: 120, 
    });

    // GSAP Animations
    // Animation des blocs d'engagement
    gsap.from(".engagement-bloc", {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.3, 
        delay: 0.5,
    });

    // Animation GSAP pour les membres de l'équipe
    gsap.from(".team-member", {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.3, // Délai entre chaque membre
        delay: 0.5,
    });

    // Animation au survol des membres de l'équipe
    const teamMembers = document.querySelectorAll(".team-member");
    teamMembers.forEach((member) => {
        member.addEventListener("mouseenter", () => {
            gsap.to(member, { scale: 1.05, duration: 0.3 });
        });
        member.addEventListener("mouseleave", () => {
            gsap.to(member, { scale: 1, duration: 0.3 });
        });
    });



    // Gestion des clics sur les liens d'ancrage
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            // Empêche le comportement par défaut
            e.preventDefault();

            // Récupère la cible de l'ancre
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Défilement fluide vers la section
                targetElement.scrollIntoView({ behavior: 'smooth' });

                // Rafraîchit AOS pour rejouer les animations
                setTimeout(() => {
                    AOS.refresh();
                }, 500); // Délai pour s'assurer que le défilement est terminé
            }
        });
    });


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