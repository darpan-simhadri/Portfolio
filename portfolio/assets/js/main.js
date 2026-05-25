/* ============================================================
   MAIN.JS — Portfolio
   Handles: mobile nav toggle, dark mode toggle, accessible form validation
   ============================================================ */

(function () {
  'use strict';

  /* ── Mobile Navigation ─────────────────────────────────── */
  const toggle = document.getElementById('nav-toggle');
  const nav    = document.getElementById('primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Dark Mode Theme Toggle ────────────────────────────── */
  const themeToggle = document.getElementById('theme-toggle');
  
  if (themeToggle) {
    const getTheme = () => document.documentElement.getAttribute('data-theme') || 'light';
    
    const setTheme = (theme) => {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      
      themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      
      const moonSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
      const sunSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
      
      themeToggle.innerHTML = theme === 'dark' ? sunSvg : moonSvg;
    };
    
    // Set initial toggle state matching the data-theme attribute
    setTheme(getTheme());
    
    themeToggle.addEventListener('click', () => {
      const newTheme = getTheme() === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  }

  /* ── Contact Form Validation ───────────────────────────── */
  const form     = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  if (form) {
    const fields = {
      name:    { el: form.querySelector('#name'),    msg: form.querySelector('#name-error'),    rule: v => v.trim().length >= 2,  hint: 'Please enter your full name (at least 2 characters).' },
      email:   { el: form.querySelector('#email'),   msg: form.querySelector('#email-error'),   rule: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), hint: 'Please enter a valid email address.' },
      subject: { el: form.querySelector('#subject'), msg: form.querySelector('#subject-error'), rule: v => v.trim().length >= 3,  hint: 'Please enter a subject (at least 3 characters).' },
      message: { el: form.querySelector('#message'), msg: form.querySelector('#message-error'), rule: v => v.trim().length >= 20, hint: 'Please enter a message (at least 20 characters).' },
    };

    function validateField(key) {
      const f = fields[key];
      if (!f.el) return true;
      const valid = f.rule(f.el.value);
      f.el.setAttribute('aria-invalid', String(!valid));
      if (f.msg) {
        f.msg.textContent = valid ? '' : f.hint;
        f.msg.classList.toggle('visible', !valid);
      }
      return valid;
    }

    // Live validation on blur
    Object.keys(fields).forEach(key => {
      const el = fields[key].el;
      if (el) {
        el.addEventListener('blur', () => validateField(key));
        el.addEventListener('input', () => {
          if (el.getAttribute('aria-invalid') === 'true') validateField(key);
        });
      }
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const results = Object.keys(fields).map(validateField);
      const allValid = results.every(Boolean);

      if (!allValid) {
        // Move focus to first invalid field
        const firstInvalid = Object.keys(fields).find(k => !fields[k].rule(fields[k].el?.value ?? ''));
        if (firstInvalid && fields[firstInvalid].el) {
          fields[firstInvalid].el.focus();
        }
        showFeedback('error', 'Please correct the errors above before submitting.');
      } else {
        showFeedback('success', '✓ Message sent! Thank you for reaching out. I will get back to you soon.');
        form.reset();
        Object.keys(fields).forEach(k => {
          if (fields[k].el) fields[k].el.setAttribute('aria-invalid', 'false');
          if (fields[k].msg) { fields[k].msg.textContent = ''; fields[k].msg.classList.remove('visible'); }
        });
      }
    });

    function showFeedback(type, text) {
      if (!feedback) return;
      feedback.textContent = text;
      feedback.className = type; // triggers display:block via CSS
      feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      feedback.focus();
    }
  }

})();
