const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;

const btnBasket = document.querySelector('.basket');
const basketList = document.querySelector('.basketList');
btnBasket.addEventListener('click', () => {
    basketList.classList.toggle('hidden');
});

class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.products = [];
    }
    // метод получает каталог товаров с сервера, вносит этот каталог в 
    // массив products и затем вставляет его в документ
    _getProductInArray() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .then((data) => {
                this.products = data;
                this.pasteProducts();
            });
    }

    _setProductInArray(product) {
        this.products.push(product)
    }

    pasteProducts() {
        const divProducts = document.querySelector(this.container);
        this.products.forEach((item) => {
            const element = new PasteElement(item);
            divProducts.insertAdjacentHTML('beforeend', element.pasteProduct());
        });
    }

    totalSumProducts() {
        return this.products.reduce((sum, item) => {
            sum += item.price;
            return sum;
        }, 0);
    }
}
//-----------------------------------------------------------------------------

class PasteElement {
    constructor(obj) {
        this.title = obj.product_name;
        this.price = obj.price;
        this.id = obj.id_product;
    }

    pasteProduct() {
        return `<div class="cart">
                <div class="img" style="background-image: url(indexImg/cartFoto.jpg);"></div>
                <div class="description">
                    <p class="name">Title: ${this.title}</p>
                    <p class="price">Price: ${this.price}</p>
                    <button class="buy-btn" id="${this.id}">Купить</button>
                </div>
            </div>`
    }
}
//----------------------------------------------------------------------------

class Corzina extends ProductsList {
    constructor(container = '.products') {
        super(container);
    }

    removeProduct() {
        // удаление товара из корзины
    }
    // метод получает с сервера список товаров находящихся в корзине и
    // вставляет их в блок basketList
    addProduct() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .then(result => {
                result.contents.forEach(item => {
                    const elem = new ProductCorzina(item);
                    basketList.insertAdjacentHTML('beforeend', elem.pasteElement())
                });
            });
    }

    totalCost() {
        //общая сумма покупки
    }
}

//-----------------------------------------------------------------------------

class ProductCorzina extends ProductsList {
    constructor(obj) {
        const container = '.products';
        super(container);
        this.title = obj.product_name;
        this.price = obj.price;
        this.count = obj.quantity;
    }
    // метод вставки элемента в корзину (блок basketList)
    pasteElement() {
        return `<div class="goods">
                    <p class="title">Title: ${this.title}</p>
                    <p class="price">Price: ${this.price}</p>
                    <p class="count">Quant:${this.count}</p>
                    <p class="total">Total: ${this.priceTotal()}</p>
                    <button class="btnRemoveProduct"></button>
                </div>`
    }

    priceTotal() {
        return this.count * this.price;
    }
}
//--------------------------------------------------------------------------

const list = new ProductsList();
list._getProductInArray();

const basket = new Corzina();
basket.addProduct();
