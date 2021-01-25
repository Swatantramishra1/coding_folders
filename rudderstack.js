let c = [12, 3, 4, 3, 1, 7, 8, 9, 12, 3, 4, 3, 1, 7, 8, 9];

var hash = function (s) {
  for (var i = 0, h = 0xdeadbeef; i < s.length; i++)
    h = Math.imul(h ^ s.charCodeAt(i), 2654435761);
  return (h ^ (h >>> 16)) >>> 0;
};

function filterData() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;

  if (randomNumber <= 20) {
    return true;
  }

  return false;
}

let count = 0;
for (let i = 0; i < 100000; i++) {
  let filter = filterData();
  if (filter) {
    count++;
  }
}

console.log(count);

function transform(arr) {
  //random select events based on users
  var filteredEvents = arr.filter(function (event) {
    var userId = event;
    if (userId) {
      return hash(userId) % 10 > 5;
    }

    return true;
  });

  return filteredEvents;
}

// transform(c);

// filterData(2);
// filterData(2);
// filterData(2);

setTimeout(() => {}, 1000);
