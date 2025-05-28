async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  const products = document.getElementById("products");

  data.forEach((element) => {
    const d = document.createElement("div");

    d.innerHTML = `
           <div class="container bg-light shadow border mt-2 p-3 rounded">
            <div class="row" style="height: 300px">
              <div class="col-4">
                <img
                  src=${element.image}
                  alt=""
                  class="w-100 object-fit-contain"
                  height="280px"
                />
              </div>
              <div class="col-8">
                <h3>${element.title}</h3>
                <h6>Category : $ ${element.category}</h6>
                <span>Rating : ${element.rating.rate} (${element.rating.count})</span>
                <h4>Price : $ ${element.price}</h4>

                <p>
                 ${element.description}
                </p>
                <button class="btn btn-primary">Buy Now</button>
                <button class="btn btn-outline-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        `;
    products.appendChild(d);
  });
}


getProducts();