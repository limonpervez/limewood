// Limewood Agency — Main JavaScript

(function () {
    'use strict';

    // ----- Clean URL in the address bar (/index.html → /, /apps.html → /apps) -----
    if (/\.html$/.test(window.location.pathname) && window.history.replaceState) {
        var clean = window.location.pathname
            .replace(/index\.html$/, '')
            .replace(/\.html$/, '');
        window.history.replaceState(null, '', clean + window.location.search + window.location.hash);
    }

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
    var current = window.location.pathname
        .split('/').pop()
        .replace(/\.html$/, '')
        .replace(/^index$/, '');
    document.querySelectorAll('.nav-link').forEach(function (link) {
        var href = link.getAttribute('href').replace(/^\//, '');
        link.classList.toggle('active', href === current);
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

    // ----- Disabled buttons (e.g. "coming soon") -----
    document.querySelectorAll('a[aria-disabled="true"]').forEach(function (link) {
        link.addEventListener('click', function (e) { e.preventDefault(); });
    });

    // ----- Contact form (static site: sends via FormSubmit) -----
    var form = document.getElementById('contactForm');
    if (form) {
        var statusEl = document.getElementById('formStatus');
        var submitBtn = form.querySelector('button[type="submit"]');

        function showStatus(type, text) {
            if (!statusEl) return;
            statusEl.textContent = text;
            statusEl.className = 'form-status ' + type;
            statusEl.hidden = false;
        }

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Honeypot: silently drop bot submissions
            if (form._honey && form._honey.value) return;

            var payload = {
                name: form.name.value.trim(),
                email: form.email.value.trim(),
                subject: form.subject.value.trim(),
                message: form.message.value.trim(),
                _subject: 'Limewood contact: ' + form.subject.value.trim(),
                _template: 'table'
            };

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.firstChild.textContent = 'Sending… ';
            }
            if (statusEl) statusEl.hidden = true;

            fetch('https://formsubmit.co/ajax/limonpervez@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload)
            })
                .then(function (res) {
                    if (!res.ok) throw new Error('Request failed');
                    return res.json();
                })
                .then(function (data) {
                    if (data.success === true || data.success === 'true') {
                        showStatus('success', "Message sent! We'll get back to you within a day.");
                        form.reset();
                    } else {
                        throw new Error(data.message || 'Not delivered');
                    }
                })
                .catch(function () {
                    showStatus('error', "Something went wrong. Please email us directly at hello@limewood.app.");
                })
                .finally(function () {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.firstChild.textContent = 'Send message ';
                    }
                });
        });
    }
})();
