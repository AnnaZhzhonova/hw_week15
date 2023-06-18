const numbers = [];
//Заполнить массив цифрами
for (let i = -10; i <= 10; i++) {
  numbers.push(i);
}
//Удалить все отрицательные числа из массива
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    numbers.splice(i, 1);
    i--;
  } else {
    numbers[i] = numbers[i] ** 2;
  }
}

numbers.sort((a, b) => b - a);

//Удалите повторяющиеся числа из массива
let uniqueNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (!uniqueNumbers.includes(numbers[i])) {
    uniqueNumbers.push(numbers[i]);
  }
}

console.log(uniqueNumbers);
