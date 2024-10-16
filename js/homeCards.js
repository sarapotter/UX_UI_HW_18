document.addEventListener("DOMContentLoaded", function () {
    const items = [
        {
            name: "Chinese Fingertrap",
            price: "$250",
            posted: "2 days ago",
            location: "Dallas, TX",
            images: ["images/homeCards/fingertrap.png"],
        },
        {
            name: "Guitar",
            price: "$120",
            posted: "5 days ago",
            location: "Garland, TX",
            images: ["images/homeCards/guitar.png"],
        },
        {
            name: "3D Printer",
            price: "$600",
            posted: "1 week ago",
            location: "Richardson, TX",
            images: ["images/homeCards/3dprinter.jpg"],
        },
        {
            name: "MacBook Air",
            price: "$900",
            posted: "3 days ago",
            location: "Irving, TX",
            images: ["images/homeCards/macbookair.jpg"],
        },
        {
            name: "Dining Room Chairs",
            price: "$450",
            posted: "2 weeks ago",
            location: "Mesquite, TX",
            images: ["images/homeCards/diningchairs.jpg"],
        },
        {
            name: "Old Jeans",
            price: "$100",
            posted: "4 days ago",
            location: "Cedar Hill, TX",
            images: ["images/homeCards/oldjeans.jpg"],
        },
    ];

    function renderCards() {
        const container = document.getElementById("card-container");

        items.forEach((item) => {
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
            priceTag.textContent = item.price;

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

            card.appendChild(imageContainer);
            card.appendChild(itemInfo);
            container.appendChild(card);
        });
    }

    renderCards();
});
