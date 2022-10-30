Vue.component('catalog', {
    props: ['products', 'img'],
    template: `<div class="products">
                    <itemCatalog v-for='item of products'
                        :img='img'
                        :product='item'>
                    </itemCatalog>             
               </div>`
});

Vue.component('itemCatalog', {
    props:['product', 'img'],
    template: `<div class="cart" :id="product.id_product">
                <img :src="img" alt="Some img">
                <div class="description">
                    <p class="name">Title: {{ product.product_name }} </p>
                    <p class="price">Price: {{ product.price }} </p>
                    <button class="buy-btn" :id="product.id_product"
                    @click="$root.addProducts(product)">Купить</button>
                </div>
            </div>`
});