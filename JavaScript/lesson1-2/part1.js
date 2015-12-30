var x = +prompt('Введите число:');
var n = +prompt('Введите степень:');

function pow(a, b) {
  var result = 1;

  for (var i = 0; i < b; i++) {
    result = result * a;
  }

  return result;
}

console.log( pow(x, n) );