function loadData() {
  let xml = new XMLHttpRequest();
  let url = "https://raw.githubusercontent.com/andrijant/Nataly-designee/main/products.json";
  xml.open('GET', url);
  xml.onreadystatechange = function() {
    if (xml.readyState === 4 && xml.status === 200) {
      createProductsData(JSON.parse(xml.responseText));
      //createOwlData(JSON.parse(xml.responseText));
    }
  }
  xml.send();
};
loadData();


let owlCarousel = document.querySelector('.owl-carousel');
let templateOwl =``;

function createOwlData(data) {
  let dbProducts = data;
  for (let i = 0; i < dbProducts.length; i++) {
      const user = dbProducts[i];
      templateOwl +=`
      <div class="card">
          <img src="./images/products/${user.imgSrc}.jpg" alt="">
          <div class="card-body">
            <h3 class="card-title">${user.model}</h3>
          </div>
        </div>
      `
  };

owlCarousel.innerHTML = templateOwl;
};




let products = document.querySelector('.products');
let templateProducts = ``;

function createProductsData(data) {
  //console.log(data);
  let dbProducts = data;
  for (let i = 0; i < dbProducts.length; i++) {
    const user = dbProducts[i];
    templateProducts +=`
    <div class="col-lg-3 col-md-6 mb-4">
      <a href="">
        <div class="card">
          <img src="./images/products/${user.imgSrc}.jpg" alt="">
          <div class="card-body">
            <h3 class="card-title">${user.productTitle} : <br> ${user.model}</h3>
          </div>
        </div>
      </a>
    </div>
    `
  };
  
  products.innerHTML = templateProducts;  
};

//createProductsData();