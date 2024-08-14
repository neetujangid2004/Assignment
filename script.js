const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const downloadLink = document.getElementById('downloadImage');
const closeModal = document.getElementById('closeModal');

const images = [
    'workout1.png',
    'workout2.png',
    'workout3.png'
];
let currentIndex = 0;
let zoomLevel = 1;

function openModal(index) {
    currentIndex = index;
    modal.style.display = "flex";
    modalImg.src = images[currentIndex];
    downloadLink.href = images[currentIndex];
}

document.getElementById('prevImage').onclick = function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    modalImg.src = images[currentIndex];
    downloadLink.href = images[currentIndex];
    resetZoom();
};

document.getElementById('nextImage').onclick = function() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    modalImg.src = images[currentIndex];
    downloadLink.href = images[currentIndex];
    resetZoom();
};

document.getElementById('zoomIn').onclick = function() {
    zoomLevel += 0.2;
    modalImg.style.transform = `scale(${zoomLevel})`;
};

document.getElementById('zoomOut').onclick = function() {
    if (zoomLevel > 1) {
        zoomLevel -= 0.2;
        modalImg.style.transform = `scale(${zoomLevel})`;
    }
};

closeModal.onclick = function() {
    modal.style.display = "none";
    resetZoom();
};

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
        resetZoom();
    }
};

function resetZoom() {
    zoomLevel = 1;
    modalImg.style.transform = `scale(${zoomLevel})`;
}