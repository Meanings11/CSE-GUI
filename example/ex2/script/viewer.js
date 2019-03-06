(function(store){

    store.viewer = {
        changeView
    };

    function changeView(viewId){
        $('main > *.active').removeClass('active');
        $('main').find('#' + viewId).addClass('active');
    }
})(store || (store = {}));