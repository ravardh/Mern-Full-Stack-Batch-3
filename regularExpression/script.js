function Submit() {
  const nm = document.getElementById("name").value.trim();
  const em = document.getElementById("email").value;
  const ps = document.getElementById("password").value;
  const db = document.getElementById("dob").value;
  const ph = document.getElementById("phone").value;

  if(!validate()){
    return;
  }

  console.log(nm, em, ps, db, ph);
}

function validate() {
  let isValid = true;

  if (!/^[A-Za-z\s]+$/.test(nm) || nm.length < 3) {
    console.log("Only Alphabets Allowed");
    isValid = false;
  }

   if (!/^[A-Za-z\s]+$/.test(nm) || nm.length < 3) {
    console.log("Only Alphabets Allowed");
    isValid = false;
  }

   if (!/^[A-Za-z\s]+$/.test(nm) || nm.length < 3) {
    console.log("Only Alphabets Allowed");
    isValid = false;
  }

   if (!/^[A-Za-z\s]+$/.test(nm) || nm.length < 3) {
    console.log("Only Alphabets Allowed");
    isValid = false;
  }

  return isValid;
}
