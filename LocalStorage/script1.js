function getData(){
    const Data =  localStorage.getItem('Data');

    const ConvertedData =  JSON.parse(Data);

    const List = document.getElementById("Data")

    ConvertedData.forEach(element => {
        const d =  document.createElement("div")

        d.innerHTML = `
            <div class="d-grid mt-3 container border rounded shadow">
            <div class="d-flex gap-5 align-items-center">
              <h4>Name :</h4>
              <span>${element.Name}</span>
            </div>
            <div class="d-flex gap-5 align-items-center">
              <h4>Email :</h4>
              <span>${element.email}</span>
            </div>
            <div class="d-flex gap-5 align-items-center">
              <h4>Phone :</h4>
              <span>${element.phone}</span>
            </div>
          </div>
        `
        List.appendChild(d);
    });
    
}

getData()