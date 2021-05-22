const createLog = (event) => {
  event.preventDefault();
  const array = [];

  const time = document.querySelector("#time-input");
  const workout = document.querySelector("#workout-input");
  const date = document.querySelector("#date-input");
  const teste = document.querySelector("[data-teste]");

  const item = {
    workout: workout.value,
    date: date.value,
    time: time.value,
  }

  array.push(item);
  let l = array.length;

  const table = document.createElement("p");

  const conteudo = `<p>${array[l - 1].date}</p>`;
  console.log(array);

  table.innerHTML = conteudo;
  teste.append(table);
 
};

const addWorkout = document.querySelector("#form-button");

addWorkout.addEventListener("click", createLog);
