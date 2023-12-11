$(document).ready(function () {
  $('.header__burger').on('click', function (evt) {
    $('html').toggleClass('modal');
    let $this = $(this);
    $('.header').toggleClass('active');
    $('.header-container').slideToggle();
  });

  if ($('.catalog-right-box').length) {
    if ($('.catalog-right__item').length % 2) {
      $('.catalog-right__item')[
        $('.catalog-right__item').length - 1
      ].style.border = 'unset';
    } else {
      $('.catalog-right__item')[
        $('.catalog-right__item').length - 1
      ].style.border = 'unset';
      $('.catalog-right__item')[
        $('.catalog-right__item').length - 2
      ].style.border = 'unset';
    }
  }

  if ($('.header').length) {
    $('.header .header__search').on('click', function (evt) {
      evt.preventDefault();
      $('html').toggleClass('modal');

      const $modal_box = $('.modal-box');
      const $container = $modal_box.children('.search-modal');
      $modal_box.toggleClass('active');
      $container.toggleClass('active');
    });
    $('.modal-box__exit').on('click', function (evt) {
      evt.preventDefault();
      $('html').toggleClass('modal');

      const $container = $(this).parent('.modal-box-container');
      const $modal_box = $container.parent('.modal-box');
      $modal_box.toggleClass('active');
      $container.toggleClass('active');
    });
  }

  if ($('.product-page').length) {
    $('.product-page-left__btn').on('click', function (evt) {
      if (!$(this).hasClass('active')) {
        $(this).siblings()[0].classList.remove('active');
        $(this).toggleClass('active');
        $(this)
          .closest('.product-page-left')
          .children('.product-page-left__img')
          .each(function () {
            $(this).toggleClass('active');
          });
      }
    });
    $('.product-page-left__img.document, .modal-box__zoom').on(
      'click',
      function (evt) {
        evt.preventDefault();
        $('html').toggleClass('modal');

        const $modal_box = $('.modal-box');
        const $container = $modal_box.children('.modal-box__zoom');
        $modal_box.toggleClass('active');
        $container.toggleClass('active');
      }
    );
    $('.product-page-right__help-btn').on('click', function (evt) {
      evt.preventDefault();
      $('html').toggleClass('modal');

      const $modal_box = $('.modal-box');
      const $container = $modal_box.children('.application-order');
      $modal_box.toggleClass('active');
      $container.toggleClass('active');
    });
    $('.modal-box__exit').on('click', function (evt) {
      evt.preventDefault();
      $('html').toggleClass('modal');

      const $container = $(this).parent('.modal-box-container');
      const $modal_box = $container.parent('.modal-box');
      $modal_box.toggleClass('active');
      $container.toggleClass('active');
    });
    $('.modal-box__form-btn').on('click', function (evt) {
      evt.preventDefault();
      console.log($(this).parents());
      const $container = $(this).parents('.modal-box-container');
      const $modal_box = $container.siblings('.application-order-sent');
      $modal_box.toggleClass('active');
      $container.toggleClass('active');
    });
  }

  if ($('.information-goods').length) {
    const tabBtn1 = document.getElementById('information-goods__tabs-btn-1');
    const tabBtn2 = document.getElementById('information-goods__tabs-btn-2');
    const content1 = document.getElementById('information-goods__content-1');
    const content2 = document.getElementById('information-goods__content-2');

    content1.style.display = 'block';

    tabBtn1.addEventListener('change', function () {
      if (this.checked) {
        content1.style.display = 'flex';
        content2.style.display = 'none';
      }
    });

    tabBtn2.addEventListener('change', function () {
      if (this.checked) {
        content1.style.display = 'none';
        content2.style.display = 'flex';
      }
    });
  }

  if ($('.custom-select').length) {
    // Получаем все блоки custom-select
    const customSelects = document.querySelectorAll('.custom-select');

    // Для каждого блока custom-select
    customSelects.forEach((customSelect) => {
      // Получаем чекбоксы внутри текущего блока custom-select
      const checkboxes = customSelect.querySelectorAll(
        '.custom-select__checkbox input[type="checkbox"]'
      );

      // Находим кнопку "сбросить" внутри текущего блока custom-select
      const resetButton = customSelect.querySelector('.custom-select__reset');

      // Добавляем обработчик для каждого чекбокса внутри текущего блока custom-select
      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', function () {
          // Проверяем, выбран ли хотя бы один чекбокс
          const anyChecked = [...checkboxes].some(
            (checkbox) => checkbox.checked
          );

          // Показываем или скрываем кнопку "сбросить" в зависимости от состояния чекбоксов
          resetButton.style.display = anyChecked ? 'block' : 'none';
        });
      });

      // Добавляем обработчик для кнопки "сбросить" внутри текущего блока custom-select
      resetButton.addEventListener('click', function () {
        // Сбрасываем состояние всех чекбоксов внутри текущего блока custom-select
        checkboxes.forEach((checkbox) => {
          checkbox.checked = false;
        });

        // Скрываем кнопку "сбросить" после сброса состояния чекбоксов
        resetButton.style.display = 'none';
      });
    });
  }

  if ($('.custom-select').length) {
    // Получаем все блоки custom-select
    const customSelects = document.querySelectorAll('.custom-select');

    // Для каждого блока custom-select
    customSelects.forEach((customSelect) => {
      // Находим заголовок и содержимое текущего блока custom-select
      const selectHeading = customSelect.querySelector('.custom-select__title');

      // Добавляем обработчик клика на заголовок
      selectHeading.addEventListener('click', function () {
        // Переключаем класс active для содержимого
        customSelect.classList.toggle('active');
      });
    });
  }
});
