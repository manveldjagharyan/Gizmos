let deleteBlurBackground = document.getElementById('deleteBlurBackground');
deleteBlurBackground.onclick = function () {
    let index = blurBackground.getAttribute('data-delete-index');

    if (index !== null) {
        likesProductArr.splice(index, 1);
        localStorage.setItem('likes', JSON.stringify(likesProductArr));
        newMessage('Product removed from wishlist');

        blurBackground.style.animation = 'backgroundOff 0.3s ease forwards'
        setTimeout(() => {
            blurBackground.style.display = 'none';
            location.reload();
            newMessage('Product removed from wishlist');
        }, 3300);

    }

    blurBackground.style.animation = 'backgroundOff 0.3s ease forwards'
    setTimeout(() => {
        blurBackground.style.display = 'none';
    }, 500);
};

console.log(likesProductArr.map(p => p.style));

const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

let cancelBlurBackground = document.getElementById('cancelBlurBackground')
cancelBlurBackground.onclick = () => {
    blurBackground.style.animation = 'backgroundOff 0.3s ease forwards'
    setTimeout(() => {
        blurBackground.style.display = 'none';
    }, 500);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var likeProductsSection = document.getElementById('likeProductsSection');
var likesProductArr = JSON.parse(localStorage.getItem('likes')) || [];

if (likesProductArr.length === 0) {
    likeProductsSection.innerHTML = `<p>No products added to the wishlist</p>`
} else {
    likeProductsSection.innerHTML = `
    <h1 class="likedProductsName">My Wishlist</h1>
    <span id="shareButton"><i class="fa-solid fa-share-nodes"></i></span>
    <div id="shareLinks">
        <ul>
            <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-pinterest-p"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-tiktok"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-telegram"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-whatsapp"></i></a></li>
            <li><a href="#"><i class="fa-regular fa-envelope"></i></a></li>
        </ul>
    </div>
    <hr class="likedProductsHr">
    <div id="likedProducts"></div>`
}

var likedProducts = document.getElementById('likedProducts');
console.log(likesProductArr);

likesProductArr.map((product, index) => {
    const likeProduct = document.createElement('div');
    likeProduct.classList.add('likeProduct');
    likeProduct.setAttribute('data-index', index);

    likeProduct.innerHTML = `
        <button class="hideButton" data-index="${index}"><i class="fa-solid fa-xmark"></i></button>
        <img src="${product.images[0]}"></img>
        <h1>${product.name}</h1>
        <div class="productPrice">
            <h2>${product.price}</h2>
            <span>${product.oldPrice ? product.oldPrice : ''}</span>
        </div>
        <h2>In stock</h2>
        <button class="button">
            <span class="button-content">ADD TO CART <i class="fa-solid fa-cart-shopping"></i></span>
        </button>
        <hr>
    `;

    likedProducts.append(likeProduct);
});



let blurBackground = document.getElementById('blurBackground');
let hideButtons = document.querySelectorAll('.hideButton');

hideButtons.forEach((button) => {
    button.onclick = () => {
        blurBackground.style.display = 'flex';
        blurBackground.style.animation = 'backgroundOn 0.3s ease forwards';

        // Сохраняем индекс удаляемого элемента
        blurBackground.setAttribute('data-delete-index', button.dataset.index);
    };
});

let deleteBlurBackground = document.getElementById('deleteBlurBackground');
deleteBlurBackground.onclick = function () {
    let index = blurBackground.getAttribute('data-delete-index');

    if (index !== null) {
        likesProductArr.splice(index, 1);
        localStorage.setItem('likes', JSON.stringify(likesProductArr));
        newMessage('Product removed from wishlist');

        blurBackground.style.animation = 'backgroundOff 0.3s ease forwards'
        setTimeout(() => {
            blurBackground.style.display = 'none';
            location.reload();
            newMessage('Product removed from wishlist');
        }, 3300);

    }

    blurBackground.style.animation = 'backgroundOff 0.3s ease forwards'
    setTimeout(() => {
        blurBackground.style.display = 'none';
    }, 500);
};

console.log(likesProductArr.map(p => p.style));
