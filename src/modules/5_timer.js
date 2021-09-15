const timer = (deadLine) => {
  let timerDays = document.querySelectorAll('.count_1 > span');
  let timerHours = document.querySelectorAll('.count_2 > span');
  let timerMinutes = document.querySelectorAll('.count_3 > span');
  let timerSeconds = document.querySelectorAll('.count_4 > span');

  let getTimeRemaining = () => {
    let dateStop = new Date(deadLine).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let seconds = Math.floor(timeRemaining % 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let days = Math.floor(timeRemaining / 60 / 60 / 24);

    return { days, hours, minutes, seconds };
  };

  let updateClock = () => {
    let timer = getTimeRemaining();

    if (timer.seconds < 10) {
      timer.seconds = '0' + timer.seconds;
    }
    if (timer.minutes < 10) {
      timer.minutes = '0' + timer.minutes;
    }
    if (timer.hours < 10) {
      timer.hours = '0' + timer.hours;
    }
    if (timer.days < 10) {
      timer.days = '0' + timer.days;
    }

    timerDays.forEach(el => {
      el.textContent = timer.days
    });
    timerHours.forEach(el => {
      el.textContent = timer.hours
    });
    timerMinutes.forEach(el => {
      el.textContent = timer.minutes
    });
    timerSeconds.forEach(el => {
      el.textContent = timer.seconds
    });

    let repeatRun = setInterval(updateClock, 1000, deadLine);

    if (new Date().getTime() >= new Date(deadLine).getTime()) {
      clearInterval(repeatRun);

      timerDays.forEach(el => {
        el.textContent = '00'
      });
      timerHours.forEach(el => {
        el.textContent = '00'
      });
      timerMinutes.forEach(el => {
        el.textContent = '00'
      });
      timerSeconds.forEach(el => {
        el.textContent = '00'
      });
    }
  };

  updateClock();

};

export default timer;
