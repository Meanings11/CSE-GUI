(store => {
    store.cartView = {
        load
    }

    function load()
    {
        var cart = store.cart.getItems();

        store.viewer.changeView('cartView');

    }


})(store|| (store = {}));   