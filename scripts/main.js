//import DeleteButton from "./deleteWorkout.js";

const fields = [
  {
    id: "time-input",
    name: "time",
  },
  {
    id: "workout-input",
    name: "workout",
  },
  {
    id: "date-input",
    name: "date",
  },
  {
    id: "action",
    name: "action",
  },
];

let totalTime = 0;

const getWorkoutData = () => {
  const data = {};
  fields.forEach((field) => {
    const element = document.querySelector(`#${field.id}`);
    if(element){
   
      data[field.name] = element.value;
    }
  });

  return data;
};

function initializeWorktouTable() {
  const workoutTable = document.querySelector("#table");
 
  const tableHeaders = fields.reduce((tableHeaders, field) => `${tableHeaders}
  <th>${field.name}</th>`, "");

  workoutTable.innerHTML = `<tr class="table-headers">${tableHeaders}</tr>`;
}

function createWorkoutLog(event) {

  event.preventDefault();

  const { time, workout, date } = getWorkoutData();

  if(!time || !date){
    return;
  }

  const content = `<tr class="item">
                        <td>${time}h</td>
                        <td>${workout}</td>
                        <td>${date}</td>
                    </tr>`;

  const table = document.querySelector("#table");

  const tableRow = table.insertRow();
  tableRow.innerHTML = content;
  //tableRow.appendChild(DeleteButton());
}

const addWorkout = document.querySelector("#form-button");
addWorkout.addEventListener("click", createWorkoutLog);

window.onload = initializeWorktouTable();
