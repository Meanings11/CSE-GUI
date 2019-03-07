(store =>  {
    var _inventory = [{
        "itemId": 1,
        "name": "Foo (12 pack)",
        "description": "Lorem ipsum dolor sit amet, at dictum, donec urna elementum, eget curabitur wisi nam, ultrices felis eleifend, sit aliquet libero quis lacus.",
        "price": 12.99
        },
        {
        "itemId": 2,
        "name": "Bag o'' Bar",
        "description": "Lorem ipsum dolor sit amet, at dictum, donec urna elementum, eget curabitur wisi nam, ultrices felis eleifend, sit aliquet libero quis lacus.",
        "price": 19.99
        },
        {
        "itemId": 3,
        "name": "Foo + Bar Combo",
        "description": "Lorem ipsum dolor sit amet, at dictum, donec urna elementum, eget curabitur wisi nam, ultrices felis eleifend, sit aliquet libero quis lacus.",
        "price": 25.99
        },
        {
        "itemId": 4,
        "name": "Baz - New & Improved!",
        "description": "Lorem ipsum dolor sit amet, at dictum, donec urna elementum, eget curabitur wisi nam, ultrices felis eleifend, sit aliquet libero quis lacus.",
        "price": 10.99
        }
    ];

    store.inventory = {
        listAll: () => _inventory,
        // getItem: (itemId) => _inventory
        getItem: (itemId)=> _inventory.find(item.itemId === itemId)
    };

})(store|| (store ={}));