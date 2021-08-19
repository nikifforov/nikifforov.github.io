"use strict";

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.burder').addEventListener('click', function () {
    document.querySelector('.burder').classList.toggle('burger_active');
    document.querySelector('.header-nav').classList.toggle('header-nav_open');
  });
});