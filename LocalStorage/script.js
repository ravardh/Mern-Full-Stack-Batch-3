function submit() {
  const nm = document.getElementById("fullName").value.trim();
  const em = document.getElementById("email").value.trim();
  const ph = document.getElementById("phoneNumber").value.trim();

  if (!nm || !em || !ph) {
    alert("All feilds Required");
    document
      .querySelectorAll("input")
      .forEach((element) => (element.value = ""));
    return;
  }

  // we can add a function to validate my data
  if (!validate()) {
    return;
  }

  let tempdata = JSON.parse(localStorage.getItem("Data")) || [];

  //   if (!oldData) {
  //     tempdata = [];
  //   } else {
  //     tempdata = JSON.parse(oldData);
  //   }

  tempdata.push({
    Name: nm,
    email: em,
    phone: ph,
  });

  const Data = JSON.stringify(tempdata);

  localStorage.setItem("Data", Data);

  reset();
}

function reset() {
  document.querySelectorAll("input").forEach((element) => (element.value = ""));
}

function validate() {
  const nm = document.getElementById("fullName").value.trim();
  const em = document.getElementById("email").value.trim();
  const ph = document.getElementById("phoneNumber").value.trim();

  let isValid = "true";

  document
    .querySelectorAll(".error")
    .forEach((element) => (element.value = ""));

  if (!/^[a-zA-Z ]+$/.test(nm) || nm.length < 3) {
    document.getElementById("nameError").innerText =
      "Only Alphabets and Spaces are allowed, Must be Atleast 3 charcters";
    isValid = false;
  }

  if (!/^[a-zA-Z0-9]+@(gmail.com|yahoo.com|outlook.com|ricr.in)$/.test(em)) {
    document.getElementById("emailError").innerText =
      "Please Enter a valid Email";
    isValid = false;
  }

  if (!/^[6-9]\d{9}$/.test(ph) || ph.length !== 10) {
    document.getElementById("phoneError").innerText =
      "Please Enter a valid Indian Phone Number";
    isValid = false;
  }

  return isValid;
}
