//your JS code here. If required.

// Define the output div where images will be displayed
const output = document.getElementById("output");


// Get the button element for downloading images
const btn = document.getElementById("download-images-button");


// Array containing URLs of images to download
const images = [
 { url: "https://picsum.photos/id/237/200/300" },
 { url: "https://picsum.photos/id/238/200/300" },
 { url: "https://picsum.photos/id/239/200/300" },
];

// Function to download an image given its URL
function downloadImage(image) {
 // Create a new Promise
 return new Promise((resolve, reject) => {
   // Create a new Image element
   const img = new Image();
   // Event handler for image load success
   img.onload = () => resolve(img); // Resolve the Promise with the loaded image
   // Event handler for image load failure
   img.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`)); // Reject the Promise with an error message
   // Set the image source to start loading
   img.src = image.url;
 });
}


// Function to display downloaded images on the webpage
function displayImages(images) {
 // Iterate over each image element
 images.forEach(img => output.appendChild(img)); // Append each image to the output div
}


// Event listener for the download button
btn.addEventListener("click", () => {
 // Map each image URL to a downloadImage promise
 const downloadPromises = images.map(downloadImage);


 // Use Promise.all to download all images in parallel
 Promise.all(downloadPromises)
   .then(displayImages) // Display images on success
   .catch(error => console.error(error)); // Log error on failure
});

