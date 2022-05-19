'use strict';

const openMenu = document.querySelector(`.open-menu`);
const mainMenu = document.querySelector(`.navigation`);
const closeMenu = document.querySelector(`.close-button`);
const filterButtons = document.querySelectorAll(`.filter-button`);


openMenu.addEventListener(`click`, () => {
    mainMenu.classList.add(`active`);
});

closeMenu.addEventListener(`click`, () => {
    mainMenu.classList.remove(`active`);
});
