Vue.component('basket', {
    props:['arrBasket'],
    template: `<div class='basketList' v-if="$root.isVisibleBasket">
                    <p class="basketIsEmpty" v-if="!$root.arrBasket.length"> Basket is empty </p>
                    <itemBasket
                        v-for="item of arrBasket"
                        :elemBasket="item">
                    </itemBasket>         
               </div>`,
});

Vue.component('itemBasket', {
    props: ['elemBasket'],
    template: `<div class="goods">
                    <p class="title">Title: {{ elemBasket.product_name }}</p>
                    <p class="price">Price: {{ elemBasket.price }}</p>
                    <p class="count">Quant:{{ elemBasket.quantity }}</p>
                    <p class="total">Total: {{ elemBasket.price * elemBasket.quantity }}</p>
                    <button class="btnRemoveProduct" @click="$root.remove(elemBasket)"></button>
                </div>`
})