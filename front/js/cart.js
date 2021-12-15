//const { get } = require("https");

const cartItems = document.getElementById('cart__items');
const totalPrice = document.getElementById('totalPrice');
//const itemsObject = JSON.parse(localStorage.getItem("selectedProducts"));
//console.log(itemsObject);
 
let total  = 0
const retrievedObject = JSON.parse( localStorage.getItem("selectedProducts"));
console.log(retrievedObject);



 function renderCartItems(){


  cartItems.innerHTML = ""

     retrievedObject.forEach((element,index) => {
         

    
     cartHtml = `
     <article class="cart__item" data-id="${element.productId}" data-color="${element.color}">
                <div class="cart__item__img">
                  <img src="${element.image}" alt=$element.description}>
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${element.title}</h2>
                    <p>${element.color}</p>
                    <p>€ ${element.price}</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p id="qtyPara">Qté :${element.quantity} </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem" onclick=deleteItems(${index})>Delete</p>
                    </div>
                  </div>
                </div>
              </article>
     
     `;
     cartItems.insertAdjacentHTML('beforeend', cartHtml);
      total += element.price * element.quantity
    
    });
    totalPrice.innerText =total ;
    
 }
 renderCartItems(); 

function deleteItems(index){
  retrievedObject.splice(index);
  localStorage.setItem('selectedProducts',JSON.stringify(retrievedObject));
  renderCartItems();
}


// function preventDuplicates() {

//   for (var i = 0; i < retrievedObject.length; i++) {
//       if (retrievedObject[i].productId == productId && retrievedObject[i].color == color) {
//           alert('This item is already added to the cart')
//           return
//       }else{
        
//       }

// }

// }




//delete function

// function deleteitems (){
 
//     const itemQuantity = getElementsByClassName('itemQuantity');
//     const qtyDiv = getElementsByClassName('cart__item__content__settings__quantity');
//     const qtyPara = qtyDiv.getElementsByTagName('p');
//     const deletePara = document.getElementsByClassName('deleteItem');
//     for(var i = 0; i < deletePara.length; i++){
//       var button = deletePara[i];
//       button.addEventListener('click', function(event){
//         var deleteClicked = event.target
//         console.log("clicked");

//       })


//     }

  


// }



//increase quantity of duplicate items in the cart instead of increasing items. couldnt get this to works

// function preventDuplicates(products){
//   for(let i = 0; i < products.length; i++){
//       if(product[i].productId == product.productId && product[i].color == product.color){
//           product[i].quantity += product.quantity
//           products.push(product)
//           localStorage.setItem('selectedProducts',JSON.stringify(products));
          
//       } else {
//           cart.push(product);
//           localStorage.setItem('selectedProducts',JSON.stringify(cart));
//       }
//   }
// }


// deleting items. 

 

  // const deleteButton = document.getElementsByClassName('deleteItem')
  // for (let i = 0; i <deleteButton.length; i++) {
  //     let button = deleteButton[i]
  //     button.addEventListener('click', function(){

  //         const qtyDiv= document.getElementsByClassName('cart__item__content__settings__quantity');
  //         const qtyPara = document.getElementById('qtyPara').innerText.replace('Qté :', '');
          
  //         console.log(parseInt(qtyPara))
  //         const newQty = (parseInt(qtyPara) - parseInt(qtyInputValue))

  //         console.log(newQty)
          
        
        
  //     })
  // }


  // const qtyInputs = document.getElementsByClassName('itemQuantity');
  // const qtyInputValue = document.getElementsByClassName('itemQuantity').value;
  // const qtyParaValue = document.getElementById('qtyPara').innerText.replace('Qté :', '');
  // const qtyPara = document.getElementById('qtyPara').innerText;
  
  
 
  // const changed = qtyInputs.forEach((qtyInput) => {
  //   qtyInput.addEventListener('input', (event)=> {
    
  //     console.log(this.value);
  //   });
  // });

  // document.addEventListener('DOMContentLoaded', changed);


  

//form validation . why does my code not work?




const form = document.getElementsByTagName('form');
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const address = document.getElementById('address')
const city = document.getElementById('city')
const email = document.getElementById('email')
const order = document.getElementById('order')
const firstNameErrorMsg = document.getElementById('firstNameErrorMsg')
const lastNameErrorMsg = document.getElementById('lastNameErrorMsg')
const addressErrorMsg = document.getElementById('addressErrorMsg')
const cityErrorMsg = document.getElementById('cityErrorMsg')
const emailErrorMsg = document.getElementById('emailErrorMsg')
const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// document.querySelector('form').addEventListener('submit', (e) => {
//   e.preventDefault();
//   if(firstName.value.trim() === '' || firstName.value.trim() == null){
//     firstNameErrorMsg.innerText = 'Please enter first name'
    
    
//   }
//   else if(lastName.value.trim() === '' || lastName.value.trim() == null){
   
//     lastNameErrorMsg.innerText = 'Please enter last name'
    
//   }
//   else if( address.value.trim() === '' || address.value.trim() == null ){
    
//     addressErrorMsg.innerText = 'Please enter your address'
    
//   }
//   else if( city.value.trim() === '' || city.value.trim() == null ){
    
//     cityErrorMsg.innerText = 'Please enter your city'
   
//   }
//   else if( email.value.trim() === '' || email.value.trim() == null || email.value.trim() == !isValidEmail){
    
//     emailErrorMsg.innerText = 'Please enter your email address'
    
//   }
//   else{


//     makeRequest(data);
  


//     // make a post request to the localhost:3000/api/products/order
//     // the body object should be the conatct an producs id's
//     /**
//      * let obj = {
//      * contact : {firstname : value , },
//      * 
//      *products : []
//      * }
//      * 
//      * 
//      */
//     // if post is success  
//     // you will recive a contact deials back with all products details  plus and orderId
//     // save orderId to localstorage and show on the confirmation page 
//   }

  
  
  
  
// });




order.addEventListener('click', (e) => {
  e.preventDefault();
  const userInfo = {
    body: {
               
      firstName,
      lastName,
      address,
      city,
      email,
    
    }
  
  };
  function makeRequest(data) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      let link = 'http://localhost:3000/api/order'
      request.open('POST', link);
      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          if (request.status === 201) {
            resolve(JSON.parse(request.response));
          } else {
            reject(JSON.parse(request.response));
  
          }
        }
      };
      request.setRequestHeader('Content-Type', 'application/json');
      request.send(JSON.stringify(data));
    });
  }
  makeRequest();
});


async function submitFormData(userInfo){
try{
const requestPromise = makeRequest(userInfo)
const response =
} catch {

}

}





 