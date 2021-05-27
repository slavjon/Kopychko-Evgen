"use strict";
document.addEventListener('DOMContentLoaded', () => {
    let categorySwicher = document.querySelector('.select-box .select-control');
    let priceSwicher = document.querySelector('.price-select-box .select-control');
    let allProducts = document.querySelectorAll('.product-box__item');

    //select Category
    categorySwicher.addEventListener('change', (event) => {
        let setCat = +event.target.value;
        if (setCat == 0) {
            showProductsCat('all');
        } else if (setCat == 1) {
            showProductsCat('breakfast');
        } else if (setCat == 2) {
            showProductsCat('first-dish');
        } else if (setCat == 3) {
            showProductsCat('garnish');
        }

    });

    function showProductsCat(selCat) {
        if (selCat == 'all') {
            for (let key of allProducts) {
                key.classList.remove('cat-dn');
            }
            return;
        }
        for (let key of allProducts) {
            key.classList.add('cat-dn');
            if (key.dataset.category == selCat) {
                key.classList.remove('cat-dn');

            }
        }
    };
    // end Select Category

    // Select price
    priceSwicher.addEventListener('change', (event) => {
        let setPrice = +event.target.value;

        switch (setPrice) {
            case 0:

                for (let key of allProducts) {
                    key.classList.remove('price-dn')
                }
                break;
            case 30:
                for (let key of allProducts) {
                    key.classList.remove('price-dn')
                    if (+/\d+/.exec(key.querySelector('p').textContent) > 30)
                        key.classList.add('price-dn')

                }
                break;
            case 50:
                for (let key of allProducts) {
                    key.classList.remove('price-dn')
                    if (+/\d+/.exec(key.querySelector('p').textContent) > 50)
                        key.classList.add('price-dn')

                }
                break;
            case 100:
                for (let key of allProducts) {
                    key.classList.remove('price-dn')
                    if (+/\d+/.exec(key.querySelector('p').textContent) > 100)
                        key.classList.add('price-dn')

                }
                break;
            case 150:
                for (let key of allProducts) {
                    key.classList.remove('price-dn')
                    if (+/\d+/.exec(key.querySelector('p').textContent) > 150)
                        key.classList.add('price-dn')
                }
                break;
        }
    });

    // end Select price

    //count price in product Cart

    //end countp rice in product Cart count
    // products in cart
    let cartItems = 0;
    let cartTotalPrice = 0;
    let outCartTotalCount = document.querySelector('.cart__total-count');
    let outCartTotalPrice = document.querySelector('.cart__total-money');


    for (let key of allProducts) {
        key.addEventListener('click', (e) => {
            addToCart(e);
        });
    }

    function addToCart(e) {
        if (e.target.classList.contains('product-box__btn')) {
            let currentPrice = +/\d+/.exec(e.currentTarget.querySelector('p').textContent);
            let currentItems = +e.currentTarget.querySelector('.qty__item').value;
            let totalCurPrice = currentPrice * currentItems;
            cartTotalPrice = cartTotalPrice + totalCurPrice;
            cartItems = cartItems + currentItems;

            outCartTotalCount.textContent = cartItems;
            outCartTotalPrice.textContent = cartTotalPrice;

        }
    }


    //end products in cart
});