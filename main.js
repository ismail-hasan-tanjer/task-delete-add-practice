let taskInput = document.getElementById("taskInput");
let taskSubmit = document.getElementById("taskSubmit");
let displayTask = document.getElementById("displayTask");
let clearAllTask = document.getElementById("clear");
let tasks = [];

    taskSubmit.addEventListener("click", function () {
      if (taskInput.value == "") {
        alert("Insert a value first");
      } else {
        if (null === localStorage.getItem("Tasks")) {
          tasks = [];
        } else {
          tasks = JSON.parse(localStorage.getItem("Tasks"));
        }
        tasks.push(taskInput.value);
        let data = JSON.stringify(tasks);
        localStorage.setItem("Tasks", data);
        location.reload();
      }
    });
      let totalData = JSON.parse(localStorage.getItem("Tasks"));
         totalData.forEach(function (value, index) {
        let taskLi = document.createElement("li");
          taskLi.innerHTML = value;
          displayTask.append(taskLi);
  let editIcon = document.createElement("input");
  editIcon.type = "button";
  editIcon.value = "edit";
  editIcon.id = index;
  editIcon.style.margin = "10px";
  taskLi.appendChild(editIcon);
  let crossIcon = document.createElement("input");
  crossIcon.type = "button";
  crossIcon.value = "X";
  crossIcon.id = index;
  crossIcon.style.margin = "10px";
  taskLi.appendChild(crossIcon);
  crossIcon.addEventListener("click", function () {
    totalData.splice(crossIcon.id, 1);
    localStorage.setItem("Tasks", JSON.stringify(totalData));
    location.reload();
  });

  let taskText = taskLi.innerText;
  editIcon.addEventListener("click", function () {
    taskInput.value = taskText;
    taskSubmit.addEventListener("click", function () {
      if (crossIcon.id !== -1) {
        totalData.splice(crossIcon.id, 1);
        totalData[crossIcon.id] = taskInput.value;
        localStorage.setItem("Tasks", JSON.stringify(totalData));
      }
    });
  });
});

clearAllTask.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});
