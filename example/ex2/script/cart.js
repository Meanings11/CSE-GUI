(store => {
    store.cart = {
        addToCart
    };

    function addToCart(item){
        var cart = localStorage.getItem('cart')||[];
        cart.push(item);
        localStorage.setItem('cart',cart);
    }

    function getItems(){
        var cart = localStorage.getItem('cart')||[];
        return cart;
    }
})(store|| (store = {}));   