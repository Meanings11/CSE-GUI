import {ProductList} from "./app/ProductList";
import {ProductDetail}  from "./app/ProductDetail";

export const ROUTES = [
    { path: '/products/:productId',component:ProductDetail},

    // {path: '/products', component: ProductDetail},   
    { path: '/', component: ProductList},
    
    
];

export default ROUTES;