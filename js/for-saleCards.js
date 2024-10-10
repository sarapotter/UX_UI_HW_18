document.addEventListener("DOMContentLoaded", function () {
    const items = [
        {
            name: "Vintage Chair",
            price: 250,
            posted: "2 days ago",
            location: "Dallas, TX",
            images: ["images/forSaleCards/vintagechair.jpg"],
            detailsPage: "vintage-chair.html",
        },
        {
            name: "Old Guitar",
            price: 120,
            posted: "5 days ago",
            location: "Garland, TX",
            images: ["images/forSaleCards/old-guitar.jpg"],
        },
        {
            name: "Mountain Bike",
            price: 600,
            posted: "1 week ago",
            location: "Richardson, TX",
            images: ["images/forSaleCards/bike.jpg"],
        },
        {
            name: "MacBook Pro",
            price: 900,
            posted: "3 days ago",
            location: "Irving, TX",
            images: ["images/forSaleCards/macpro.jpg"],
        },
        {
            name: "Dining Table",
            price: 450,
            posted: "2 weeks ago",
            location: "Mesquite, TX",
            images: ["images/forSaleCards/diningtable.jpg"],
        },
        {
            name: "Leather Jacket",
            price: 100,
            posted: "4 days ago",
            location: "Cedar Hill, TX",
            images: ["images/forSaleCards/jacket.jpg"],
        },
        {
            name: "Camera",
            price: 300,
            posted: "1 day ago",
            location: "Dallas, TX",
            images: ["images/forSaleCards/camera.jpg"],
        },
        {
            name: "Gaming Console",
            price: 400,
            posted: "3 days ago",
            location: "Dallas, TX",
            images: ["images/forSaleCards/gamingConsole.jpg"],
        },
        {
            name: "Bicycle",
            price: 200,
            posted: "1 week ago",
            location: "Garland, TX",
            images: ["images/forSaleCards/bik2.jpg"],
        },
        {
            name: "Sofa",
            price: 700,
            posted: "1 week ago",
            location: "Plano, TX",
            images: ["images/forSaleCards/sofa.jpeg"],
        },
        {
            name: "Coffee Maker",
            price: 80,
            posted: "2 days ago",
            location: "Richardson, TX",
            images: ["images/forSaleCards/coffee.jpg"],
        },
        {
            name: "PlayStation 5",
            price: 500,
            posted: "5 days ago",
            location: "Frisco, TX",
            images: ["images/forSaleCards/playstation-5.jpg"],
        },
        {
            name: "Samsung TV",
            price: 1000,
            posted: "1 month ago",
            location: "Garland, TX",
            images: ["images/forSaleCards/tcv.jpg"],
        },
        {
            name: "Leather Boots",
            price: 150,
            posted: "3 days ago",
            location: "Dallas, TX",
            images: ["images/forSaleCards/boots.jpg"],
        },
        {
            name: "Digital Piano",
            price: 400,
            posted: "2 weeks ago",
            location: "Irving, TX",
            images: ["images/forSaleCards/piano.jpg"],
        },
        {
            name: "Camping Tent",
            price: 180,
            posted: "4 days ago",
            location: "Frisco, TX",
            images: ["images/forSaleCards/tent.jpg"],
        },
        {
            name: "Electric Scooter",
            price: 350,
            posted: "1 week ago",
            location: "Cedar Hill, TX",
            images: ["images/forSaleCards/scooter.jpg"],
        },
        {
            name: "Air Fryer",
            price: 120,
            posted: "1 month ago",
            location: "Garland, TX",
            images: ["images/forSaleCards/airfryer.jpg"],
        },
        {
            name: "Desk Chair",
            price: 220,
            posted: "2 weeks ago",
            location: "Dallas, TX",
            images: ["images/forSaleCards/chair.jpg"],
        },
        {
            name: "Wireless Earbuds",
            price: 80,
            posted: "1 week ago",
            location: "Richardson, TX",
            images: ["images/forSaleCards/earbuds.png"],
        },
        {
            name: "Fiction Book Set",
            price: 60,
            posted: "3 days ago",
            location: "Plano, TX",
            images: ["images/forSaleCards/books.jpg"],
        },
        {
            name: "Vinyl Record Player",
            price: 250,
            posted: "1 month ago",
            location: "Frisco, TX",
            images: ["images/forSaleCards/record.jpg"],
        },
        {
            name: "Smartwatch",
            price: 300,
            posted: "2 days ago",
            location: "Cedar Hill, TX",
            images: ["images/forSaleCards/smartwatch.jpg"],
        },
        {
            name: "Baking Set",
            price: 50,
            posted: "1 week ago",
            location: "Garland, TX",
            images: ["images/forSaleCards/bakingset.jpg"],
        },
        {
            name: "Golf Clubs",
            price: 400,
            posted: "3 days ago",
            location: "Dallas, TX",
            images: ["images/forSaleCards/clubs.jpg"],
        },
        {
            name: "Lawn Mower",
            price: 200,
            posted: "2 weeks ago",
            location: "Irving, TX",
            images: ["images/forSaleCards/mower.jpg"],
        },
        {
            name: "Fishing Rod",
            price: 90,
            posted: "1 week ago",
            location: "Frisco, TX",
            images: ["images/forSaleCards/rods-and-reels.jpg"],
        },
        {
            name: "Waffle Maker",
            price: 40,
            posted: "5 days ago",
            location: "Cedar Hill, TX",
            images: ["images/forSaleCards/waffle-maker.jpg"],
        },
        {
            name: "VR Headset",
            price: 500,
            posted: "3 days ago",
            location: "Dallas, TX",
            images: ["images/forSaleCards/vr.png"],
        },
        {
            name: "Yoga Mat",
            price: 30,
            posted: "1 week ago",
            location: "Garland, TX",
            images: ["images/forSaleCards/yogamat.jpg"],
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
            pageButton.disabled = i === currentPage;
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
