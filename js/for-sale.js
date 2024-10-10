document.addEventListener("DOMContentLoaded", function () {
    const priceRange = document.getElementById("priceRange");
    const priceValue = document.getElementById("priceValue");

    priceRange.addEventListener("input", function () {
        priceValue.textContent = `$${priceRange.value}`;
    });
});