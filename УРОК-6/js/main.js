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
        arrBasket: [],
        blockCatalog: '.products',
        imgProduct: 'indexImg/cartFoto.jpg',
    },
    methods: {
        changeVisibility() {
            this.isVisibleBasket = !this.isVisibleBasket;
        },
        searchByRequest() {
            const patern = new RegExp(this.value, 'ig');
            this.filtered = this.products.filter(item => patern.test(item.product_name));
        },
        addProducts(product) {
            this.fetchData(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        let elem = this.arrBasket.find(item => item.id_product == product.id_product);
                        if (elem) {
                            elem.quantity++;
                        } else {
                            let prod = Object.assign({ quantity: 1 }, product);
                            this.arrBasket.push(prod);
                        }
                    }
                })
                .catch(error => console.log(error))
        },
        remove(item) {
            this.fetchData(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        if (item.quantity > 1) {
                            item.quantity--;
                        } else {
                            this.arrBasket.splice(this.arrBasket.indexOf(item), 1)
                        }
                    }
                })
        },
        fetchData(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error));
        },
    },

    mounted() {
        this.fetchData(`${API}/${this.urlJson}`)
            .then(result => {
                this.products = [...result];
                this.filtered = [...result]
            })
    }

});
