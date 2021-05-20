const createLog = (event) => {
  event.preventDefault();
  const array = [];

  const teste = document.querySelector("[data-teste]");
  const time = document.querySelector("[data-time-input]");
  array.push(time.value);

  const workout = document.querySelector("[data-workout-input]");
  array.push(workout.value);

  const date = document.querySelector("[data-date]");
  array.push(date.value);

  const table = document.createElement("p");

  //Somete printando em um p para visualizar
  const conteudo = `<p>${array}</p>`;
  console.log(array);

  table.innerHTML = conteudo;
  teste.append(table);
 
};

const addWorkout = document.querySelector("[data-form-button]");

addWorkout.addEventListener("click", createLog);
