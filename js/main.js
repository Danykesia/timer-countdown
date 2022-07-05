const timer = document.querySelector('.timer');
let seconds = 0;
let counter;

function getHoursOfSecs(sec) {
  const date = new Date(sec * 1000);
  return date.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}

function startClock() {
  counter = setInterval(() => {
    seconds++
    return timer.innerHTML = getHoursOfSecs(seconds)
  }, 1000)
}

document.addEventListener('click', (e) => {
  const el = e.target;

  if (el.classList.contains('start')) {
    clearInterval(counter);
    timer.classList.remove('pulse-animation');
    timer.style.color = '#111f0d';
    startClock();
  }

  if (el.classList.contains('pause')) {
    clearInterval(counter);
    timer.classList.add('pulse-animation');
    timer.style.color = '#f51414';
  }

  if (el.classList.contains('reset')) {
    clearInterval(counter);
    timer.innerHTML = '00:00:00';
    timer.classList.remove('pulse-animation');
    timer.style.color = '#111f0d'
    seconds = 0;
  }
})

