export class Product {
    constructor(id,name,description,price,imageUrl,reviews){
        this.id = id;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
        this.reviews = reviews;
        this.name = name;
    }
}