import axios from 'axios';

export class ProductRepository {

    url = "https://api.johnlawrimore.com/store/products";
        config = {
            headers: {
                Authorization: 'mlee'
            }
    };

    getProducts(){
        return new Promise((resolve,reject)=>{
            console.log("Getting Products")
            axios.get(this.url,this.config)
                .then(resp=> resolve(resp.data))
                .catch(resp=> alert(resp));
        });
    }
}