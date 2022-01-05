function loadData() {
  let xml = new XMLHttpRequest();
  let url = "products.json";
  xml.open('GET', url);
  xml.onreadystatechange = function() {
    if (xml.readyState === 4 && xml.status === 200) {
      createProductsData(JSON.parse(xml.responseText));
      
    }
  }
  xml.send();
};
loadData();



let products = document.querySelector('.products');
let templateProducts = ``;

function createProductsData(data) {
 let dbProducts = data;
  for (let i = 0; i < dbProducts.length; i++) {
    const user = dbProducts[i];
    templateProducts +=`
    <div class="product-card col-lg-3 col-md-6 mb-4">
      <div class="card m-auto img-thumbnail">
        <img class="product-card-img image-link gallery-img" src="./images/products/${user.imgSrc}.jpg" alt="${user.productTitle}: ${user.model}">
        <div class="card-body">
          <h5>${user.productTitle} : </h5>
          <h4>${user.model} </h4>
          <h5>cena: ${user.price} <h5>
        </div>
      </div>
    </div>
    `
  };
  products.innerHTML = templateProducts;  
};



function createProductDeatiled() {
  let dbProducts = data;
   for (let i = 0; i < dbProducts.length; i++) {
     const user = dbProducts[i];
     templateProductDetailed +=`
     <div class="product-card col-md-10 mb-4">
       <div class="card m-auto img-thumbnail">
         <img class="product-card-img image-link gallery-img" src="./images/products/${user.imgSrc}.jpg" alt="${user.productTitle}: ${user.model}">
         <div class="card-body">
           <h5>${user.productTitle} : </h5>
           <h4>${user.model} </h4>
           <h5>cena: ${user.price} <h5>
         </div>
       </div>
     </div>
     `
   };
   products.innerHTML = templateProducts;  
 };