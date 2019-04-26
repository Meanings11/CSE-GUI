import {ProductList} from "./app/ProductList";
import {ProductDetail}  from "./app/ProductDetail";
import MyCart from "./app/MyCart";

export const ROUTES = [
    { path: '/products/:productId',component:ProductDetail},
    { path: '/cart', component:MyCart},
    { path: '/', component: ProductList},
    
    
];

export default ROUTES;