$(document).ready(function() {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
      fade: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)', // Добавляем прозрачность к черному цвету
      },
    },
    // Увеличиваем продолжительность фейда
    speed: 500, // Устанавливаем продолжительность фейда в миллисекундах
    pagination: {
      el: ".swiper-pagination.custom-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false 
    },
    watchOverflow: true,
    observer: true,
    observeParents: true,
    preloadImages: false, // или true, в зависимости от вашей необходимости
    // Добавляем настройки для адаптивности
    breakpoints: {
      1024: {
        spaceBetween: 20, // Уменьшаем расстояние между слайдами на больших экранах
      },
      768: {
        spaceBetween: 15, // Уменьшаем расстояние между слайдами на средних экранах
      },
      480: {
        spaceBetween: 10, // Уменьшаем расстояние между слайдами на маленьких экранах
      },
    },
  });
});

  
  const items = document.querySelectorAll(".accordion button");

  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    
    for (i = 0; i < items.length; i++) {
      items[i].setAttribute('aria-expanded', 'false');
    }
    
    if (itemToggle == 'false') {
      this.setAttribute('aria-expanded', 'true');
    }
  }
  
  items.forEach(item => item.addEventListener('click', toggleAccordion));
  

  document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.menu-burger__header');
    const menu = document.querySelector('.container');
  
    burger.addEventListener('click', function() {
      burger.classList.toggle('open-menu');
    });
  });
  

// Анимация заголовка экскурсий
gsap.from('.title__excursion', {
  duration: 1,
  y: 100,
  opacity: 0,
  delay: 0.5
});

// Анимация контейнера с экскурсиями
gsap.from('.flex__container', {
  duration: 1,
  y: 100,
  opacity: 0,
  delay: 1
});

// Анимация кнопки выбора экскурсии
gsap.from('.button__center', {
  duration: 1,
  y: 100,
  opacity: 0,
  delay: 1.5
});

// Анимация формы
gsap.from('#form__excursion', {
  duration: 1,
  y: 100,
  opacity: 0,
  delay: 2
});

// Анимация футера
gsap.from('.footer', {
  duration: 1,
  y: 100,
  opacity: 0,
  delay: 2.5
});

// Анимация навигации и логотипа
gsap.from('.navigation', {
  duration: 1,
  y: -50, // Начальное положение по вертикали (выше экрана)
  opacity: 0, // Начальная прозрачность
  ease: 'power2.inOut', // Тип плавности анимации
  delay: 0 // Задержка перед началом анимации
});

gsap.from('.swiper-slide', {
  duration: 1,
  x: -20, // Начальное положение по вертикали (выше экрана)
  opacity: 0, // Начальная прозрачность
  stagger: 0.2, // Задержка между анимациями слайдов
  ease: 'power2.inOut', // Тип плавности анимации
});


$(document).ready(function() {
  const scroller = $('.scroll-up');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 0) {
      scroller.show();
    } else {
      scroller.hide();
    }
  });

  scroller.click(function(event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
});




