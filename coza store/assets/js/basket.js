const products= document.getElementById("products-shop")

function getdata() {
    
products.innerHTML=""
let cart =JSON.parse(localStorage.getItem("cart"))||[]
cart.forEach((item,index)=>{
    let div = document.createElement("div")
    div.className="box"
    div.innerHTML=`
    <img src="${item.image}" alt="">
    <p>${item.title}</p>
    <p>${item.price}$</p>
    <button onclick="removeToCart(${index})"><i class="fa-solid mx-1 fa-trash"></i> Remove To Cart</button>
    
    `
    products.appendChild(div)

  

})
}

getdata()
function removeToCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cart));

    getdata()
}

const form = document.getElementById("form");
const inp = document.getElementById("inp");
const max = document.getElementById("max");
const min= document.getElementById("min");


max.addEventListener("click",maxFunc)

function maxFunc() {
    products.innerHTML=""
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let data = cart.sort((a,b)=>(b.price - a.price))
    data.forEach((item,index)=>{
        let div = document.createElement("div")
        div.className="box"
        div.innerHTML=`
        <img src="${item.image}" alt="">
        <p>${item.title}</p>
        <p>${item.price}$</p>
        <button onclick="removeToCart(${index})"><i class="fa-solid mx-1 fa-trash"></i> Remove To Cart</button>
        
        `
        products.appendChild(div)
    
      
    
    })
    
}
maxFunc()

min.addEventListener("click",minFunc)
function minFunc() {
    products.innerHTML=""
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let data = cart.sort((a,b)=>(a.price-b.price))
    data.forEach((item,index)=>{
        let div = document.createElement("div")
        div.className="box"
        div.innerHTML=`
        <img src="${item.image}" alt="">
        <p>${item.title}</p>
        <p>${item.price}$</p>
        <button onclick="removeToCart(${index})"><i class="fa-solid mx-1 fa-trash"></i> Remove To Cart</button>
        
        `
        products.appendChild(div)
    
      
    
    })
    
}
minFunc()

form.addEventListener("submit",seachFunc)

function seachFunc(e) {
    e.preventDefault()
    products.innerHTML=""
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let data = cart.filter((item)=>item.title.toLowerCase().includes(inp.value.toLowerCase()))
    data.forEach((item,index)=>{
        let div = document.createElement("div")
        div.className="box"
        div.innerHTML=`
        <img src="${item.image}" alt="">
        <p>${item.title}</p>
        <p>${item.price}$</p>
        <button onclick="removeToCart(${index})"><i class="fa-solid mx-1 fa-trash"></i> Remove To Cart</button>
        
        `
        products.appendChild(div)
    
      
    
    })
}
seachFunc()