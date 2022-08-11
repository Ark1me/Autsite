const modalWindow = document.getElementById('modal_window_contacts');
const modalWrapper = document.querySelector('.modal_content_wrapper');
const button = document.querySelector('.button');
const phone = document.querySelector('.phone_icon');
const message = document.querySelector('.message');
button.addEventListener('click', function (event) {
  event.stopPropagation();
  modalWindow.classList.add('mini_window');
  modalWrapper.classList.add('hide_window_content');
});

modalWindow.addEventListener('click', function () {
  modalWindow.classList.remove('mini_window');
  modalWrapper.classList.remove('hide_window_content');
});
