document.addEventListener('DOMContentLoaded', function() {
  // Infinite carousel functionality
  const carousel = document.querySelector('.carousel');
  const carouselInner = document.querySelector('.carousel-inner');
  const carouselItems = document.querySelectorAll('.carousel-item');
  
  let currentIndex = 0;
  const itemCount = 3; // We now have exactly 3 images
  const intervalTime = 2500; // Changed to 4 seconds
  let carouselInterval;
  
  function updateCarousel() {
    carouselInner.style.transition = 'transform 0.7s ease-in-out';
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  
  function nextSlide() {
    currentIndex++;
    updateCarousel();
    checkCarouselPosition();
  }

  function prevSlide() {
    currentIndex--;
    updateCarousel();
    checkCarouselPosition();
  }

  function checkCarouselPosition() {
    if (currentIndex >= itemCount) {
      currentIndex = 0;
      carouselInner.style.transition = 'none';
      updateCarousel();
      setTimeout(() => {
        carouselInner.style.transition = 'transform 0.5s ease-in-out';
      }, 0);
    } else if (currentIndex < 0) {
      currentIndex = itemCount - 1;
      carouselInner.style.transition = 'none';
      updateCarousel();
      setTimeout(() => {
        carouselInner.style.transition = 'transform 0.5s ease-in-out';
      }, 0);
    }
  }

  // Add event listeners to navigation buttons
  document.querySelectorAll('.carousel-btn').forEach(btn => {
    if (btn.querySelector('.fa-chevron-left')) {
      btn.addEventListener('click', prevSlide);
    } else {
      btn.addEventListener('click', nextSlide);
    }
  });
  
  function startCarousel() {
    carouselInterval = setInterval(nextSlide, intervalTime);
  }
  
  function stopCarousel() {
    clearInterval(carouselInterval);
  }
  
  // Start carousel on load
  startCarousel();
  
  // Pause on hover
  carousel.addEventListener('mouseenter', stopCarousel);
  carousel.addEventListener('mouseleave', startCarousel);
  
  // Form validation
  const bookingForm = document.querySelector('.booking-form-section form');
  
  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic validation
      const name = document.getElementById('name').value.trim();
      const documentId = document.getElementById('document').value.trim();
      const email = document.getElementById('email').value.trim();
      const service = document.getElementById('service').value;
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;
      
      if (!name || !documentId || !email || !service || !date || !time) {
        alert('Por favor complete todos los campos obligatorios.');
        return;
      }
      
      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Por favor ingrese un correo electrónico válido.');
        return;
      }
      
      // If all validations pass
      alert(`¡Cita reservada con éxito!\n\nNombre: ${name}\nServicio: ${service}\nFecha: ${date}\nHora: ${time}`);
      bookingForm.reset();
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Animate elements on scroll
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.service-card, .section-title, .contact-info');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.classList.add('animate-fade-in');
      }
    });
  };
  
  // Initial check
  animateOnScroll();
  
  // Check on scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Set minimum date to today for date picker
  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const minDate = `${yyyy}-${mm}-${dd}`;
    
    dateInput.setAttribute('min', minDate);
  }
  
  // Set business hours for time input (9am to 8pm)
  const timeInput = document.getElementById('time');
  if (timeInput) {
    timeInput.addEventListener('change', function() {
      const selectedTime = this.value;
      if (selectedTime) {
        const [hours, minutes] = selectedTime.split(':').map(Number);
        if (hours < 9 || hours > 20) {
          alert('Nuestro horario de atención es de 9:00 AM a 8:00 PM');
          this.value = '';
        }
      }
    });
  }
});