//global?
const listOfImages = [
    "gallery1",
    "gallery2",
    "gallery3",
    "gallery4",
    "gallery5",
];
let counter = 1;

window.addEventListener("DOMContentLoaded",(ev)=>{
  //change the background image of gallerySelector
  const gallerySelector = document.getElementById("gallery-img-cont");
  gallerySelector.style.backgroundImage = `linear-gradient(to bottom, #00000013, #000000), url(../assets/${listOfImages[0]}.jpg)`;
  counter = counter == (listOfImages.length - 1) ? 0 : counter + 1;
  setInterval(()=>{
    //change the background image of gallerySelector
    gallerySelector.style.backgroundImage = `linear-gradient(to bottom, #00000013, #000000), url(../assets/${listOfImages[counter]}.jpg)`;
    counter = counter == (listOfImages.length - 1) ? 0 : counter + 1;
  },4500);

    document.getElementById("arrow-front").addEventListener("click", ()=>{
        const gallerySelector = document.getElementById("gallery-img-cont");
        counter = counter == (listOfImages.length - 1) ? 0 : counter + 1;
        gallerySelector.style.backgroundImage = `linear-gradient(to bottom, #00000013, #000000), url(../assets/${listOfImages[counter]}.jpg)`;
        console.log(counter)
    })

    document.getElementById("arrow-back").addEventListener("click", ()=>{
        const gallerySelector = document.getElementById("gallery-img-cont");
        counter = counter == 0 ? listOfImages.length - 1 : counter - 1;
        gallerySelector.style.backgroundImage = `linear-gradient(to bottom, #00000013, #000000), url(../assets/${listOfImages[counter]}.jpg)`;
        console.log(counter)
    })
})