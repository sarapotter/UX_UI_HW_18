document.addEventListener("DOMContentLoaded", function () {
    const items = [
        {
            name: "Vintage Chair",
            price: 250,
            posted: "2 days ago",
            location: "Dallas, TX",
            images: ["https://via.placeholder.com/300"],
            detailsPage: "vintage-chair.html", // Reference to the details page
        },
        {
            name: "Old Guitar",
            price: 120,
            posted: "5 days ago",
            location: "Garland, TX",
            images: ["https://via.placeholder.com/300"],
        },
        {
            name: "Mountain Bike",
            price: 600,
            posted: "1 week ago",
            location: "Richardson, TX",
            images: ["https://via.placeholder.com/300"],
        },
        {
            name: "MacBook Pro",
            price: 900,
            posted: "3 days ago",
            location: "Irving, TX",
            images: ["https://via.placeholder.com/300"],
        },
        {
            name: "Dining Table",
            price: 450,
            posted: "2 weeks ago",
            location: "Mesquite, TX",
            images: ["https://via.placeholder.com/300"],
        },
        {
            name: "Leather Jacket",
            price: 100,
            posted: "4 days ago",
            location: "Cedar Hill, TX",
            images: ["https://via.placeholder.com/300"],
        },
        {
            name: "Camera",
            price: 300,
            posted: "1 day ago",
            location: "Dallas, TX",
            images: ["https://via.placeholder.com/300"],
        },
        {
            name: "Gaming Console",
            price: 400,
            posted: "3 days ago",
            location: "Dallas, TX",
            images: ["https://via.placeholder.com/300"],
        },
        {
            name: "Bicycle",
            price: 200,
            posted: "1 week ago",
            location: "Garland, TX",
            images: ["https://via.placeholder.com/300"],
        },
        {
            name: "Sofa",
            price: 700,
            posted: "1 week ago",
            location: "Plano, TX",
            images: ["https://via.placeholder.com/300"],
        },
        {
            name: "Coffee Maker",
            price: 80,
            posted: "2 days ago",
            location: "Richardson, TX",
            images: ["https://via.placeholder.com/300"],
        },
        {
            name: "PlayStation 5",
            price: 500,
            posted: "5 days ago",
            location: "Frisco, TX",
            images: ["https://via.placeholder.com/300"],
        },
        {
            name: "Samsung TV",
            price: 1000,
            posted: "1 month ago",
            location: "Garland, TX",
            images: ["https://via.placeholder.com/300"],
        },
        {
            name: "Leather Boots",
            price: 150,
            posted: "3 days ago",
            location: "Dallas, TX",
            images: ["https://via.placeholder.com/300"],
        },
        {
            name: "Digital Piano",
            price: 400,
            posted: "2 weeks ago",
            location: "Irving, TX",
            images: ["https://via.placeholder.com/300"],
        },
        {
            name: "Camping Tent",
            price: 180,
            posted: "4 days ago",
            location: "Frisco, TX",
            images: ["https://via.placeholder.com/300"],
        },
        {
            name: "Electric Scooter",
            price: 350,
            posted: "1 week ago",
            location: "Cedar Hill, TX",
            images: ["https://via.placeholder.com/300"],
        },
        {
            name: "Air Fryer",
            price: 120,
            posted: "1 month ago",
            location: "Garland, TX",
            images: ["https://via.placeholder.com/300"],
        },
        {
            name: "Desk Chair",
            price: 220,
            posted: "2 weeks ago",
            location: "Dallas, TX",
            images: ["https://via.placeholder.com/300"],
        },
        {
            name: "Wireless Earbuds",
            price: 80,
            posted: "1 week ago",
            location: "Richardson, TX",
            images: ["https://via.placeholder.com/300"],
        },
        {
            name: "Fiction Book Set",
            price: 60,
            posted: "3 days ago",
            location: "Plano, TX",
            images: ["https://via.placeholder.com/300"],
        },
        {
            name: "Vinyl Record Player",
            price: 250,
            posted: "1 month ago",
            location: "Frisco, TX",
            images: ["https://via.placeholder.com/300"],
        },
        {
            name: "Smartwatch",
            price: 300,
            posted: "2 days ago",
            location: "Cedar Hill, TX",
            images: ["https://via.placeholder.com/300"],
        },
        {
            name: "Baking Set",
            price: 50,
            posted: "1 week ago",
            location: "Garland, TX",
            images: ["https://via.placeholder.com/300"],
        },
        {
            name: "Golf Clubs",
            price: 400,
            posted: "3 days ago",
            location: "Dallas, TX",
            images: ["https://via.placeholder.com/300"],
        },
        {
            name: "Lawn Mower",
            price: 200,
            posted: "2 weeks ago",
            location: "Irving, TX",
            images: ["https://via.placeholder.com/300"],
        },
        {
            name: "Fishing Rod",
            price: 90,
            posted: "1 week ago",
            location: "Frisco, TX",
            images: ["https://via.placeholder.com/300"],
        },
        {
            name: "Waffle Maker",
            price: 40,
            posted: "5 days ago",
            location: "Cedar Hill, TX",
            images: ["https://via.placeholder.com/300"],
        },
        {
            name: "VR Headset",
            price: 500,
            posted: "3 days ago",
            location: "Dallas, TX",
            images: ["https://via.placeholder.com/300"],
        },
        {
            name: "Yoga Mat",
            price: 30,
            posted: "1 week ago",
            location: "Garland, TX",
            images: ["https://via.placeholder.com/300"],
        },
    ];

    let filteredItems = [...items];
    const itemsPerPage = 9;
    let currentPage = 1;

    function renderCards() {
        const container = document.getElementById("card-container");
        container.innerHTML = "";

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        const currentItems = filteredItems.slice(startIndex, endIndex);

        currentItems.forEach((item) => {
            const card = document.createElement("div");
            card.classList.add("item-card");

            const imageContainer = document.createElement("div");
            imageContainer.classList.add("image-container");

            const img = document.createElement("img");
            img.src = item.images[0];
            img.classList.add("item-image");
            imageContainer.appendChild(img);

            const priceTag = document.createElement("span");
            priceTag.classList.add("price-tag");
            priceTag.textContent = `$${item.price}`;

            const star = document.createElement("span");
            star.classList.add("star");
            star.innerHTML = "&#9733;";
            star.addEventListener("click", function () {
                this.classList.toggle("filled");
            });

            imageContainer.appendChild(priceTag);
            imageContainer.appendChild(star);

            const itemInfo = document.createElement("div");
            itemInfo.classList.add("item-info");

            const itemName = document.createElement("p");
            itemName.classList.add("item-name");
            itemName.textContent = item.name;

            const itemDetails = document.createElement("p");
            itemDetails.classList.add("item-details");
            itemDetails.textContent = `Posted: ${item.posted} • ${item.location}`;

            itemInfo.appendChild(itemName);
            itemInfo.appendChild(itemDetails);

            card.addEventListener("click", () => {
                if (item.detailsPage) {
                    window.location.href = item.detailsPage;
                }
            });

            card.appendChild(imageContainer);
            card.appendChild(itemInfo);
            container.appendChild(card);
        });

        renderPagination();
    }

    function filterByPrice() {
        const maxPrice = parseInt(document.getElementById("priceRange").value);
        filteredItems = items.filter((item) => item.price <= maxPrice);
        currentPage = 1;
        renderCards();
    }

    function renderPagination() {
        const paginationContainer = document.getElementById("pagination");
        paginationContainer.innerHTML = "";

        const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

        const prevButton = document.createElement("button");
        prevButton.textContent = "Previous";
        prevButton.disabled = currentPage === 1;
        prevButton.addEventListener("click", () => {
            currentPage--;
            renderCards();
        });
        paginationContainer.appendChild(prevButton);

        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement("button");
            pageButton.textContent = i;
            pageButton.classList.add(currentPage === i ? "active" : "");
            pageButton.addEventListener("click", () => {
                currentPage = i;
                renderCards();
            });
            paginationContainer.appendChild(pageButton);
        }

        const nextButton = document.createElement("button");
        nextButton.textContent = "Next";
        nextButton.disabled = currentPage === totalPages;
        nextButton.addEventListener("click", () => {
            currentPage++;
            renderCards();
        });
        paginationContainer.appendChild(nextButton);
    }

    document
        .getElementById("priceRange")
        .addEventListener("input", filterByPrice);

    renderCards();
});
