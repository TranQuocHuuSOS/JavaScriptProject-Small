// const daysEl = document.getElementById("days")
// const hoursEl = document.getElementById("hours")
// const minsEl = document.getElementById("mins")
// const secondsEl = document.getElementById("seconds")
// const newYears= "1 Jan 2023";
// function countdown()
// {
//     const newYearsDate= new Date(newYears);
//     const currentDate=new Date();
//     const totalSeconds=(newYearsDate - currentDate) 
//     /1000;
//     const days= Math.floor(totalSeconds / 3600/24) ;
//     const hours= Math.floor(totalSeconds / 3600 +   1)%24;
//     const mins= Math.floor(totalSeconds/ 60)%60;
//     const seconds=Math.floor(totalSeconds)%60;
   
//     daysEl.innerHTML= days;
//     hoursEl.innerHTML= hours;
//     minsEl.innerHTML=mins;
//     secondsEl.innerHTML=seconds;

// }

// function forrmatTime(time){
//     return time < 24? (`0${time}`): time;
// }

// countdown();
// setInterval(countdown, 1000);






const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const newYears = "1 Jan 2023";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  
  // Chuyển đổi sang múi giờ UTC
  const newYearsDateUTC = Date.UTC(newYearsDate.getUTCFullYear(), newYearsDate.getUTCMonth(), newYearsDate.getUTCDate(), newYearsDate.getUTCHours(), newYearsDate.getUTCMinutes(), newYearsDate.getUTCSeconds());
  const currentDateUTC = Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate(), currentDate.getUTCHours(), currentDate.getUTCMinutes(), currentDate.getUTCSeconds());

  const totalSeconds = (newYearsDateUTC - currentDateUTC) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600 +1) % 24;
  const mins = Math.floor(totalSeconds / 60 +1) % 60;
  const seconds = Math.floor(totalSeconds +1) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minsEl.innerHTML = mins;
  secondsEl.innerHTML =seconds;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);