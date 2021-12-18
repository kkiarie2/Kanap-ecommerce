const queries = new URLSearchParams(window.location.search)
const orderId = queries.get('orderId')
console.log(orderId)
if (orderId) {
    (document.querySelector('#orderId').innerText = orderId)
} else {
    alert("you have no order")
}
