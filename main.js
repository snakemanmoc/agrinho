// Animação dos números ao rolar a página
function animateCounter(el, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start);
    }
  }, 16);
}

// Ativar animações
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    document.querySelectorAll('.stat h3').forEach(el => {
      if (!el.dataset.animated) {
        animateCounter(el, parseFloat(el.textContent));
        el.dataset.animated = "true";
      }
    });
  }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

console.log("%c✅ Site de Segurança Alimentar carregado com sucesso!", "color: #4caf50; font-size: 16px;");