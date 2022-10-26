const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;
const poisk = document.querySelector('.poisk-input');
const blockBasket = document.querySelector('.basketList');

const app = new Vue({
    el: '.app',
    data: {
        isVisibleBasket: false,
        urlJson: `catalogData.json`,
        value: '',
        products: [],
        filtered: [],
        blockCatalog: '.products',
        itemCatalog: class ItemCatalog {
            constructor(obj) {
                this.title = obj.product_name;
                this.price = obj.price;
                this.id = obj.id_product;
            }
            pasteProduct() {
                return `<div class="cart" data-cart_id="${this.id}">
                <div class="img" style="background-image: url(indexImg/cartFoto.jpg);"></div>
                <div class="description">
                    <p class="name">Title: ${this.title}</p>
                    <p class="price">Price: ${this.price}</p>
                    <button class="buy-btn" id="${this.id}">Купить</button>
                </div>
            </div>`
            }
        },
    },
    methods: {
        changeVisibility() {
            this.isVisibleBasket = !this.isVisibleBasket;
        },
        searchByRequest() {
            const patern = new RegExp(this.value, 'ig');
            this.filtered = this.products.filter(item => patern.test(item.product_name));
            this.products.forEach(item => {
                const cart = document.querySelector(`[data-cart_id="${item.id_product}"]`)
                if (!this.filtered.includes(item)) {
                    cart.classList.add('hidden');
                } else {
                    cart.classList.remove('hidden')
                }
            })
        },
        addProducts() {
            const blockProducts = document.querySelector(this.blockCatalog);
            this.products.forEach(item => {
                const elem = new this.itemCatalog(item);
                blockProducts.insertAdjacentHTML('beforeend', elem.pasteProduct());
            })
        },
        fetchData(url) {
            return fetch(url)
                .then(result => result.json())
                .then(result => {
                    this.products = [...result];
                    this.addProducts() })
                .catch(error => console.log(error));
        },
        errorVisible() {
            if(this.products.length > 0) {
                return false;
            } else {
                return  true;
            }
        }
    },

    mounted() {
        this.fetchData(`${API}/${this.urlJson}`);
        this.fetchData(`getProducts.json`);
    }

});


