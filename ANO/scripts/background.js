let currentTime = new Date();
let hours = currentTime.getHours;
const background = document.querySelector('.leader');
console.log(hours);
function dayNight() {
  if (hours >= 6 && hours <= 12) {
    background.classList.remove('day');
    background.classList.remove('evening');
    background.classList.remove('night');
    background.classList.add('morning');
  }
  if (hours >= 13 && hours <= 18) {
    background.classList.remove('morning');
    background.classList.remove('evening');
    background.classList.remove('night');
    background.classList.add('day');
  }

  if (hours >= 19 && hours <= 23) {
    background.classList.remove('morning');
    background.classList.remove('day');
    background.classList.remove('night');
    background.classList.add('evening');
  }
  if (hours >= 0 && hours <= 5) {
    background.classList.remove('evening');
    background.classList.remove('morning');
    background.classList.remove('day');
    background.classList.add('night');
  }
}
dayNight();
