  const endDate = new Date('Febuary 14, 2021 00:00:00').getTime()

  const theDay = document.querySelector('.days');
  const theHour = document.querySelector('.hours');
  const theMinute = document.querySelector('.minutes');
  const theSecond = document.querySelector('.seconds')
  const done = document.querySelector('#done')

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const x = setInterval(() => {
    let now =  new Date().getTime();
    const difference = endDate - now;

    if(difference < 0){
      clearInterval(x);
      done.innerHTML = "<b>SORRY THE EVENT IS OVER!!!</b>";
      return 
    }

    theDay.innerHTML = Math.floor(difference / days);
    theHour.innerHTML = Math.floor((difference % days) / hours)
    theMinute.innerHTML = Math.floor((difference % hours) / minutes)
    theSecond.innerHTML = Math.floor((difference % minutes) / seconds)
  })