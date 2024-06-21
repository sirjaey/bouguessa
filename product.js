// RECENTLY VIEWED
$(document).ready(function(){
    $("#div10").hover(function(){
        $("#hov10").html("$499");
    },
    function(){
        $("#hov10").html("."); 
    })
})

$(document).ready(function(){
    $("#div11").hover(function(){
        $("#hov11").html("$216");
    },
    function(){
        $("#hov11").html("."); 
    })
})

$(document).ready(function(){
    $("#div12").hover(function(){
        $("#hov12").html("$910");
    },
    function(){
        $("#hov12").html(""); 
    })
})

$(document).ready(function(){
    $("#div13").hover(function(){
        $("#hov13").html("$126");
    },
    function(){
        $("#hov13").html(""); 
    })
})



//HAMBURGER MOBILE/TAB VIEW
function openNav() {
    document.getElementById("myNav").style.width = "45%";
}
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}



// CART HAMBURGER
function openNavv() {
    document.getElementById("myNavv").style.width = "25%";
}
  
function closeNavv() {
    document.getElementById("myNavv").style.width = "0%";
}




// ADD TO CART FUNCTIONALITY
$(document).ready(function () {
    const cart = [];
    let total = 0;
  
    // Add to Cart button click handler
    $('.add-to-cart').click(function () {
        const product = $(this).closest('li');
        const id = product.data('id');
        const name = product.data('name');
        const price = parseFloat(product.data('price'));
        const cartPro = JSON.stringify(product);
        const cartId = JSON.stringify(id);
        const cartName = JSON.stringify(name);
        const cartPrice = JSON.stringify(price);
        localStorage.setItem('product', cartPro);
        localStorage.setItem('id', cartId);
        localStorage.setItem('name', cartName);
        localStorage.setItem('price', cartPrice);
  
        // Check if the item is already in the cart
        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ id, name, price, quantity: 1 });
        }
  
        total += price;
  
        // Update the cart display
        updateCartDisplay();
    });
  
    // Remove item from cart
    $('#cart').on('click', '.remove-item', function () {
        const itemId = $(this).data('id');
        const itemIndex = cart.findIndex(item => item.id === itemId);
        if (itemIndex !== -1) {
            total -= cart[itemIndex].price * cart[itemIndex].quantity;
            cart.splice(itemIndex, 1);
            updateCartDisplay();
        }
    });
  
    // Update the cart display
    function updateCartDisplay() {
        $('#cart').empty();
        cart.forEach(item => {
            $('#cart').append(`
                <li>
                    ${item.name} - $${item.price.toFixed(2)} x ${item.quantity}
                    <button class="remove-item" data-id="${item.id}">Remove</button>
                </li>
            `);
        });
        $('#cart-total').text(total.toFixed(2));
    }
  });
  
  
  