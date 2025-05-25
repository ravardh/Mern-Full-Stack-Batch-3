function AddNewTask() {
  const newtask = document.getElementById("task");

  if (newtask.value.trim()) {
    const l = document.createElement("li");
    l.classList.add("py-3");

    const s = document.createElement("span");
    s.innerText = newtask.value.trim();

    const b = document.createElement("button");
    b.innerText = "X Delete";
    b.classList.add("btn", "btn-danger", "mx-3");

    b.onclick = () => l.remove();

    l.appendChild(s);
    l.appendChild(b);

    document.getElementById("taskList").appendChild(l);

    newtask.value = "";
  } else {
    alert("Please add a valid Task");
    newtask.value = "";
  }
}
