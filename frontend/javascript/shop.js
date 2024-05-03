let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listCart');
let section = document.querySelector('section');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    section.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    section.classList.remove('active');
})

let products = [ // every item name
    {
        id: 1,
        name: 'Nigerian Breakfast Bowl',
        image: 'Nigerian_Break.jpg',
        price: 7.99
    },
    {
        id: 2,
        name: 'The American Starter',
        image: 'Oatmeal.jpg',
        price: 4.99
    },
    {
        id: 3,
        name: 'The Sweet Spot Classic',
        image: 'Pancakes.jpg',
        price: 8.99
    },
    {
        id: 4,
        name: 'Korean Lunch Box',
        image: 'Korean_Lun.jpg',
        price: 6.99
    },
    {
        id: 5,
        name: "Big Ben's Special",
        image: 'Fish_Chips.JPG',
        price: 5.99
    },
    {
        id: 6,
        name: 'Bahamian Crawfish',
        image: 'Crawfish.jpg',
        price: 9.99
    },
    {
        id: 7,
        name: 'Mexican Dinner Plate',
        image: 'Mexican_Din.jpg',
        price: 7.99
    },
    {
        id: 8,
        name: 'Curry Chicken',
        image: 'Curry.jpg',
        price: 8.99
    },
    {
        id: 9,
        name: 'Ichiraku Ramen',
        image: 'Ramen.jpg',
        price: 10.99
    },
];
let listCarts = [];
function initApp(){ // pricing details of each item
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="/cis2336-assignment4-UHdatrotte/frontend/images/${value.image}"/>
            <div class="title">${value.name}</div>
            <div class="price">$${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Cart</button>
        `;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCart(key){
    if(listCarts[key] == null){
        listCarts[key] = products[key];
        listCarts[key].quantity = 1;
    }
    reloadCart();
}

function reloadCart(){ // updates cart witha new entry item
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCarts.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="/cis2336-assignment4-UHdatrotte/frontend/images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>$${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="subQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="addQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;
            listCart.appendChild(newDiv);
        }
    })
    total.innerText = '$'+totalPrice.toLocaleString();
    quantity.innerText = count;
}
function addQuantity(key, quantity){ // adds quantity and price inside the cart
    if(quantity == 0){
        delete listCarts[key];
    }
    if(quantity < 11){
        listCarts[key].quantity = quantity; // cart quantity
        if(products[key].id == 1){
            listCarts[key].price = products[key].price + 7.99; // total cart price
        }
        if(products[key].id == 2){
            listCarts[key].price = products[key].price + 4.99; // total cart price
        }
        if(products[key].id == 3){
            listCarts[key].price = products[key].price + 8.99; // total cart price
        }
        if(products[key].id == 4){
            listCarts[key].price = products[key].price + 6.99; // total cart price
        }
        if(products[key].id == 5){
            listCarts[key].price = products[key].price + 5.99; // total cart price
        }
        if(products[key].id == 6){
            listCarts[key].price = products[key].price + 9.99; // total cart price
        }
        if(products[key].id == 7){
            listCarts[key].price = products[key].price + 7.99; // total cart price
        }
        if(products[key].id == 8){
            listCarts[key].price = products[key].price + 8.99; // total cart price
        }
        if(products[key].id == 9){
            listCarts[key].price = products[key].price + 10.99; // total cart price
        }
    }else{
        listCarts[key].quantity = 10;
    }
    
    reloadCart();
}

function subQuantity(key, quantity){ // subtracts quantity and price inside the cart
    if(quantity == 0){
        delete listCarts[key];
    }else{
        listCarts[key].quantity = quantity; // cart quantity
        if(products[key].id == 1){
            listCarts[key].price = products[key].price - 7.99; // total cart price
        }
        if(products[key].id == 2){
            listCarts[key].price = products[key].price - 4.99; // total cart price
        }
        if(products[key].id == 3){
            listCarts[key].price = products[key].price - 8.99; // total cart price
        }
        if(products[key].id == 4){
            listCarts[key].price = products[key].price - 6.99; // total cart price
        }
        if(products[key].id == 5){
            listCarts[key].price = products[key].price - 5.99; // total cart price
        }
        if(products[key].id == 6){
            listCarts[key].price = products[key].price - 9.99; // total cart price
        }
        if(products[key].id == 7){
            listCarts[key].price = products[key].price - 7.99; // total cart price
        }
        if(products[key].id == 8){
            listCarts[key].price = products[key].price - 8.99; // total cart price
        }
        if(products[key].id == 9){
            listCarts[key].price = products[key].price - 10.99; // total cart price
        }
    }
    
    reloadCart();
}