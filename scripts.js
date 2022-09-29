import data from './data.js'
const itemsContainer = document.querySelector('#items')

for (let i = 0; i < data.length; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.className = 'item'
    const img = document.createElement('img');

    img.src = data[i].image
    img.width = 300
    img.height = 300
    newDiv.appendChild(img)
    console.log(img)
    itemsContainer.appendChild(newDiv)

    const desc = document.createElement('p');
    desc.innerText = data[i].desc
    newDiv.appendChild(desc)

    const price = document.createElement('p');
    price.innerText = data[i].price
    newDiv.appendChild(price)
    // console.log(price)
    


    const button = document.createElement('button');
    button.id = data[i].name
    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"
    newDiv.appendChild(button)

}

const cart = []

// const a = 999
// const obj = { a }
// console.log(obj)
// console.log('****************')

// const obj = {name:'shoe', price:9.99, qty: 3}
// console.log(obj)
// console.log(obj.price * obj.price)
//---------------------------------------------------------------
//Add item
function addItem(name, price) {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name) {
            cart[i].qty += 1
            // stop here!
            return 
        }
    }
    // const item = {name: name, price: price, qty: 1}
    const item = {name, price, qty: 1}
    cart.push(item)
    
}

//--------------------------------------
// Show Items
function showItems() {

    // console.log(cart)
    // console.log( cart[0] )
    // console.log(cart.length)
    console.log(`You have ${getQty()} items in your cart`)
    
    for (let i = 0; i < cart.length; i += 1) {
        console.log(`- ${cart[i].name} $${cart[i].price} x ${cart[i].qty}`)
    }
}
    console.log(`Total in cart: $${getTotal()}`)
//-------------------------------------------------------
    // get Qty
    function getQty() {
        let qty = 0
        for (let i = 0; i < cart.length; i += 1) {
            qty += cart[i].qty
        }
        return qty
    }

    //-----------------------------------------------
    // Get total
    function getTotal() {
        let total = 0
        for (let i = 0; i < cart.length; i += 1) {
            total += cart[i].price * cart[i].qty
        }
        return total.toFixed(2)
    }
    //---------------------------------------------------
    function removeItem(name, qty = 0) {
        for (let i = 0; i < cart.length; i += 1) {
            if (cart[i].name === name) {
                if (qty > 0) {
                    cart[i].qty -= qty
                }
                if (cart[i].qty < 1 || qty === 0) {
                    cart.splice(i, 1)
                }
                return
            }
        }
    }  

//---------------------------------------------------
addItem('Apple', 0.99)
addItem('Orange', 1.29)
addItem('Opinion', 0.02)
addItem('Apple', 0.99)
addItem('Frisbee', 9.92)
addItem('Apple', 0.99)
addItem('Orange', 1.29)

showItems()

removeItem('Apple', 1)
removeItem('Frisbee')


showItems()