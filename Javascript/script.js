
// function call
function getElement(id){
    const element = document.getElementById(id);
    return element;
}

//--------------------------event-delegation----------------------------

getElement('product-box').addEventListener('click',function(e){
    if(e.target.className.includes('cart-btn')){
        const cartBtn = e.target;
        // const productImg = cartBtn.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].src;
        const productImg = cartBtn.parentNode.parentNode.parentNode.children[0].children[0].src;
        const productTitle = cartBtn.parentNode.parentNode.children[1].innerText;
        const productPrice = cartBtn.parentNode.parentNode.children[2].children[0].innerText;
        
        const totalPrice = getElement('total-price').innerText;

        const currentTotal = Number(totalPrice) + Number(productPrice);
        getElement('total-price').innerText = currentTotal.toFixed(2);

        const cartContainer = getElement('cart-container');

        const newCart =document.createElement('div');
        newCart.innerHTML = `
        <div class="p-3 mt-5 bg-gray-200 rounded-xl flex justify-between items-center">
                                <img src="${productImg}" alt="" class="w-10">
                                <div>
                                    <h2 class="font-bold">${productTitle} </h2>
                                    <h2 class="">${productPrice} TK</h2>
                                </div>
                            </div>
        `
        cartContainer.append(newCart)

        const quantity = getElement('total-quantity').innerText;
        const currentQuantity = Number(quantity) + 1

        getElement('total-quantity').innerText = currentQuantity;
    }

})
document.getElementById('clear-cart').addEventListener('click',function(){
        const cartContainer = getElement('cart-container');
      cartContainer.innerHTML = "";
      getElement('total-quantity').innerText = 0;
      getElement('total-price').innerText = 0;
})

//-----------------------traverse technique----------------------------------

// const cartBtns = document.getElementsByClassName('cart-btn')
// // console.log(cartBtns)

// for(let cartBtn of cartBtns){
//     cartBtn.addEventListener('click',function(){
//         // const productImg = cartBtn.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].src;
//         const productImg = cartBtn.parentNode.parentNode.parentNode.children[0].children[0].src;
//         const productTitle = cartBtn.parentNode.parentNode.children[1].innerText;
//         const productPrice = cartBtn.parentNode.parentNode.children[2].children[0].innerText;
        
//         const totalPrice = getElement('total-price').innerText;

//         const currentTotal = Number(totalPrice) + Number(productPrice);
//         getElement('total-price').innerText = currentTotal.toFixed(2);

//         const cartContainer = getElement('cart-container');

//         const newCart =document.createElement('div');
//         newCart.innerHTML = `
//         <div class="p-3 mt-5 bg-gray-200 rounded-xl flex justify-between items-center">
//                                 <img src="${productImg}" alt="" class="w-10">
//                                 <div>
//                                     <h2 class="font-bold">${productTitle} </h2>
//                                     <h2 class="">${productPrice} TK</h2>
//                                 </div>
//                             </div>
//         `
//         cartContainer.append(newCart)

//         const quantity = getElement('total-quantity').innerText;
//         const currentQuantity = Number(quantity) + 1

//         getElement('total-quantity').innerText = currentQuantity;
//     })
// }

// document.getElementById('clear-cart').addEventListener('click',function(){
//         const cartContainer = getElement('cart-container');
//       cartContainer.innerHTML = "";
//       getElement('total-quantity').innerText = 0;
//       getElement('total-price').innerText = 0;
// })



// -------------------------------traditional technic ----------------------

// document.getElementById('cart-btn-1').addEventListener('click',function(){
//     const title  = getElement('cart-title-1').innerText
//     const price = getElement('cart-price-1').innerText
//     // console.log(title, price)

//     // total price ke doro
//     const totalPrice = getElement('total-price').innerText
//     //calculate
//     const currentTotal = Number(totalPrice) + Number(price);
//     // price update 
//     getElement('total-price').innerText = currentTotal.toFixed(2);

//     //cart container ke doro
//     const cartContainer = getElement('cart-container');

//     // Ekta div banaw 
//     const newCart = document.createElement('div');
//     newCart.innerHTML = `
//                             <div class="p-3 mt-5 bg-gray-200 rounded-xl flex justify-between items-center">
//                                 <img src="assets/kitchen-1.png" alt="" class="w-10">
//                                 <div>
//                                     <h2 class="font-bold">${title} </h2>
//                                     <h2 class="">${price} TK</h2>
//                                 </div>
//                             </div>
//     `;
//     // cart-container e jok korte hobe 
//     cartContainer.append(newCart)

//     getElement('clear-cart')
// })