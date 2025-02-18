document.addEventListener('DOMContentLoaded', function() {
    const separators = document.querySelectorAll('.separator');
    const services = document.querySelectorAll('.service');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.5
    });

    separators.forEach(separator => {
        observer.observe(separator);
    });

    services.forEach(service => {
        observer.observe(service);
    });
});