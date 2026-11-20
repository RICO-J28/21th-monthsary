// Small interactions for the 21st monthsary scrapbook.
const music = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const musicLabel = document.getElementById('musicLabel');
if (music && musicToggle) {
  music.volume = 0.45;
  musicToggle.addEventListener('click', async () => {
    if (music.paused) {
      try { await music.play(); musicLabel.textContent = 'Pause music'; musicToggle.setAttribute('aria-label', 'Pause background music'); }
      catch { musicLabel.textContent = 'Tap to play'; }
    } else {
      music.pause(); musicLabel.textContent = 'Play music'; musicToggle.setAttribute('aria-label', 'Play background music');
    }
  });
}
// Reveal elements gently as they enter the viewport.
const revealTargets = document.querySelectorAll('.timeline-item, .letter-teaser, .letter-paper');
revealTargets.forEach(el => el.classList.add('reveal'));
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.12 });
  revealTargets.forEach(el => observer.observe(el));
} else revealTargets.forEach(el => el.classList.add('visible'));
// Floating hearts are decorative and kept deliberately subtle.
const heartLayer = document.getElementById('floatingHearts');
if (heartLayer && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const makeHeart = () => {
    const heart = document.createElement('span'); heart.className = 'float-heart'; heart.textContent = Math.random() > .5 ? '♡' : '♥';
    heart.style.left = `${Math.random() * 100}%`; heart.style.fontSize = `${12 + Math.random() * 16}px`;
    const duration = 8 + Math.random() * 7; heart.style.animationDuration = `${duration}s`; heartLayer.appendChild(heart);
    window.setTimeout(() => heart.remove(), duration * 1000);
  };
  window.setInterval(makeHeart, 1500);
}
