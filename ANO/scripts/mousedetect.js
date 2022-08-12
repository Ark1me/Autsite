const arrowUpButton = document.querySelector('.arrow_up');

function meme() {
  window.addEventListener('scroll', trackScroll);

  function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      arrowUpButton.classList.remove('arrow_up_show');
    }
    if (scrolled < coords) {
      arrowUpButton.classList.add('arrow_up_show');
    }
  }
}

meme();

