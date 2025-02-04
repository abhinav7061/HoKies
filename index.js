// Modal Functionality
const cartModal = document.getElementById('cartModal');
const requestDishModal = document.getElementById('requestDishModal');
const cartIcon = document.getElementById('cartIcon');
const closeCartModal = document.getElementById('closeCartModal');
const backToMenu = document.getElementById('backToMenu');
const closeRequestDishModal = document.getElementById('closeRequestDishModal');
const cancelRequest = document.getElementById('cancelRequest');
const submitRequest = document.getElementById('submitRequest');

cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
});

backToMenu.addEventListener('click', () => {
    cartModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Allow scrolling
});

closeCartModal.addEventListener('click', () => {
    cartModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Allow scrolling
});

// Request Dish Modal
document.querySelector('#request-dish-button').addEventListener('click', () => {
    requestDishModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
});

cancelRequest.addEventListener('click', () => {
    requestDishModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Allow scrolling
});

submitRequest.addEventListener('click', () => {
    requestDishModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Allow scrolling
});

closeRequestDishModal.addEventListener('click', () => {
    requestDishModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Allow scrolling
});

// Video Functionality
const video = document.getElementById('video');

function playPauseVideo() {
    if (!video.paused) {
        video.pause();
        document.querySelector('.play-pause-effect').style.backgroundImage = "url('./assets/Arrow.svg')";
    } else {
        video.play();
        document.querySelector('.play-pause-effect').style.backgroundImage = 'none';
    }
}

const foodItems = [
    {
        name: "Margherita Pizza",
        price: "₹190",
        image: "assets/unsplash_CbNAuxSZTFo(1).png",
        rating: 4.7,
        time: "40-60 min",
        discount: "15%"
    },
    {
        name: "Pepperoni Pizza",
        price: "₹200",
        image: "assets/unsplash_33GPuoFI7v8.png",
        rating: 4.3,
        time: "35-55 min",
        discount: ""
    },
    {
        name: "Vegetarian Pizza",
        price: "₹250",
        image: "assets/unsplash_60nzTP7_hMQ.png",
        rating: 4.9,
        time: "25-40 min",
        discount: "10%"
    },
    {
        name: "BBQ Chicken Pizza",
        price: "₹190",
        image: "assets/unsplash_CbNAuxSZTFo.png",
        rating: 4.6,
        time: "45-65 min",
        discount: ""
    },
    {
        name: "Hawaiian Pizza",
        price: "₹190",
        image: "assets/unsplash_MqT0asuoIcU(1).png",
        rating: 4.4,
        time: "50-70 min",
        discount: "20%"
    },
    {
        name: "Mushroom Pizza",
        price: "₹190",
        image: "assets/unsplash_nP11TkjxJ7s.png",
        rating: 4.2,
        time: "40-60 min",
        discount: ""
    },
    {
        name: "Cheese Burst Pizza",
        price: "₹190",
        image: "assets/unsplash_sejqj6Eaqe8.png",
        rating: 4.8,
        time: "30-50 min",
        discount: "25%"
    },
    {
        name: "Paneer Tikka Pizza",
        price: "₹190",
        image: "assets/unsplash_MqT0asuoIcU.png",
        rating: 4.5,
        time: "35-55 min",
        discount: "10%"
    },
    {
        name: "Farmhouse Pizza",
        price: "₹190",
        image: "assets/unsplash_Y6OgisiGBjM.png",
        rating: 4.1,
        time: "45-65 min",
        discount: ""
    },
    {
        name: "Cheese Burst Pizza",
        price: "₹190",
        image: "assets/unsplash_UxRhrU8fPHQ.png",
        rating: 4.7,
        time: "40-60 min",
        discount: "15%"
    },
    {
        name: "Paneer Tikka Pizza",
        price: "₹190",
        image: "assets/unsplash_Y6OgisiGBjM(1).png",
        rating: 4.3,
        time: "50-70 min",
        discount: "20%"
    },
    {
        name: "Farmhouse Pizza",
        price: "₹190",
        image: "assets/unsplash_60nzTP7_hMQ.png",
        rating: 4.6,
        time: "30-50 min",
        discount: ""
    }
];

// Function to generate kitchen cards
function generateKitchenCards() {
    const kitchenCardsContainer = document.getElementById('kitchenCards');
    foodItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            ${item.discount ? `<div class="discount-percentage container"><span>${item.discount}</span></div>` : ''}
            <img src="${item.image}" alt="${item.name}">
            <div class="card-desc">
                <div class="container cart-head">
                    <p>${item.name}</p>
                    <p>${item.price}</p>
                </div>
                <div class="container">
                    <div class="rate container">
                        <span class="rating container">
                            <img src="assets/star.png" alt="*">
                            <p>${item.rating}</p>
                        </span>
                        <span class="time">
                            <p>${item.time}</p>
                        </span>
                    </div>
                    <button class="add-btn">
                        <img src="assets/plus.png" alt="+">
                    </button>
                </div>
            </div>
        `;
        kitchenCardsContainer.appendChild(card);
    });
}

// Generate carousel items
function generateCarouselItems() {
    const carouselItemsContainer = document.getElementById('carouselItems');
    foodItems.forEach((item, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item';
        if (index === 0) {
            carouselItem.classList.add('active-carousel-item'); // Set the first item as active
        }
        carouselItem.innerHTML = `
            <div class="card">
                ${item.discount ? `<div class="discount-percentage container"><span>${item.discount}</span></div>` : ''}
                <img src="${item.image}" alt="${item.name}">
                <div class="card-desc">
                    <div class="container cart-head">
                        <p>${item.name}</p>
                        <p>${item.price}</p>
                    </div>
                    <div class="container">
                        <div class="rate container">
                            <span class="rating container">
                                <img src="assets/star.png" alt="*">
                                <p>${item.rating}</p>
                            </span>
                            <span class="time">
                                <p>${item.time}</p>
                            </span>
                        </div>
                        <button class="add-btn">
                            <img src="assets/plus.png" alt="+">
                        </button>
                    </div>
                </div>
            </div>
        `;
        carouselItemsContainer.appendChild(carouselItem);
    });
}

// Initialize carousel functionality
function initializeCarousel() {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    function updateCarousel() {
        items.forEach((item, index) => {
            const gap = 47;
            const shiftAmount = index >= currentIndex ? `${(-currentIndex) * 100}% - ${currentIndex * gap}px` : `${(totalItems - currentIndex) * 100}% + ${(totalItems - currentIndex) * gap}px`;
            item.style.transform = `translateX(calc(${shiftAmount}))`;
            index === currentIndex ? item.classList.add('active-carousel-item') : item.classList.remove('active-carousel-item');
        });
    }

    document.querySelector('.right-arrow').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });

    document.querySelector('.left-arrow').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    updateCarousel();
}

// Generate kitchen carts, carousel items and initialize the carousel
generateKitchenCards();
generateCarouselItems();
initializeCarousel();


const hamburger = document.getElementById('hamburger');
const nav = document.getElementsByClassName('header-nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav[0].classList.toggle('open-nav');
});
