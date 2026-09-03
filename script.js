const searchButton = document.getElementById("searchButton");
const propertySearch = document.getElementById("propertySearch");

searchButton.addEventListener("click", searchProperty);

propertySearch.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
searchProperty();
}
});

function searchProperty() {
const location = propertySearch.value.trim();

```
if (!location) {
    alert("Please enter a location.");
    propertySearch.focus();
    return;
}

const mapURL =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(location);

window.open(mapURL, "_blank");
```

}

const worthButton = document.getElementById("worthButton");
const address = document.getElementById("address");

worthButton.addEventListener("click", function() {

```
const value = address.value.trim();

if (!value) {
    alert("Please enter your home address.");
    address.focus();
    return;
}

const mapURL =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(value);

window.open(mapURL, "_blank");
```

});
