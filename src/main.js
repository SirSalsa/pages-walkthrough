const img = document.querySelector("img");

const penguinImgUrl = new URL("./img/penguin.jpg", import.meta.url);
const puffinImgUrl = new URL("./img/puffin.jpg", import.meta.url);

img.src = penguinImgUrl.href; //Sets image for initial page load

//Boolean to check if image is active
let isPenguin = true;

//Changes picture to the other when clicked
img.addEventListener("click", function() {
    if (isPenguin){
        img.src = puffinImgUrl;
    }
    else {
        img.src = penguinImgUrl;
    }
    isPenguin = !isPenguin;
})