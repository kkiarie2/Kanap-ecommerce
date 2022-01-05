//const { json } = require("body-parser");

//const { workerData } = require("worker_threads");

const params = new URLSearchParams(window.location.search);
let id = params.get('id')

//requests product information from the api and renders it on the product page

async function getData() {
    const response = await fetch('http://localhost:3000/api/products/'+id);
    
        const data = await response.json();
        console.log(data)
       
            document.getElementById('itemimage').innerHTML =   `
            <img id='imgsrc' src='${data.imageUrl}' alt="${data.altTxt}">
            
            `;
            document.getElementById('colors').innerHTML =   `
                 <option value="vert">${data.colors[0]}</option>
                    <option value="blanc">${data.colors[1]}</option>
             
            `;
                       
            document.getElementById('price').innerText = data.price
            document.getElementById('description').innerText = data.description
            document.getElementById('title').innerText = data.name

            createProductObject();  
}
getData();


//gathers selected product information and adds it to the cart array on clicking the "add to cart" button

function createProductObject(){

    document.getElementById('addToCart').addEventListener('click', function() {

        const name = document.getElementById('title').innerText;
        const colors = document.getElementById('colors');
        const quantity = document.getElementById('quantity').value;
        const selectedColor = colors.options[colors.selectedIndex].text;
        const imglink = document.getElementById('imgsrc').src;
        const imageDescription = document.getElementById('description').innerText;
        const price = document.getElementById('price').innerText

        
        const itemsObject = {
             title: name,
             productId: id,
             quantity: quantity, 
             color: selectedColor,
             price: price, 
             image: imglink,
             description: imageDescription         
         }
                 
         addProduct(itemsObject)
           

           
    }) 

}






//creates cart array, identifies items with same color and product ID, stores items in the cart/local storage

function addProduct(product)
{
    
    const cart = JSON.parse(localStorage.getItem('selectedProducts'))

    if  (cart == null){
        let products = [];
        products.push(product)
        localStorage.setItem('selectedProducts',JSON.stringify(products));
    }else{

   
        let index = cart.findIndex(x=>x.productId == product.productId &x.color == product.color)
        console.log('index',index)
        if(index > -1){
            let quantity = parseInt(cart[index].quantity)
            quantity += parseInt( product.quantity)
            cart[index].quantity = quantity
        }else{
            cart.push(product);
        }
        
        localStorage.setItem('selectedProducts',JSON.stringify(cart));
    }
    
}








