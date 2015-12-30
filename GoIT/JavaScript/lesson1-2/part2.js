var arr = [];

for (var i = 0; i < 5; i++) {
  arr[i] = prompt('Введите любое имя:');
}

var userName = prompt('Введите свое имя:');
flag = false;

for (var i = 0; i < arr.length; i++) {
  if (arr[i] === userName) {
    flag = true;
    break;
  }
}

(flag) ? alert(userName + ', Вы успешно вошли!'):
  alert('Ошибка!');
