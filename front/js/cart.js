//const { get } = require("https");

const cartItems = document.getElementById('cart__items');
const totalQuantity = document.getElementById('totalQuantity');
const totalPrice = document.getElementById('totalPrice');
//const itemsObject = JSON.parse(localStorage.getItem("selectedProducts"));
//console.log(itemsObject);

let total = 0;

let sumPrice = 0;

function retrievedObject() {
    var result = JSON.parse(localStorage.getItem('selectedProducts')) || [];
    return result;
}

const productIds = retrievedObject().map((product) => product.productId);
//const productPrice = parseInt(retrievedObject().map((product)=> product.price))
//const productQuantity = parseInt(retrievedObject().map((product)=> product.quantity))




// var calculateTotals = () => {
//     console.log('Calculating.. ');
//     var allItems = retrievedObject();
//     var totals = allItems.reduce((a, b) => {
//         var aTotals = 0;
//         var bTotals = 0;
//         if (Object.keys(a).length !== 0 && a.constructor === Object) {
//             aTotals = a.quantity * a.price;
//         }

//         if (Object.keys(b).length !== 0 && b.constructor === Object) {
//             bTotals = b.quantity * b.price;
//         }

//         return aTotals + bTotals;
//     }, 0);

//     return totals;
// };

// var updateUI_CartTotals = () => {
//     document.querySelector('#totalPrice').innerText = parseFloat(
//         calculateTotals()
//     );
// };






function renderCartItems() {
    cartItems.innerHTML = '';
    totalQuantity.innerText = '';
    totalPrice.innerText= '';
        let total = 0
        let totalQty = 0;
    retrievedObject().forEach((element, index) => {
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
                      <p id="qtyPara_${element.productId}_${element.color}">Qté :${element.quantity} </p>
                      <input value="${element.quantity}" id="qtyInput_${element.productId}_${element.color}" type="number" class="itemQuantity" name="itemQuantity" min="1" max="100"  onChange=updateQuantity("${element.productId}","${element.color}")>
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem" onclick=deleteItems("${element.productId}","${element.color}")>Delete</p>
                    </div>
                  </div>
                </div>
              </article>
     
     `;
        cartItems.insertAdjacentHTML('beforeend', cartHtml);
         total += parseInt(element.price)  * parseInt( element.quantity);
        totalQty += parseFloat(element.quantity);

    });

     totalPrice.innerText = total;
      totalQuantity.innerText = totalQty;

   // updateUI_CartTotals();
}

renderCartItems();





var updateQuantity = (productId, color) => {
    var quantity = document.getElementById(`qtyInput_${productId}_${color}`);
    var display = document.getElementById(`qtyPara_${productId}_${color}`);
    display.innerText = quantity.value;

    //create a loop .map
    const newProducts = retrievedObject()
        .map((product) => {
            if (product.productId == productId && product.color == color) {
                product.quantity = quantity.value;
            }
            return product;
        });

    console.log({ newProducts, retrievedObject: retrievedObject() });

    localStorage.setItem('selectedProducts', JSON.stringify(newProducts));
    renderCartItems();
};





function deleteItems(productId, color) {
    //create a loop .map
    const newProducts = retrievedObject()
        .map((product) => {
            if (product.productId == productId && product.color == color) {
                return null;
            } else {
                return product;
            }
        })
        .filter(Boolean);
    console.log({ newProducts, retrievedObject: retrievedObject() });
    // retrievedObject.splice(index);
    localStorage.setItem('selectedProducts', JSON.stringify(newProducts));
    renderCartItems();
}

// function calculateTotal(){

//   cartItems.addEventListener('load', () =>{
//     const orderItems = document.getElementById('cart__item')
//     let total = 0

//     for (let i = 0; i < orderItems.length; i++){
//       let orderItem = orderItems[i]
//       const priceEl = order.getElementById('pricePara')[0]
//       const qtyEl = orderItem.getElementById('quantityPara')[0]
//       itemPrice = priceEl.innerText.replace('€', '');
//       itemQty = qtyEl.innerText.replace('Qté :', '');
//       total += (itemPrice * itemQty)
//       console.log(itemQty)
//     }

//   })

// totalPrice.innerText = total;
// }

//form validation . why does my code not work?

const form = document.querySelector('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const address = document.getElementById('address');
const city = document.getElementById('city');
const email = document.getElementById('email');
const order = document.getElementById('order');
const firstNameErrorMsg = document.getElementById('firstNameErrorMsg');
const lastNameErrorMsg = document.getElementById('lastNameErrorMsg');
const addressErrorMsg = document.getElementById('addressErrorMsg');
const cityErrorMsg = document.getElementById('cityErrorMsg');
const emailErrorMsg = document.getElementById('emailErrorMsg');
const isValidEmail = (email) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    if (firstName.value.trim() === '' || firstName.value.trim() == null) {
        firstNameErrorMsg.innerText = 'Please enter first name';
    } else if (lastName.value.trim() === '' || lastName.value.trim() == null) {
        lastNameErrorMsg.innerText = 'Please enter last name';
    } else if (address.value.trim() === '' || address.value.trim() == null) {
        addressErrorMsg.innerText = 'Please enter your address';
    } else if (city.value.trim() === '' || city.value.trim() == null) {
        cityErrorMsg.innerText = 'Please enter your city';
    } else if (
        email.value.trim() === '' ||
        email.value.trim() == null ||
        email.value.trim() == !isValidEmail
    ) {
        emailErrorMsg.innerText = 'Please enter your email address';
    } else {
        const formData = new FormData(form);
        const formDataObject = Object.fromEntries(formData);
        console.log({ formDataObject });

        const orderInfo = {
            contact: {
                ...formDataObject,
            },
            products: productIds,
        };
        fetch('http://localhost:3000/api/products/order', {
            method: 'post',
            body: JSON.stringify(orderInfo),
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => response.json())
            .then((user) => {
                window.location.href = `/front/html/confirmation.html?orderId=${user.orderId}`;
                console.log(user);
            })
            .catch((error) => console.error(error));
    }

    // make a post request to the localhost:3000/api/products/order
    // the body object should be the conatct an producs id's
    /**
     * let obj = {
     * contact : {firstname : value , },
     *
     *products : []
     * }
     *
     *
     */
    // if post is success
    // you will recive a contact deials back with all products details  plus and orderId
    // save orderId to localstorage and show on the confirmation page
});
