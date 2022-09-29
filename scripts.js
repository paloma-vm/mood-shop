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

const cart = [ ]

const obj = {name:'shoe', price:9.99, qty: 3}
console.log(obj)
console.log(obj.price * obj.price)

function addItem(name, price) {
    const item = {name: name, price: price, qty: 1}
    cart.push(item)
    
}

function showItems() {
    // console.log(cart)
    // console.log( cart[0] )
    // console.log(cart.length)
    console.log(`You have ${cart.length} items in your cart`)
}

addItem('Apple', 0.99)
addItem('Orange', 1.29)
addItem('Opinion', 0.02)
addItem('Frisbee', 9.92)

showItems()