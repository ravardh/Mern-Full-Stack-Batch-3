function on() {
  const bulb = document.getElementById("gola");

  bulb.classList.add("on");
}

function off() {
  const bulb = document.getElementById("gola");

  bulb.classList.remove("on");
}

function onOff() {
  const bulb = document.getElementById("gola");
  const btn = document.getElementById("onOffSwitch");

  bulb.classList.toggle("on");
  
  if (btn.innerText === "ON") {
    btn.innerText = "OFF";
  } else {
    btn.innerText = "ON";
  }
}

function ChangeColor(color) {
  const bulb = document.getElementById("dusraGola");

  bulb.style.backgroundColor = color;
}



const T = document.getElementById("test")

console.log(T.innerHTML);

console.log(T.innerText);

console.log(T.textContent);
