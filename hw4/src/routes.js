import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";

export const ROUTES = [
    { path: '/', component: ProductList},
    { path: '/products/productId',component:ProductDetail}
];

export default ROUTES;