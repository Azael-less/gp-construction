/* ============================================================
   GP Construction & Landscaping — main.js
   ============================================================ */

// ─── CUSTOM CURSOR ───
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animRing);
}
animRing();

document.querySelectorAll('a, button, .service-card, .proj-card, .step').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    ring.style.width = '52px';
    ring.style.height = '52px';
    ring.style.opacity = '0.8';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '12px';
    cursor.style.height = '12px';
    ring.style.width = '36px';
    ring.style.height = '36px';
    ring.style.opacity = '0.5';
  });
});

// ─── NAVBAR SCROLL ───
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

// ─── SCROLL REVEAL ───
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); }
  });
}, { threshold: 0.1 });
reveals.forEach(r => io.observe(r));

// ─── ANIMATED COUNTERS ───
function animCount(el, target) {
  let start = 0;
  const step = target / 2000 * 16;
  let timer = setInterval(() => {
    start += step;
    if (start >= target) { start = target; clearInterval(timer); }
    el.textContent = Math.floor(start) + (el.dataset.count === '98' ? '%' : '+');
  }, 16);
}

const counterObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('[data-count]').forEach(el => animCount(el, +el.dataset.count));
      counterObs.disconnect();
    }
  });
}, { threshold: 0.5 });

const statsEl = document.querySelector('.hero-stats');
if (statsEl) counterObs.observe(statsEl);

// ─── TAB SWITCHING ───
function switchTab(tab, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => {
    p.classList.remove('active');
    p.style.display = 'none';
  });
  btn.classList.add('active');
  const panel = document.getElementById('tab-' + tab);
  panel.classList.add('active');
  panel.style.display = 'grid';
}

// Initialize tabs on load
document.getElementById('tab-landscaping').style.display = 'grid';
document.getElementById('tab-construction').style.display = 'none';

// ─── MODAL ───
function openModal() {
  document.getElementById('quoteModal').classList.add('open');
}
function closeModal() {
  document.getElementById('quoteModal').classList.remove('open');
}
document.getElementById('quoteModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// ─── FORM SUBMISSIONS ───
function submitForm() {
  const btn = document.querySelector('.btn-submit');
  btn.textContent = 'Sending...';
  setTimeout(() => {
    btn.textContent = '✓ Sent! We\'ll call you soon.';
    btn.style.background = '#1fa83e';
  }, 1200);
}

function submitQuote() {
  const btn = document.querySelector('.modal-box .btn-submit');
  btn.textContent = 'Sending...';
  setTimeout(() => {
    btn.textContent = '✓ Request Sent!';
    btn.style.background = '#1fa83e';
    setTimeout(closeModal, 1500);
  }, 1200);
}

// ─── FLOATING PARTICLES ───
const canvas = document.getElementById('particles');
const numDots = 18;

for (let i = 0; i < numDots; i++) {
  const d = document.createElement('div');
  const size = Math.random() * 3 + 1;
  d.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    background: rgba(46, 204, 82, ${Math.random() * 0.3 + 0.05});
    border-radius: 50%;
    left: ${Math.random() * 100}%;
    top: ${Math.random() * 100}%;
    animation: floatP ${Math.random() * 8 + 6}s ease-in-out ${Math.random() * 4}s infinite alternate;
  `;
  canvas.appendChild(d);
}

const styleEl = document.createElement('style');
styleEl.textContent = `
  @keyframes floatP {
    0%   { transform: translateY(0) translateX(0); }
    100% { transform: translateY(-40px) translateX(20px); }
  }
`;
document.head.appendChild(styleEl);