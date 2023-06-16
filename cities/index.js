const citiesList = document.getElementById("cities-list");

const cities = ["Москва", "Санкт-Петербург", "Нью-Йорк", "Токио"];
const temperatures = [];

for (let city of cities) {
  const inputTemp = prompt(`Введите температуру для города ${city}`);
  temperatures.push(inputTemp);
  const cityItem = document.createElement("li");
  cityItem.textContent = `Температура в городе ${city}: ${inputTemp} °С`;
  citiesList.append(cityItem);
}

let minimum = Infinity;
let maximum = -Infinity;

for (let i = 0; i < temperatures.length; i++) {
  const temp = temperatures[i];

  if (temp < minimum) {
    minimum = temp;
  }

  if (temp > maximum) {
    maximum = temp;
  }
}

const minTemp = document.createElement("p");
const maxTemp = document.createElement("p");
minTemp.textContent = `Минимальная температура: ${minimum} °С`;
maxTemp.textContent = `Маскимальная температура: ${maximum} °С`;
citiesList.after(minTemp);
citiesList.after(maxTemp);
