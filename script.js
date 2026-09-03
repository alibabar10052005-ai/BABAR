const searchButton = document.getElementById("searchButton");
const propertySearch = document.getElementById("propertySearch");

function searchProperty() {
    const location = propertySearch.value.trim();

    if (location === "") {
        alert("Please enter a location.");
        return;
    }

    const mapURL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;

    window.location.href = mapURL;
}

searchButton.addEventListener("click", searchProperty);

propertySearch.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchProperty();
    }
});
