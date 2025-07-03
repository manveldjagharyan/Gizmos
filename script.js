window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

/////////////////////////////////////

var shopBtn = document.querySelectorAll('.shopBtn')
console.log(shopBtn);


shopBtn.forEach((e) => {
    e.onmouseover = () => {
        e.innerHTML = 'SHOP NOW <i class="fa-solid fa-plus"></i>'
    }
    e.onmouseout = () => {
        e.innerHTML = 'SHOP NOW <i class="fa-solid fa-angle-right"></i>'
    }
})

///////////////////////////////////////////////////////////////////////////

const scrollTopBtn = document.getElementById("scrollTopBtn");


scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

///////////////////////////////////////////////////

document.getElementById('navButton').addEventListener('click', function () { 
    document.querySelector('nav').classList.toggle('active');
    document.querySelector('#navButton').classList.toggle('btnactive')
})

//////////////////////////////////////////////////
let searchbox = document.querySelector('.search');
let searchBar = document.querySelector('.searchBar');

document.getElementById('searchButton').addEventListener('click', function () {


    searchBar.style.display = 'block'
    searchbox.style.display = 'flex'
    searchbox.style.opacity = '1'

    let search = document.getElementById('search')
    search.focus()
})

document.getElementById('searchClose').addEventListener('click', function () {
    let search = document.getElementById('search').value = ''

    searchBar.style.display = 'none'
    searchbox.style.display = 'none'
})