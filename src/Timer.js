export default function Timer(countDownDate) {
  var now = new Date().getTime();
  var distance = now - countDownDate;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance < 0) {
    return false;
  }

  return {
    days,
    hours,
    minutes,
    seconds,
    distance,
  };
}
