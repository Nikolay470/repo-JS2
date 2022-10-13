const images = ["indexImg/cartFoto.jpg", "indexImg/cartFoto.jpg",
    "indexImg/cartFoto.jpg", "indexImg/cartFoto.jpg"];

const products = [
    { id: 1, title: 'Notebook', price: 2000 },
    { id: 2, title: 'Mouse', price: 20 },
    { id: 3, title: 'Keyboard', price: 200 },
    { id: 4, title: 'Gamepad', price: 50 },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (elem) => {
    return `<div class="cart">
                <div class="img" style="background-image: url(${images[elem.id - 1]});"></div>
                <div class="description">
                    <p class="name">Title: ${elem.title}</p>
                    <p class="price">Price: ${elem.price}</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
};
const renderPage = list => {
    const productsList = list
        .map(item => renderProduct(item)).join('');

    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);
