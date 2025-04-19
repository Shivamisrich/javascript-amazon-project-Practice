import {cart, addTocart} from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js';
let pageHTML = '';
products.forEach((items) => {
    

     pageHTML += `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${items.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${items.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${items.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
             ${items.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${formatCurrency(items.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${items.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button 
          button-primary js-add-to-cart"
          data-product-Id = "${items.id}" >
            Add to Cart
          </button>
        </div>
    `
});
document.querySelector('.js-products-grid').innerHTML = pageHTML;

//function for updating cart////////////

function updateCartquantity() {
 let cartQuantity = 0;
  cart.forEach((item) => {
    cartQuantity += item.quantity;
  });

  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity
}


document.querySelectorAll('.js-add-to-cart')
.forEach((button) => {
  button.addEventListener('click', () =>{
   const productId =  button.dataset.productId
    let cartValue = Number( document.querySelector(`.js-quantity-selector-${productId}`)
    .value);
    addTocart(productId,cartValue);
    updateCartquantity();

    
    
   
//console.log(cartQuantity);
//  console.log(cart);
    
  });
});


