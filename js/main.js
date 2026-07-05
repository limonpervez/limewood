// Limewood Agency — Main JavaScript

(function () {
    'use strict';

    // ----- Header scroll state -----
    var header = document.querySelector('.header');
    function onScroll() {
        if (!header) return;
        header.classList.toggle('scrolled', window.scrollY > 8);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // ----- Mobile navigation -----
    var toggle = document.querySelector('.nav-toggle');
    if (toggle) {
        toggle.addEventListener('click', function () {
            document.body.classList.toggle('nav-open');
            toggle.setAttribute(
                'aria-expanded',
                document.body.classList.contains('nav-open') ? 'true' : 'false'
            );
        });

        // Close menu when a link is tapped
        document.querySelectorAll('.nav a').forEach(function (link) {
            link.addEventListener('click', function () {
                document.body.classList.remove('nav-open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ----- Active nav link -----
    var current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(function (link) {
        var href = link.getAttribute('href');
        if (href === current) {
            link.classList.add('active');
        }
    });

    // ----- Scroll reveal -----
    var revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealEls.length) {
        var observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );
        revealEls.forEach(function (el) { observer.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add('in'); });
    }

    // ----- Footer year -----
    var yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // ----- Contact form (static site: opens the user's mail client) -----
    var form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var name = encodeURIComponent(form.name.value.trim());
            var email = encodeURIComponent(form.email.value.trim());
            var subject = encodeURIComponent(form.subject.value.trim());
            var message = encodeURIComponent(form.message.value.trim());
            var body = message + '%0D%0A%0D%0A—%0D%0A' + name + '%0D%0A' + email;
            window.location.href =
                'mailto:hello@limewood.app?subject=' + subject + '&body=' + body;
        });
    }
})();
