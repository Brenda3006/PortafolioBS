/* Nombre: Brenda Alicia Solis Calderon 
      Fecha: 24/08/2025
      Descripcion: Portafolio cv */

const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

// Cargar tema previamente guardado (opcional)
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggleBtn.textContent = '☀️ Cambiar a claro';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '☀️ Cambiar a claro';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleBtn.textContent = '🌙 Cambiar a oscuro';
    localStorage.setItem('theme', 'light');
  }
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.1
});

// slide-up y study cards
document.querySelectorAll('.study-card, .slide-up').forEach(el => {
  observer.observe(el);
});

const bg = document.querySelector('.background');

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;

  bg.style.setProperty('--x', `${x}%`);
  bg.style.setProperty('--y', `${y}%`);
});

function escapeHtml(html) {
  return html
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function mostrarAlerta() {
  const alerta = document.getElementById("custom-alert");
  alerta.classList.remove("oculto");
  alerta.classList.add("visible");

  setTimeout(() => {
    alerta.classList.remove("visible");
    alerta.classList.add("oculto");
  }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  const demoBoton = document.getElementById("demo-boton");
  if (demoBoton) {
    demoBoton.addEventListener("click", () => {
      document.getElementById("demo-texto").textContent = "¡Has hecho clic!";
    });
  }

  document.querySelectorAll(".btn-copiar").forEach((boton) => {
    boton.addEventListener("click", () => {
      const tipo = boton.dataset.copiar;
      const codigo = document.getElementById(`codigo-${tipo}`).innerText;

      navigator.clipboard.writeText(codigo).then(() => {
        boton.textContent = "✅ ¡Copiado!";
        setTimeout(() => {
          boton.textContent = "📋 Copiar código";
        }, 2000);
      }).catch(() => {
        boton.textContent = "⚠️ Error al copiar";
      });
    });
  });
});

function showFooterAlert() {
  const alertBox = document.getElementById('footer-alert');
  alertBox.classList.remove('oculto');
  alertBox.classList.add('visible');
  setTimeout(() => {
    alertBox.classList.remove('visible');
    alertBox.classList.add('oculto');
  }, 3000);
}

window.addEventListener('scroll', function() {
  if (window.innerHeight + Math.ceil(window.pageYOffset) >= document.body.offsetHeight - 2) {
    showFooterAlert();
  }
});