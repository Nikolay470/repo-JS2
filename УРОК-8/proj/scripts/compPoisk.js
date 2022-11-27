Vue.component('poisk', {
  
    template: `<div class="poisk_block">
                    <input type="text" class="search" v-model="$parent.value">
                    <img src="img_catalog/poisk_E-SHOP.png" alt="poisk" class="heder_nav"
                    @click="$parent.searchProduct">
                </div>`
})