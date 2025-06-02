function addTask() {
  const newTask = document.querySelector("#task").value;

  const d = document.createElement("div");

  const h = document.createElement("h3");
  h.innerText = newTask;

  const b = document.createElement("button");
  b.innerText = "Delete";

  d.appendChild(h);
  d.appendChild(b);

  document.getElementById("taskList").appendChild(d);
}
