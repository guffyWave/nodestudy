// inorder to save the product data to file
const fs = require('fs');
const path = require('path');

const products = [];

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        //products.push(this);
        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        );
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll() {
        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        );
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                return [];
            }
            products.push(this);
            return JSON.parse(fileContent);
        });

        return products;
    }
};
