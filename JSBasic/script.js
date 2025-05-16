function collectData() {
  const nm = document.getElementById("name").value;
  const em = document.getElementById("email").value;
  const ps = document.getElementById("password").value;
  const ph = document.getElementById("phone").value;
  const dob = document.getElementById("dob").value;

  if (!nm || !em || !ps || !ph || !dob) {
    alert("Please Fill All the feilds");
  } else {
    const yearOfBirth = Number(dob.split("-")[0]);

    const date = new Date();
    const currYear = date.getFullYear();

    if (currYear - yearOfBirth >= 18) {
      console.log(nm, em, ps, ph, dob);
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("dob").value = "";
    } else {
      alert("You must be atleast 18 years old");
    }
  }
}



