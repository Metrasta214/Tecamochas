// Formulario ---------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
  const commentForm = document.getElementById('commentForm');
  const commentsContainer = document.getElementById('commentsContainer');
  
  // Colores de fondo alternativos para los comentarios
  const bgColors = ['bg-blue-100', 'bg-pink-100', 'bg-orange-100', 'bg-purple-100', 'bg-green-100'];
  
  // Manejar el envío del formulario
  commentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const userName = document.getElementById('userName').value;
    const userComment = document.getElementById('userComment').value;
    
    if(userName && userComment) {
      // Crear nuevo elemento de comentario
      const newComment = document.createElement('div');
      const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];
      
      newComment.className = `${randomColor} rounded-xl p-4 shadow-md touch-card`;
      newComment.innerHTML = `"${userComment}" <span class="font-semibold">- ${userName}</span>`;
      
      // Agregar el nuevo comentario al inicio
      commentsContainer.prepend(newComment);
      
      // Limpiar el formulario
      commentForm.reset();
      
      // Guardar en localStorage (opcional)
      saveCommentToLocalStorage(userName, userComment);
    }
  });
  
  // Cargar comentarios guardados al iniciar (opcional)
  function loadSavedComments() {
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
    savedComments.forEach(comment => {
      const newComment = document.createElement('div');
      const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];
      
      newComment.className = `${randomColor} rounded-xl p-4 shadow-md touch-card`;
      newComment.innerHTML = `"${comment.text}" <span class="font-semibold">- ${comment.author}</span>`;
      
      commentsContainer.prepend(newComment);
    });
  }
  
  // Guardar comentario en localStorage (opcional)
  function saveCommentToLocalStorage(author, text) {
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
    savedComments.unshift({ author, text });
    localStorage.setItem('comments', JSON.stringify(savedComments));
  }
  
  // Cargar comentarios guardados cuando la página se carga
  loadSavedComments();
});

document.addEventListener('DOMContentLoaded', () => {
  // 1. Creación de emojis de frutas
  const createFruitEmojis = () => {
    const container = document.getElementById('frutas-container');
    if (!container) return;
    
    const emojis = ['🍎', '🍊', '🍌', '🍓', '🍉', '🍇', '🍍', '🥭'];
    const colors = ['#FF5252', '#FFEB3B', '#4CAF50', '#FF4081', '#9C27B0'];
    const emojiCount = 70;

    for (let i = 0; i < emojiCount; i++) {
      const emoji = document.createElement('div');
      emoji.className = 'fruit-emoji';
      
      // Configuración aleatoria para cada emoji
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.style.left = `${Math.random() * 100}vw`;
      emoji.style.top = `${Math.random() * 100}vh`;
      emoji.style.fontSize = `${Math.random() * 2 + 1.5}rem`;
      emoji.style.animationDuration = `${Math.random() * 10 + 10}s`;
      emoji.style.animationDelay = `${Math.random() * 5}s`;
      emoji.style.color = colors[Math.floor(Math.random() * colors.length)];
      
      // Movimiento único para cada emoji
      emoji.style.setProperty('--y-end', `${Math.random() * 100 - 50}px`);
      emoji.style.setProperty('--x-rotate', `${Math.random() * 20 - 10}deg`);
      
      container.appendChild(emoji);
    }
  };

  // 2. Efecto de movimiento con el mouse
  const setupMouseEffect = () => {
    document.addEventListener('mousemove', (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      document.querySelectorAll('.fruit-emoji').forEach((emoji, index) => {
        const speed = 0.1 + (index * 0.005);
        const xMove = (x - 0.5) * 50 * speed;
        const yMove = (y - 0.5) * 50 * speed;
        
        emoji.style.transform = `translate(${xMove}px, ${yMove}px)`;
      });
    });
  };

  // 3. Animación de scroll para elementos
  const setupScrollAnimation = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.slide-in').forEach(el => {
      observer.observe(el);
    });
  };

  // 4. Efecto touch para móviles
  const setupTouchEffects = () => {
    const cards = document.querySelectorAll('.touch-card');
    
    cards.forEach(card => {
      card.addEventListener('touchstart', () => {
        card.classList.add('vibrate');
      });
      
      card.addEventListener('touchend', () => {
        card.classList.remove('vibrate');
      });
    });
  };

  

  // Inicializar todas las funciones
  createFruitEmojis();
  setupMouseEffect();
  setupScrollAnimation();
  setupTouchEffects();
});


