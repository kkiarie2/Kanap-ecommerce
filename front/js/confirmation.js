const queries = new URLSearchParams(window.location.search)
const orderId = queries.get('orderId')
console.log(orderId)
if (orderId) {
    (document.querySelector('#orderId').innerText = orderId)
    localStorage.clear();
} else {
    alert("you have no order")
}
