const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", function () {

    let location = document
        .getElementById("propertySearch")
        .value
        .trim();

    if (location === "") {
        alert("Please enter a location.");
        return;
    }

    let mapURL =
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(location);

    window.open(mapURL, "_blank");
});


document
    .getElementById("propertySearch")
    .addEventListener("keypress", function (event) {

        if (event.key === "Enter") {
            searchButton.click();
        }

    });