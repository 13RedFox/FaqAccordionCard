'use strict';

const items = document.querySelectorAll('.content__accordion_item');

items.forEach((element) => {
  element.addEventListener('click', () => {
    const isActive = element.classList.contains('active');

    items.forEach((item) => {
      item.classList.remove('active');
    });

    if (isActive) {
      element.classList.remove('active');
    } else {
      element.classList.add('active');
    }
  });
});
