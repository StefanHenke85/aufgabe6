function showImage(part) {
    var imageContainer;

    switch (part) {
        case 1:
            imageContainer = document.getElementById("image1");
            break;
        case 2:
            imageContainer = document.getElementById("image2");
            break;
        case 3:
            imageContainer = document.getElementById("image3");
            break;
    }

    if (imageContainer) {
        // Füge das Bild für das jeweilige Drittel hinzu
        imageContainer.innerHTML = '<img src="images/image' + part + '.jpg" alt="Bild ' + part + '">';
    }
}
