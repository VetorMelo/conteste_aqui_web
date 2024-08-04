let currentImageIndex = 0;
const images = document.querySelectorAll('#imageCarousel .carousel-content img');
const captions = document.querySelectorAll('#captionCarousel .carousel-content .caption');

function showImage(index) {
    const totalImages = images.length;
    images.forEach((img, i) => {
        img.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function showCaption(index) {
    const totalCaptions = captions.length;
    captions.forEach((caption, i) => {
        caption.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function prevImage() {
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
    showImage(currentImageIndex);
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function prevCaption() {
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : captions.length - 1;
    showCaption(currentImageIndex);
}

function nextCaption() {
    currentImageIndex = (currentImageIndex + 1) % captions.length;
    showCaption(currentImageIndex);
}

// Inicializa os carrosséis
showImage(currentImageIndex);
showCaption(currentImageIndex);
