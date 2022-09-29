const itemList = document.getElementById('item-list')
const cartQty = document.getElementById('cart-qty')
const cartTotal = document.getElementById('cart-total')

console.log(itemList)
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

//-------------------------------------------------------------
//Handle Change events on update input
itemList.onchange = function(e) {
    if (e.target && e.target.classList.contains('update')) {
        const name = e.target.dataset.name
        const qty = parseInt(e.target.value)
        updateCart(name, qty)
    }
}
//-------------------------------------------------------------
//Handle clicks on list
itemList.onclick = function(e) {
    //console.log("Clicked list!")
    if (e.target && e.target.classList.contains('remove')) {
        const name = e.target.dataset.name //data-name="????"
        removeItem(name)
    } else if (e.target && e.target.classList.contains('add-one')) {
        const name = e.target.dataset.name
        addItem(name)
    } else if (e.target && e.target.classList.contains('remove-one')) {
        const name = e.target.dataset.name 
        removeItem(name, 1)
    }
}
//-------------------------------------------------------------
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
    //console.log(`You have ${getQty()} items in your cart`)
    cartQty.innerHTML = `You have ${getQty()} items in your cart`

    let itemStr = ''
    for (let i = 0; i < cart.length; i += 1) {
        // console.log(`- ${cart[i].name} $${cart[i].price} x ${cart[i].qty}`)
        // const name = cart[i].name
        // const price = cart[i].price
        // const qty = cart[i].qty
        // ^ intermediate variables

        // { name: 'Apple', price: 0.99, qty: 3 }
        const { name, price, qty } = cart[i]

        itemStr += `<li> 
        ${name} $${price} x ${qty} = ${qty * price}
        <button class="remove" data-name="${name}">Remove</button>
        <button class="add-one" data-name="${name}"> + </button>
        <button class="remove-one" data-name="${name}"> - </button>
        <input class="update" type="number" data-name="${name}">
        </li>`
    }
    itemList.innerHTML = itemStr

    //console.log(`Total in cart: $${getTotal()}`)
    cartTotal.innerHTML = `Total in cart: $${getTotal()}`

    const all_items_button = Array.from(document.querySelectorAll('button'))

    all_items_button.forEach(elt => elt.addEventListener('click', () => {
        addItem(elt.getAttribute('id'), elt.getAttribute('data-price'))
        showItems()
    }))

    console.log(all_items_button)

}   



    
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
    //Remove item
    function removeItem(name, qty = 0) {
        for (let i = 0; i < cart.length; i += 1) {
            if (cart[i].name === name) {
                if (qty > 0) {
                    cart[i].qty -= qty
                }
                if (cart[i].qty < 1 || qty === 0) {
                    cart.splice(i, 1)
                }
                showItems()
                return
            }
        }
    }  

//---------------------------------------
//Update cart
function updateCart(name, qty) {
    for (let i = 0; i < cart.length; i +=1) {
        if (cart[i].name === name) {
            if(qty < 1){
                removeItem(name)
                return
            }
            cart[i].qty = qty
            showItems()
            return
        }
    }
}
//---------------------------------------------------
// addItem('Apple', 0.99)
// addItem('Orange', 1.29)
// addItem('Opinion', 0.02)
// addItem('Apple', 0.99)
// addItem('Frisbee', 9.92)
// addItem('Apple', 0.99)
// addItem('Orange', 1.29)

// showItems()

// removeItem('Apple', 1)
// removeItem('Frisbee')


showItems()
