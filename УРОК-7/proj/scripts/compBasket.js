Vue.component('basket', {
    template: `<div class="block_basket hidden">
                    <img src="img_catalog/btn_remove.png" alt="close" class="close-basket" v-on:click="$parent.basketVisible">
                    <p class="decoration"> Перейти к оформлению <img src="img_catalog/right-arrow.png" alt=""></p>
                    <div class="elem-basket"
                    v-for="item of $parent.basketProducts">
                        <div class="border">
                            <img :src="item.img" alt="foto">
                            <div class="description">
                                <p class="elem-price">Price: {{ item.price }}$</p>
                                <p class="elem-quantity">Quantity: {{ item.quantity }}шт</p>
                                <p class="elem-total">Total: {{ item.total() }}$</p>
                            </div>
                        </div> 
                        <img src="img_catalog/btn_remove.png" alt="remove" class="btn-remove" v-on:click="removeProduct(item)">                  
                    </div>
                </div>`,
    methods: {
        removeProduct(product) {
            const prod = vue.basketProducts.find(item => item.id == product.id);
            if (prod.quantity > 1) {
                prod.quantity--
            } else {
                const index = vue.basketProducts.findIndex(el => el.name == prod.name);
                vue.basketProducts.splice(index, 1)
            }
        }
    }
})