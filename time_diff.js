getTimeDiff = (R, P) => {
  let primeArray = String(R).split(":");

  const elemArray = String(P).split(":");
  let sec = 0,
    min = 0,
    hour = 0;
  elemArray.forEach((element, index) => {
    if (index == 0) {
      hour = parseInt(element) - parseInt(primeArray[0]);
      if (hour < 0) {
        hour = hour * -1;
      }
    } else if (index == 1) {
      min = parseInt(element) - parseInt(primeArray[1]);
      if (min < 0) {
        min = min * -1;
      }
    } else if (index == 2) {
      sec = parseInt(element) - parseInt(primeArray[2]);
      if (sec < 0) {
        sec = sec * -1;
      }
    }
  });

  if (hour == 0 && min == 0 && sec == 0) {
    return "now";
  } else if (hour) {
    return hour + " hours" + min + " mins" + sec + " seconds ago";
  } else if (min) {
    return min + "mins" + sec + " seconds ago";
  } else if (sec) {
    return sec + " seconds ago";
  }
};

console.log(getTimeDiff("23:05:38", "08:05:02"));
