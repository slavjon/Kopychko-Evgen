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

    // popup form
    document.querySelector('.add__order-btn').addEventListener('click', () => {
        document.querySelector('.popup__wrap').classList.add('open')
        document.body.style.overflow = "hidden";
    });
    document.querySelector('.close__btn').addEventListener('click', () => {
        document.querySelector('.popup__wrap').classList.remove('open')
        document.body.style.overflow = "auto";
    });

    let popupForm = document.querySelector('.popup__form');

    popupForm.addEventListener('submit', (e) => {
        let inpName = document.querySelector('.inp__name');
        if (!checkSpaces(inpName.value)) {
            e.preventDefault();
            inpName.classList.add('no-valid');
        } else {
            inpName.classList.remove('no-valid');
            outCartTotalCount.textContent = "XXX";
            outCartTotalPrice.textContent = "XXX";
            alert('Спасибо за заказ! Мы свяжемся в ближайшее время.')
        }


    });

    function checkSpaces(str) {
        return str.trim() !== '';
    }
    //end popup form
});