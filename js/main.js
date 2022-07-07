// Timer
function setTimer() {
  const timer = document.querySelector('.timer');
  let seconds1 = 0;
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
      seconds1++
      return timer.innerHTML = getHoursOfSecs(seconds1)
    }, 1000)
  }

  document.addEventListener('click', (e) => {
    const el = e.target;

    if (el.classList.contains('start1')) {
      clearInterval(counter);
      timer.classList.remove('pulse-animation');
      timer.style.color = '#111f0d';
      startClock();
    }

    if (el.classList.contains('pause1')) {
      clearInterval(counter);
      timer.classList.add('pulse-animation');
      timer.style.color = '#f51414';
    }

    if (el.classList.contains('reset1')) {
      clearInterval(counter);
      timer.innerHTML = '00:00:00';
      timer.classList.remove('pulse-animation');
      timer.style.color = '#111f0d'
      seconds1 = 0;
    }
  })
};
setTimer()

// Countdown
function setCountdown() {
  const countdown = document.querySelector('.countdown');
  const progressCircle = document.querySelector('.progress');
  const radius = progressCircle.r.baseVal.value;

  // Circumference of a circle = 2pi
  const circumference = radius * 2 * Math.PI;
  progressCircle.style.strokeDasharray = circumference;
  let seconds2 = 0;
  let countdownProgress;

  function setZeroOnLeft(num) {
    return num < 10 ? `0${num}` : num;
  };

  function setProgress(percent) {
    progressCircle.style.strokeDashoffset = circumference - (percent / 100) * circumference
  };
  setProgress(0)

  function getSecs(min) {
    const date = new Date(min * 1000);
    date.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    })
    return `${setZeroOnLeft(date.getMinutes())}:${setZeroOnLeft(date.getSeconds())}`
  };

  function startCountDown() {
    countdownProgress = setInterval(() => {
      seconds2++;
      const totalSeconds = 60000 * 15 / 1000;
      let percentProgress = seconds2 * 100 / totalSeconds;
      setProgress(percentProgress);
      return countdown.innerHTML = getSecs(seconds2);
    }, 1000);

    setTimeout(() => {
      clearTimeout(progress)
    }, 60000)
  };

  document.addEventListener('click', (e) => {
    let el = e.target;

    if (el.classList.contains('start2')) {
      clearInterval(countdownProgress);
      countdown.style.color = '#ffffff';
      startCountDown();
    }

    if (el.classList.contains('pause2')) {
      clearInterval(countdownProgress);
      countdown.style.color = '#f51414';
    }

    if (el.classList.contains('reset2')) {
      clearInterval(countdownProgress);
      countdown.innerHTML = '00:00';
      countdown.style.color = '#ffffff';
      setProgress(0)
      seconds2 = 0;
    }
  });
};
setCountdown()