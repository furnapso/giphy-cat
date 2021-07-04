const image = document.querySelector("img");
const errorMessage = document.querySelector('.error');
const apiKey = 'vg6xVYCB161CplGvKh4MrHDeuS69Druc';
const searchBox = document.querySelector("#searchBox");
const searchButton = document.querySelector("button");

function getNewGif(searchTerm) {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${searchTerm}`, {mode: 'cors'})
    .then(response => response.json())
    .then(response => {
        image.src = response.data.images.original.url;
        errorMessage.innerText = '';
    })
    .catch(err => {
        errorMessage.innerText = `Failed to find any gifs for ${searchTerm}, searching for cats instead`
        getNewGif('cats');
    })
}

getNewGif('cats');

searchButton.addEventListener('click', () => {
    let searchTerm = searchBox.value;
    getNewGif(searchTerm);
})