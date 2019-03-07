(store => {
    store.homeView = {
        load
    };
    
    // function formatListItem(item){
    //     return `<li>
    //     <a href="javascript:void(0);"
    //     onclick="store.itemView.load(${item.itemId})">${item.name}</a>
    // </li>`)
    // }

    function load(){
        bindProducts();
        store.viewer.changeView('homeView');
    }
    function bindProducts(){
        var items = store.inventory.listAll();
        var listItems = items.map(item => 
            `<li class="list-group-item">
                <a href="javascript:void(0);"
                onclick="store.itemView.load(${item.itemId})">
                ${item.name}
                </a>
            </li>`);
        
        $('#homeView_list').html(listItems.join(''))
    }
})(store|| (store = {}));