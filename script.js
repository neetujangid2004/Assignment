// Get modal elements
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const mainImage = document.getElementById('mainImage');
const closeModal = document.getElementById('closeModal');
const prevImage = document.getElementById('prevImage');
const nextImage = document.getElementById('nextImage');
const zoomIn = document.getElementById('zoomIn');
const zoomOut = document.getElementById('zoomOut');
const downloadImage = document.getElementById('downloadImage');

// Open the modal when the image is clicked
mainImage.onclick = function() {
    modal.style.display = 'flex';
    downloadImage.href = modalImage.src; // Set download link
}

// Close the modal when the close button is clicked
closeModal.onclick = function() {
    modal.style.display = 'none';
}

// Handle zoom in
zoomIn.onclick = function() {
    let currentWidth = modalImage.clientWidth;
    let currentHeight = modalImage.clientHeight;
    modalImage.style.width = (currentWidth * 1.2) + 'px';
    modalImage.style.height = (currentHeight * 1.2) + 'px';
}

// Handle zoom out
zoomOut.onclick = function() {
    let currentWidth = modalImage.clientWidth;
    let currentHeight = modalImage.clientHeight;
    modalImage.style.width = (currentWidth / 1.2) + 'px';
    modalImage.style.height = (currentHeight / 1.2) + 'px';
}

// Previous and Next image functionality (assuming multiple images)
let images = ['workout1.png', 'workout2.png', 'workout3.png']; 
let currentIndex = 0;

function updateImage() {
    modalImage.src = images[currentIndex];
    downloadImage.href = modalImage.src; 
}

prevImage.onclick = function() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
}

nextImage.onclick = function() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
}

// ----------------------------------------------------------------
// Get modal elements
const modalS = document.getElementById('imageModalS');
const modalImageS = document.getElementById('modalImageS');
const mainImageS = document.getElementById('mainImageS');
const closeModalS = document.getElementById('closeModalS');
const prevImageS = document.getElementById('prevImageS');
const nextImageS = document.getElementById('nextImageS');
const zoomInS = document.getElementById('zoomInS');
const zoomOutS = document.getElementById('zoomOutS');
const downloadImageS = document.getElementById('downloadImageS');

// Open the modal when the image is clicked
mainImageS.onclick = function() {
    modal.style.display = 'flex';
    downloadImageS.href = modalImageS.src; 
}

// Close the modal when the close button is clicked
closeModalS.onclick = function() {
    modal.style.display = 'none';
}

// Handle zoom in
zoomInS.onclick = function() {
    let currentWidth = modalImageS.clientWidth;
    let currentHeight = modalImageS.clientHeight;
    modalImageS.style.width = (currentWidth * 1.2) + 'px';
    modalImageS.style.height = (currentHeight * 1.2) + 'px';
}

// Handle zoom out
zoomOutS.onclick = function() {
    let currentWidth = modalImageS.clientWidth;
    let currentHeight = modalImageS.clientHeight;
    modalImageS.style.width = (currentWidth / 1.2) + 'px';
    modalImageS.style.height = (currentHeight / 1.2) + 'px';
}

// Previous and Next image functionality (assuming multiple images)
let imagesS = ['workout1.png', 'workout2.png', 'workout3.png']; 
let currentIndexS = 0;

function updateImageS() {
    modalImageS.src = imagesS[currentIndex];
    downloadImageS.href = modalImageS.src; 
}

prevImageS.onclick = function() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImageS();
}

nextImageS.onclick = function() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImageS();
}

// ----------------------------------------------------------------
// Get modal elements
const modalT = document.getElementById('imageModalT');
const modalImageT = document.getElementById('modalImageT');
const mainImageT = document.getElementById('mainImageT');
const closeModalT = document.getElementById('closeModalT');
const prevImageT = document.getElementById('prevImageT');
const nextImageT = document.getElementById('nextImageT');
const zoomInT = document.getElementById('zoomInT');
const zoomOutT = document.getElementById('zoomOutT');
const downloadImageT = document.getElementById('downloadImageT');

// Open the modal when the image is clicked
mainImageT.onclick = function() {
    modal.style.display = 'flex';
    downloadImageT.href = modalImageT.src; // Set download link
}

// Close the modal when the close button is clicked
closeModalT.onclick = function() {
    modal.style.display = 'none';
}

// Handle zoom in
zoomInT.onclick = function() {
    let currentWidth = modalImageT.clientWidth;
    let currentHeight = modalImageT.clientHeight;
    modalImageT.style.width = (currentWidth * 1.2) + 'px';
    modalImageT.style.height = (currentHeight * 1.2) + 'px';
}

// Handle zoom out
zoomOutT.onclick = function() {
    let currentWidth = modalImageT.clientWidth;
    let currentHeight = modalImageT.clientHeight;
    modalImageT.style.width = (currentWidth / 1.2) + 'px';
    modalImageT.style.height = (currentHeight / 1.2) + 'px';
}

// Previous and Next image functionality (assuming multiple images)
let imagesT = ['workout1.png', 'workout2.png', 'workout3.png']; 
let currentIndexT = 0;

function updateImageT() {
    modalImageT.src = imagesT[currentIndex];
    downloadImageT.href = modalImageT.src; 
}

prevImageT.onclick = function() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImageT();
}

nextImageT.onclick = function() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImageT();
}