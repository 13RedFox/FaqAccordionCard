'use strict';

const items = document.querySelectorAll('.content__accordion_item');

items.forEach((elem) => {
  elem.addEventListener('click', () => {
    items.forEach((item) => {
      item.classList.remove('active');
    });

    elem.classList.add('active');
  });
});
