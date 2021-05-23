import DeleteButton from "./deleteWorkout.js";

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
    if (element !== null) {
      data[field.name] = element.value;
    }
  });

  return data;
};

function initializeWorktouTable() {
  const workoutTable = document.querySelector("#table");
  let tableHeaders = "";

  fields.forEach((field) => {
    const tableHeader = `<th>${field.name}</th>`;
    tableHeaders += tableHeader;
  });

  workoutTable.innerHTML = `<tr class="table-headers">${tableHeaders}</tr>`;
}

function updateTotalTime(totalTime) {
  const totalTimeDiv = document.querySelector("#total-time");
  const contentTotalTime = `<p>${totalTime} hours of exercise </p>`;
  totalTimeDiv.innerHTML = contentTotalTime;
}

function increaseTotalTime(time) {
  totalTime += parseInt(time);
  updateTotalTime(totalTime);
}

function decreaseTotalTime(time) {
  totalTime -= parseInt(time);
  updateTotalTime(totalTime);
}

function createWorkoutLog(event) {
  event.preventDefault();

  const { time, workout, date } = getWorkoutData();

  if (time == "" || date == "") {
    return;
  }

  increaseTotalTime(time);

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
