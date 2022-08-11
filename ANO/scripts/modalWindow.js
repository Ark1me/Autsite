const buttons = document.querySelectorAll('[data-modal-window]');

buttons.forEach(function (item) {
  item.addEventListener('click', () => {
    const buttonModal = this.dataset.modalWindow;
    const buttonId = document.querySelector('#' + buttonModal);
    buttonId.classList.remove('hide_window');

    buttonId.querySelector('.modal-window').addEventListener('click', function (event) {
      event.stopPropagation();
    });
  });
});

const allModals = document.querySelectorAll('[data-modal]');

allModals.forEach(function (item) {
  item.addEventListener('click', function () {
    this.classList.add('hidde_window');
  });
});
