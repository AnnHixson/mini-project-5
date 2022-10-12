// https://stackoverflow.com/questions/10590461/dynamic-date-and-time-with-moment-js-and-setinterval
function timeCount() {
    now = moment().format("MMM Do, YYYY - h:mm:ss a");
    $("#date-and-time").text(now);
    setInterval(function () {timeCount()}, 1000);
  }
  timeCount();