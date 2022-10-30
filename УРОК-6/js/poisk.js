Vue.component('poisk', {
    template: `<div class="poisk">
                    <input type="text" class="poisk-input" v-model="value">
                    <div class="poisk-icon" @click="$root.searchByRequest"></div>
                </div>`
});