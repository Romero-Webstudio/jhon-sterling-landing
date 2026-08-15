// Footer copyright year

const footerYear = document.getElementById('footer-year');
if (footerYear) footerYear.textContent = new Date().getFullYear();

// Mobile navigation toggle

const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Results carousel ("book" style: one slide at a time, scroll-snap driven)

const carouselViewport = document.getElementById('carousel-viewport');
const carouselTrack = document.getElementById('carousel-track');

if (carouselViewport && carouselTrack) {
  const slides = Array.from(carouselTrack.children);
  const dotsWrap = document.getElementById('carousel-dots');
  const counterEl = document.getElementById('carousel-current');
  const totalEl = document.getElementById('carousel-total');
  const prevBtn = document.querySelector('.carousel-arrow[data-dir="-1"]');
  const nextBtn = document.querySelector('.carousel-arrow[data-dir="1"]');

  if (totalEl) totalEl.textContent = slides.length;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'carousel-dot';
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `Ir a la transformación ${i + 1}`);
    dot.addEventListener('click', () => goToSlide(i));
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.children);

  // activeIndex is the single source of truth for the UI (dots, counter,
  // disabled arrows). It only changes on deliberate navigation or once a
  // scroll (programmatic or swipe) has actually settled — never read mid-animation.
  let activeIndex = 0;
  let isAnimating = false;
  let settleTimer = null;

  function clampIndex(index) {
    return Math.max(0, Math.min(slides.length - 1, index));
  }

  function renderActive() {
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === activeIndex));
    if (counterEl) counterEl.textContent = activeIndex + 1;
    if (prevBtn) prevBtn.disabled = activeIndex === 0;
    if (nextBtn) nextBtn.disabled = activeIndex === slides.length - 1;
  }

  function goToSlide(index) {
    if (isAnimating) return; // ignore nav while the previous transition is still running
    const clamped = clampIndex(index);
    if (clamped === activeIndex) return;
    isAnimating = true;
    activeIndex = clamped;
    carouselViewport.scrollTo({ left: slides[clamped].offsetLeft, behavior: 'smooth' });
    renderActive();
  }

  function handleScrollSettled() {
    isAnimating = false;
    // Re-sync in case the user swiped by hand instead of using a control.
    activeIndex = clampIndex(Math.round(carouselViewport.scrollLeft / carouselViewport.clientWidth));
    renderActive();
  }

  if ('onscrollend' in window) {
    carouselViewport.addEventListener('scrollend', handleScrollSettled);
  } else {
    // Fallback for browsers without the scrollend event: treat scrolling as
    // "settled" once no further scroll events arrive for 120ms.
    carouselViewport.addEventListener('scroll', () => {
      clearTimeout(settleTimer);
      settleTimer = setTimeout(handleScrollSettled, 120);
    }, { passive: true });
  }

  prevBtn && prevBtn.addEventListener('click', () => goToSlide(activeIndex - 1));
  nextBtn && nextBtn.addEventListener('click', () => goToSlide(activeIndex + 1));

  carouselViewport.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); goToSlide(activeIndex - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); goToSlide(activeIndex + 1); }
  });

  renderActive();
}

// Like buttons — local-only interaction, no backend/persistence.
// Resets on page reload by design; it's a gamification detail, not a real shared counter.

document.querySelectorAll('.like-btn').forEach((btn) => {
  const countEl = btn.querySelector('.like-count');
  const baseCount = 0;
  let liked = false;

  btn.addEventListener('click', () => {
    liked = !liked;
    btn.classList.toggle('is-liked', liked);
    btn.setAttribute('aria-pressed', String(liked));
    if (countEl) countEl.textContent = liked ? baseCount + 1 : baseCount;
  });
});
