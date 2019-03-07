(store => {
    store.itemView = {
        load
    };

    var _selectedItem;

    function load(itemId) {
        _selectedItem = store.inventory.getItem(itemId);

        $('#itemView_title').text(_selectedItem.name);

        store.viewer.changeView('itemView')
    }

    function addToCart(){
        store.cart.addItem(_selectedItem);
        store.cartView.load();
    }
})(store|| (store = {}));