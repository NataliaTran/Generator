document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const themeLabel = document.getElementById('themeLabel');
  const body = document.body;
  const gridButtons = document.querySelectorAll('.menu-grid button');
  const section = document.querySelector('section');

  // Animacja wejścia
  section.style.opacity = 0;
  section.style.transform = 'translateY(30px)';
  setTimeout(() => {
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    section.style.opacity = 1;
    section.style.transform = 'translateY(0)';
  }, 100);

  // Motyw + localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'ciemny') {
    body.classList.add('dark-mode');
    themeToggle.checked = true;
    themeLabel.textContent = 'Ciemny';
  }

  themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
      body.classList.add('dark-mode');
      themeLabel.textContent = 'Ciemny';
      localStorage.setItem('theme', 'ciemny');
    } else {
      body.classList.remove('dark-mode');
      themeLabel.textContent = 'Jasny';
      localStorage.setItem('theme', 'jasny');
    }
  });

  // Efekt kliknięcia
  gridButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.add('clicked');
      setTimeout(() => {
        button.classList.remove('clicked');
      }, 200);
    });
  });
});
