function AddNewTask() {
  const newtask = document.getElementById("task");

  if (newtask.value.trim()) {
    const a = document.createElement("li");
    a.classList.add("py-3");

    const s = document.createElement("span");
    s.innerText = newtask.value.trim();

    const b = document.createElement("button");
    b.classList.add("btn", "btn-danger", "mx-3");
    b.innerText = "X Delete";
    b.onclick = () => {
      a.remove();
    };

    a.appendChild(s);
    a.appendChild(b);

    document.getElementById("taskList").appendChild(a);

    newtask.value = "";
  } else {
    alert("Please Input a Valid Task");
    newtask.value = "";
  }
}
