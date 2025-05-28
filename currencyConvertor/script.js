const c1 = document.getElementById("country1");
const c2 = document.getElementById("country2");

async function autofill() {
  const res = await fetch("./codes.json");
  const data = await res.json();

  data.forEach((element) => {
    const o = document.createElement("option");

    o.value = element.Currency_Code + "," + element.Country_Code;

    o.innerText = element.Country;

    c1.appendChild(o);
  });

  data.forEach((element) => {
    const o = document.createElement("option");

    o.value = element.Currency_Code + "," + element.Country_Code;

    o.innerText = element.Country;

    c2.appendChild(o);
  });
}

autofill();

c1.addEventListener("change", changeFlag1);
c2.addEventListener("change", changeFlag2);

function changeFlag1() {
  const country = c1.value.split(",")[1];
  document.getElementById(
    "flag1"
  ).src = `https://flagsapi.com/${country}/flat/64.png`;
}

function changeFlag2() {
  const country = c2.value.split(",")[1];
  document.getElementById(
    "flag2"
  ).src = `https://flagsapi.com/${country}/flat/64.png`;
}

async function Convert() {
  const country = c1.value.split(",")[0];

  const res = await fetch(
    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${country}.json`
  );

  const data = await res.json();

  
  const rates = data[country];

  const country2 = c2.value.split(",")[0];

  const orgAmt = Number(document.getElementById("orgAmount").value.trim());

  document.getElementById("newAmount").innerText =
    (orgAmt * rates[country2]).toFixed(2) +" "+ country2.toUpperCase();
}
