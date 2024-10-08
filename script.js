//your JS code here. If required.

const output = document.getElementById("output");
// Get the button element for downloading images
const btn = document.getElementById("download-images-button");
// Array containing URLs of images to download
const images = [
 { url: "https://picsum.photos/id/237/200/300" },
 { url: "https://picsum.photos/id/238/200/300" },
 { url: "https://picsum.photos/id/239/200/300" },
];

function downloadImage(image) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => resolve(img)
		img.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`))
		img.src = image.url;
	})
}

function displayImages(images) {
	images.forEach(img => output.appendChild(img));
}
btn.addEventListener('click', () => {
	const downloadPromises = images.map((image) => downloadImage(image));
	Promise.all(downloadPromises).then(displayImages)
	.catch((error) => console.log(error))
})


