const items = [
    {
        id: 1,
        name: "Attack",
        price: 490,
        image: "./imgs/attack.png",
    },
    {
        id: 2,
        name: "Mid Field",
        price: 315,
        image: "./imgs/midfield.png",
    },
    {
        id: 3,
        name: "Defense",
        price: 260,
        image: "./imgs/defense.png",
    },
    {
        id: 4,
        name: "Goal Keepers",
        price: 170,
        image: "./imgs/gk.png",
    },
    {
        id: 5,
        name: "Coaches",
        price: 130,
        image: "./imgs/coach.png",
    },
];

const wrapper = document.querySelector(".sliderWrapper");

const menuItems = document.querySelectorAll(".menuItem");
const hamburgerMenuItems = document.querySelectorAll(".hamburger-menuItem");

menuItems.forEach((menuItem, index) => {
    menuItem.addEventListener("click", () => {
        wrapper.style.transform = `translateX(-${index * 100}vw)`;
        const selectedItem = document.querySelector(".selectedItem");
        selectedItem.classList.remove("selectedItem");
        menuItem.classList.add("selectedItem");
        // Sync the selected item in the hamburger menu
        const selectedHamburgerMenuItem = document.querySelector(".hamburger-menu .selectedItem");
        if (selectedHamburgerMenuItem) {
            selectedHamburgerMenuItem.classList.remove("selectedItem");
        }
        hamburgerMenuItems[index].classList.add("selectedItem");
    });
});

hamburgerMenuItems.forEach((hamburgerMenuItem, index) => {
    hamburgerMenuItem.addEventListener("click", () => {
        wrapper.style.transform = `translateX(-${index * 100}vw)`;
        const selectedHamburgerItem = document.querySelector(".hamburger-menu .selectedItem");
        selectedHamburgerItem.classList.remove("selectedItem");
        hamburgerMenuItem.classList.add("selectedItem");
        // Sync the selected item in the navBottom
        const selectedNavBottomItem = document.querySelector(".navMenu .selectedItem");
        if (selectedNavBottomItem) {
            selectedNavBottomItem.classList.remove("selectedItem");
        }
        menuItems[index].classList.add("selectedItem");
    });
});

const searchBox = document.querySelector("#search-box");
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector("#search-icon");

searchItems = () => {
    searchBox.classList.add("active-search");
    const searchValue = searchInput.value.toLowerCase();
    const filteredItems = items.filter((item) => {
        return item.name.toLowerCase().includes(searchValue);
    });
    searchInput.value = "";

    const searchResultsDiv = document.createElement("div");
    searchResultsDiv.classList.add("search-results");
    searchBox.appendChild(searchResultsDiv);

    if (filteredItems.length === 0) {
        searchResultsDiv.innerHTML = "<p>No Items found</p>";
        return;
    }

    filteredItems.forEach((item) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("search-result");
        itemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <p>${item.price}M €</p>
        `;
        searchResultsDiv.appendChild(itemDiv);
    });
};

clearSearchResults = () => {
    searchBox.classList.remove("active-search");
    const searchResults = document.querySelector(".search-results");
    if (searchResults) {
        searchResults.remove();
    }
};

searchButton.addEventListener("click", () => {
    clearSearchResults();
    if (searchInput.value === "") return;
    searchItems();
});

searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        if (searchInput.value === "") return;
        searchItems();
    }
});

document.addEventListener("click", (e) => {
    const inInsideSearchBox = searchBox.contains(e.target);
    if (!inInsideSearchBox) {
        clearSearchResults();
    }
});

document.querySelector('#hamburger-menu').addEventListener('click', function() {
    var menu = document.querySelector('.hamburger-menu');
    if (menu.style.display !== 'flex') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
    var img = document.getElementById('ham-btn');
    if (img.src.match('arrow-down.png')) {
        img.src = 'imgs/arrow-up.png';
    } else {
        img.src = 'imgs/arrow-down.png';
    }
});

document.querySelector('#hamburger-button').addEventListener('click', function() {
    var menu = document.querySelector('#hamburger-menu');
    if (menu.style.display !== 'flex') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
    var img = document.getElementById('ham-btn');
    if (img.src.match('arrow-down.png')) {
        img.src = 'imgs/arrow-up.png';
    } else {
        img.src = 'imgs/arrow-down.png';
    }
});

document.addEventListener('click', function(event) {
    // Close the hamburger menu when clicking anywhere outside the menu
    var menu = document.querySelector('#hamburger-menu');
    if (menu.style.display === 'flex' && !menu.contains(event.target) && !document.querySelector('#hamburger-button').contains(event.target)) {
        menu.style.display = 'none';
    }
    // Hide the search-input when clicking anywhere outside of it
    var isClickInsideInput = document.querySelector('.search-input').contains(event.target);
    var isClickOnSearchIcon = document.querySelector('#search-icon').contains(event.target);
    if (!isClickInsideInput && !isClickOnSearchIcon) {
        document.querySelector('.search-input').style.display = 'none';
        document.querySelector('#search-icon').style.color = '#fff';
        document.querySelector('#search-box').style.backgroundColor = '#0a0927';
        document.querySelector('#search-box').style.position = 'relative';
        document.querySelector('#search-box').style.width = 'auto'
    }
});

// window.addEventListener('resize', function() {
//     var navBottom = document.querySelector('.navBottom');
//     if (window.innerWidth > 1000) {
//         navBottom.style.display = 'flex';
//     } else {
//         navBottom.style.display = 'none';
//     }
// });


document.querySelector('#search-icon').addEventListener('click', function() {
    var search_box = document.querySelector('#search-box');
    var search_input = document.querySelector('#search-input');
    var search_icon = document.querySelector('#search-icon');
    search_input.style.display = 'flex';
    search_icon.style.color = '#0a0927';
    search_box.style.backgroundColor = '#dddddd';
    search_box.style.position = 'fixed';
    search_box.style.width = '96%'
    search_box.style.left = '2%';
});
