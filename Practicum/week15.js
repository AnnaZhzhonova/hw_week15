//Задание 1
// Выведите числа от 1 до 10 в консоль

/* let number = 1;
while (number < 11) {
  console.log(number);
  number++;
} */

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль

/* let number = 2;
while (number <= 20) {
  console.log(number);
  number += 2;
} */

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке

/* let number = 10;
while (number >= 1) {
  console.log(number);
  number--;
} */

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10

/* for (let i = 1; i <= 10; i += 1) {
  const number = i * 5;
  console.log(number);
} */

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/* let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
  console.log(sum);*/

//Задание 6
// Выведите все элементы массива в консоль используя цикл for

/* const array = [1, 2, 3, 4, 5];
for (let item of array) {s
  console.log(item);
} */

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
/* const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);
 */
//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";

/* let animals = ["Кот", "Рыба", "Лемур"];
for (let i = 0; i < animals.length; i++) {
  const animal = animals[i];
  const prettyAnimal = `${animal} - прекрасное животное`;
  animals[i] = prettyAnimal;
}
console.log(animals); */

//Задание 9
// Выведите символы в строке в консоль

/* const str = "Hello";
for (let symbol of str) {
  console.log(symbol);
}
 */

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6

/* const array = [1, 2, 3, 4, 5];
for (let item of array) {
  console.log(item);
} */

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split

/* const sentences = ["Hello, world!", "How are you?"];
for (let word of sentences) {
  let arrays = word.split(" ");
  arrays.forEach((item) => {
    console.log(item);
  });
} */

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7

/* const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (number of numbers) {
  sum += number;
}
console.log(sum);
 */

//Задание 13
// Выведите длину каждого слова из массива строк в консоль

/* const list = ["apple", "banana", "cherry"];
for (let item of list) {
  console.log(item.length);
} */

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
/* const words = ["Hello", "world", "!"];
for (let word of words) {
  console.log(word.toUpperCase());
} */

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes

/* const greeting = "Hello, world!";
let vowelCount = 0;
const vowels = ["a", "e", "i", "o", "u"];

for (let letter of greeting) {
  if (vowels.includes(letter)) {
    vowelCount++;
  }
}
console.log(vowelCount); */

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними

/* const words = ["Hello", "world", "!"];
const newStr = words.join(" ");
console.log(newStr);
 */

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while

/* let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
} */

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while

/* let i = 10;
while (i >= 1) {
  console.log(i);
  i--;
} */

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break

/* const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;
for (let number of allNumbers) {
  if (number <= 0) {
    console.log("массив содержит отрицательные числа");
    break;
  }
  number++;
} */

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while

/*
const random = [2, 4, 6, -3, 8, 10];
let i = 0;

do {
  console.log(random[i]);
  i++;
} while (random[i] >= 0);
 */

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while

/* let number = 1;

do {
  if (number % 3 !== 0)
    console.log(number);
    number++
} while (number <= 100);
 */

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100

/* let sum = 0;
do {
  let num = +prompt("введите число:");
  sum += num;
} while (sum <= 100);
console.log(`Сумма введенных чисел больше 100`); */

//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет

/* const titles = document.querySelectorAll("h4");
console.log(titles);
for (let title of titles) {
  title.classList.add("title-color");
} */

//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
/* let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let randomString = "";
let maxLenght = 6;

do {
  let randomIndex = Math.floor(Math.random() * alphabet.length);
  randomString += alphabet[randomIndex];
} while (randomString.length < maxLenght);
console.log(randomString);
 */
