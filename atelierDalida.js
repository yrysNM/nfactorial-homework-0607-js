class atelierDalida {
    //Newly added properties
    #companyName;

    constructor(productName) {
        this.#companyName = "Atelier Dalida"; 
        this.productCount = 0; 
        this.productName = productName;
        this.metaData = [];

    }
    

    allOrders() {
        this.metaData.push(this.productName, "         ",  this.productCount);
        
    }

    showAllOrders() {
        return this.metaData;
    }

    setProduct(productName) {
        this.productName = productName;
    }

    getProduct() {
        return this.productName;
    }

    setProductCount(num) {
        this.productCount = num; 
    }

    getProductCount() {
        return this.productCount;
    }

    changeProduct(chName) {
        this.productName = chName;
    }

    toString() {
        return `Product name: ${this.productName} how many quantities: ${this.productCount}`;
    }

}

module.exports = atelierDalida;