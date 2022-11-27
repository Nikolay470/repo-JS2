const vue = new Vue ({
    el: '#app',
    data: {
        value:'',
        products: [],
        filtered:[],
        basketProducts: []
    },
    methods: {
        // получегие списка товаров
        getProducts(data) {
            this.products = [...data];
            this.filtered = [...data]
        },
        // поиск по катологу
        searchProduct() {
            const patern = new RegExp(this.value, 'ig');
            this.filtered = this.products.filter(item => patern.test(item.name))
        },
        // метод показывает и скрывает корзину
        basketVisible() {
           let block = document.querySelector('.block_basket');
           block.classList.toggle('hidden');
        },
        menuFilterVisible(event) {
            const filterSpisok = document.querySelector('.filter_spisok');
            const subMenuCategory = filterSpisok.querySelector('.category');
            const subMenuBrand = filterSpisok.querySelector('.brand');
            const subMenuDesigner = filterSpisok.querySelector('.designer');

            if (event.target.classList.contains('filter__h3') || event.target.classList.contains('filter_mobile_menu')) {
                filterSpisok.classList.toggle('not_visible');
                if (!subMenuCategory.classList.contains('not_visible')) {
                    subMenuCategory.classList.add('not_visible');
                }
                if (!subMenuBrand.classList.contains('not_visible')) {
                    subMenuBrand.classList.add('not_visible');
                }
                if (!subMenuDesigner.classList.contains('not_visible')) {
                    subMenuDesigner.classList.add('not_visible');
                }
            } else if (event.target.classList.contains('razdel_category')) {
                subMenuCategory.classList.toggle('not_visible')
            } else if (event.target.classList.contains('razdel_brand')) {
                subMenuBrand.classList.toggle('not_visible')
            } else if (event.target.classList.contains('razdel_designer')) {
                subMenuDesigner.classList.toggle('not_visible')
            }
        },
        menuSizeVisible() {
            const sizeMenu = document.querySelector('.size_menu_block');
            sizeMenu.classList.toggle('not_visible')
        }
    },
    mounted() {
        this.getProducts(data);
    }
})
