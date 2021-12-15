//const { response } = require("express");


 let furnitureSection = document.querySelector('section');
 const body = document.getElementsByTagName('body');
 let apiRequest = new XMLHttpRequest();
 const heading = document.querySelector('h3');
 
         
const apiUrl = 'http://localhost:3000/api/products';

async function getInfo() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

    window.addEventListener("load", function() {
                    
       data.forEach(function(product){
          const dynamicHtml = `
                    <a href="./product.html?id=${product._id}">
                    <article>
                      <img src=${product.imageUrl} alt=${product.altTxt}>
                      <h3 class="productName">${product.name}</h3>
                      <p class="productDescription">${product.description}</p>
                    </article>
                  </a>  `;
           
            furnitureSection.insertAdjacentHTML('beforeend', dynamicHtml);
    });

                
        });
             
}
getInfo();
           
            







































 


 


    






