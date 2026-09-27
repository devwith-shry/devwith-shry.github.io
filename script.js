/**
 * devwith.shry — Portfolio Client Interaction
 * Sangita Bhowmick
 * Modern, accessible vanilla JavaScript with zero dependencies
 * Location: D:\portfolio\script.js
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initScrollSpy();
  initCopyEmail();
});

/**
 * Mobile Navigation Drawer Toggle & Accessibility
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const navLinks = mobileNav ? mobileNav.querySelectorAll('a') : [];

  if (!toggleBtn || !mobileNav) return;

  function openMenu() {
    toggleBtn.setAttribute('aria-expanded', 'true');
    mobileNav.classList.add('open');
    mobileNav.setAttribute('aria-hidden', 'false');
  }

  function closeMenu() {
    toggleBtn.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close when clicking any nav link
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      closeMenu();
      toggleBtn.focus();
    }
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (
      mobileNav.classList.contains('open') &&
      !mobileNav.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      closeMenu();
    }
  });
}

/**
 * ScrollSpy via IntersectionObserver for Active Nav Highlighting
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  if (!sections.length || !desktopLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        desktopLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

/**
 * Copy Email to Clipboard with Accessible Toast
 */
function initCopyEmail() {
  const copyButtons = document.querySelectorAll('[data-copy-email]');
  const toast = document.getElementById('toast');
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-copy-email') || 'bhowmicksangita291@gmail.com';
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(email);
        } else {
          // Fallback
          const temp = document.createElement('textarea');
          temp.value = email;
          document.body.appendChild(temp);
          temp.select();
          document.execCommand('copy');
          document.body.removeChild(temp);
        }
        showToast('Email address copied to clipboard');
      } catch (err) {
        showToast('Direct email: ' + email);
      }
    });
  });
}
