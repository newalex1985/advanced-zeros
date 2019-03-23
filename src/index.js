module.exports = function getZerosCount(number, base) {

  var simpleNum = [];
  var simplePower = [];
  var simpleCount = [];
  var index;
  var n = base;
  var d = 2;
  var min;

  while (d * d <= n) {
    if (n % d == 0) {
      index = simpleNum.indexOf(d);
      if (index != -1) {
        simplePower[index]++;
      } else {
        simpleNum.push(d);
        simplePower.push(1);
      }
      n /= d;
    } else {
      d += 1;
    }
  }
  if (n > 1) {
    index = simpleNum.indexOf(n);
    if (index != -1) {
      simplePower[index]++;
    } else {
      simpleNum.push(n);
      simplePower.push(1);
    }
  }

  for (var i = 0; i < simpleNum.length; i++) {
    simpleCount[i] = parseInt(numberEntry(simpleNum[i], number) / simplePower[i]);
  }

  min = simpleCount[0];

  for (i = 1; i < simpleCount.length; i++) {
    if (simpleCount[i] < min) {
      min = simpleCount[i];
    }
  }

  return min;

}

function numberEntry(multiplier, number) {
  var count = 0;
  var power = 1;
  var res;

  while (1) {
    power *= multiplier;
    res = parseInt(number / power);
    if (res == 0) {
      return count;
    }
    count += res;
  }
}
