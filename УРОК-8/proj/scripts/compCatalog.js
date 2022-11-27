Vue.component('goods', {
    methods: {
        addProducts(product) {
            const elem = vue.basketProducts.find(item => item.id == product.id);
            if (elem) {
                elem.quantity++;
            } else {
                const prod = Object.assign({ quantity: 1, 
                                total(){return this.price * this.quantity }}, product);
                vue.basketProducts.push(prod);
            }
        }
    },
    template: `<div class="catalog center"> 
                    <itemCatalog
                    v-for="item of $parent.filtered"
                    :product="item"
                    key="product.id"
                    item>
                    </itemCatalog>
                </div>`
});


Vue.component('itemCatalog', {
    props: ['product'],
    template: `<div class="catalog__cartochca" :id="product.id">
                <img :src= "product.img" alt="foto" class="catalog_img">
                <div class="corzina" @click="$parent.addProducts(product)" :id="product.id">
                    <div class="corzina_btn"><img src="img_catalog/tovar_corzina.png" alt="corzina" class="corzina_img">
                        <p class="corzina_p">Add to Cart</p>
                    </div>
                </div>
                <div class="catalog_content">
                    <h3 class="catalog_h3">{{ product.name }}</h3>
                    <p class="catalog_p">{{ product.description }}.</p>
                <div class="price"> {{ product.price }}$ </div>
                </div>
            </div>`
}) 