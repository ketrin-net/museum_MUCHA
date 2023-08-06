const productLayout = document.querySelector('.card-layout');
const productDiscountLayout = document.querySelector('.discounts-products');


const allProducts = [
    {
        id: 1,
        poster: "./img/poster_in_shop/blankbook-a6-plate.png",
        name: "Blankboot — Plate 45-DD",
        description: "15 × 11 cm",
        cost: "5 €",
        tag: ""
    },
    {
        id: 2,
        poster: "./img/poster_in_shop/blankbook-dl-iris.png",
        name: "Blankboot — DL Iris",
        description: "19 × 10.5 cm",
        cost: "7 €",
        tag: ""
    },
    {
        id: 3,
        poster: "./img/poster_in_shop/blankbook-dl-la-trappistine.png",
        name: "Blankboot — DL La Trappistine",
        description: "15 × 11 cm",
        cost: "7 €",
        tag: ""
    },
    {
        id: 4,
        poster: "./img/poster_in_shop/set-of-paper-coasters-1.png",
        name: "Set of paper coasters I.",
        description: "9 × 9 cm",
        cost: "5 €",
        tag: ""
    },
    {
        id: 5,
        poster: "./img/poster_in_shop/set-of-paper-coasters-3.png",
        name: "Set of paper coasters III.",
        description: "9 × 9 cm",
        cost: "8 €",
        tag: ""
    },
    {
        id: 6,
        poster: "./img/poster_in_shop/photo-kniha-mucha.png",
        name: "Alphonse Mucha: Photographs",
        description: "17 × 17 cm",
        cost: "16 €",
        tag: ""
    },
    {
        id: 7,
        poster: "./img/poster_in_shop/hyacinta.png",
        name: "DVD film Alphonse Mucha",
        description: "",
        cost: "26 €",
        tag: ""
    },
    {
        id: 8,
        poster: "./img/poster_in_shop/poster_1_main_page.png",
        name: "F Champenois Imprimeur Editeur",
        description: "Poster",
        cost: "32 €",
        tag: ""
    },
    {
        id: 9,
        poster: "./img/poster_in_shop/poster_2_main_page.png",
        name: "Savonnerie De Bagnolet",
        description: "Poster",
        cost: "48 €",
        tag: ""
    },
    {
        id: 10,
        poster: "./img/poster_in_shop/poster_3_main_page.png",
        name: "Biscuits Lefevre — Utile",
        description: "Poster",
        cost: "24 €",
        tag: ""
    },
    {
        id: 11,
        poster: "./img/poster_in_shop/blankbook-a6-plate.png",
        name: "Blankboot — Plate 45-DD",
        description: "15 × 11 cm",
        cost: "5 €",
        tag: ""
    },
    {
        id: 12,
        poster: "./img/poster_in_shop/blankbook-dl-iris.png",
        name: "Blankboot — DL Iris",
        description: "19 × 10.5 cm",
        cost: "7 €",
        tag: ""
    },
    {
        id: 13,
        poster: "./img/poster_in_shop/blankbook-dl-la-trappistine.png",
        name: "Blankboot — DL La Trappistine",
        description: "15 × 11 cm",
        cost: "7 €",
        tag: ""
    },
    {
        id: 14,
        poster: "./img/poster_in_shop/set-of-paper-coasters-1.png",
        name: "Set of paper coasters I.",
        description: "9 × 9 cm",
        cost: "5 €",
        tag: ""
    },
    {
        id: 15,
        poster: "./img/poster_in_shop/set-of-paper-coasters-3.png",
        name: "Set of paper coasters III.",
        description: "9 × 9 cm",
        cost: "8 €",
        tag: ""
    },
    {
        id: 16,
        poster: "./img/poster_in_shop/photo-kniha-mucha.png",
        name: "Alphonse Mucha: Photographs",
        description: "17 × 17 cm",
        cost: "16 €",
        tag: ""
    },
    {
        id: 17,
        poster: "./img/poster_in_shop/hyacinta.png",
        name: "DVD film Alphonse Mucha",
        description: "",
        cost: "26 €",
        tag: ""
    },
    {
        id: 18,
        poster: "./img/poster_in_shop/poster_1_main_page.png",
        name: "F Champenois Imprimeur Editeur",
        description: "Poster",
        cost: "32 €",
        tag: ""
    },
    {
        id: 19,
        poster: "./img/poster_in_shop/poster_2_main_page.png",
        name: "Savonnerie De Bagnolet",
        description: "Poster",
        cost: "48 €",
        tag: ""
    },
    {
        id: 20,
        poster: "./img/poster_in_shop/poster_3_main_page.png",
        name: "Biscuits Lefevre — Utile",
        description: "Poster",
        cost: "24 €",
        tag: ""
    },
    {
        id: 21,
        poster: "./img/poster_in_shop/blankbook-dl-iris.png",
        name: "Blankboot — DL Iris",
        description: "19 × 10.5 cm",
        cost: "7 €",
        tag: ""
    },
    {
        id: 22,
        poster: "./img/poster_in_shop/blankbook-dl-la-trappistine.png",
        name: "Blankboot — DL La Trappistine",
        description: "15 × 11 cm",
        cost: "7 €",
        tag: ""
    }
]
const productDiscount = [
    {
        id: 11,
        poster: "./img/poster_in_shop/blankbook-a6-language-discount.png",
        name: "Blankboot — Language of Flowers",
        description: "15 × 11 cm",
        cost: "3.75 €",
        costOld: "5 €",
        tag: "discount"
    },
    {
        id: 12,
        poster: "./img/poster_in_shop/blankbook-a6-bieres-discount.png",
        name: "Blankboot — Bieres de la Meuse",
        description: "15 × 11 cm",
        cost: "3.75 €",
        costOld: "5 €",
        tag: "discount"
    }
]

function renderProductCard() {
    const cardsMarkup = allProducts.map(item =>
    (` <div class="product-card text-5">
            <img src="${item.poster}" class="poster">
            <p>${item.description}</p>
            <span>${item.name}</span>
            <div class="price">
                <div class="cost">${item.cost}</div>
                <div class="btn buy-short">
                    <a href="#">
                        <img src="./img/ellipse/ellipse_for_buy.svg">
                        <span class="text-5">BUY</span>
                    </a>
                </div>
            </div>
        </div> `)
    );

    const cardsDiscountMarkup = productDiscount.map(item =>
    (` <div class="product-card text-5">
            <img src="${item.poster}" class="poster">
            <p>${item.description}</p>
            <span>${item.name}</span>
            <div class="price">
                <div class="cost old">${item.costOld}</div>
                <div class="cost">${item.cost}</div>
                <div class="btn buy-short">
                    <a href="#">
                        <img src="./img/ellipse/ellipse_for_buy.svg">
                        <span class="text-5">BUY</span>
                    </a>
                </div>
            </div>
        </div> `)
    );

    for (const item of cardsMarkup) {
        const newCategory = document.createElement('div');
        productLayout.appendChild(newCategory);
        newCategory.outerHTML = item;
    }

    for (const item of cardsDiscountMarkup) {
        const newCategory = document.createElement('div');
        productDiscountLayout.appendChild(newCategory);
        newCategory.outerHTML = item;
    }
}

renderProductCard();