console.log('%c HI', 'color: firebrick')

//CHALLENGE ONE//

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
let breeds = []

fetch(imgUrl)
.then(function(response){
    return response.json();
})
.then(function(data) {
    data.message.forEach(function(imageUrl) {
      let imgElement = document.createElement('img');
      imgElement.src = imageUrl;
      document.getElementById("dog-image-container").append(imgElement);
    });
  });

//CHALLENGE TWO & THREE//

const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener('DOMContentLoaded', function() {
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(function(response){
        return response.json();
         })
        .then(function(data) {
          Object.keys(data.message).forEach(function(breed) {
          breeds.push(breed)
          let breedLi = document.createElement('li');
          breedLi.textContent = breed;
          breedLi.addEventListener('click', function changeWordColor(){
            breedLi.style.color = '#FF69B4'
          })
    document.getElementById("dog-breeds").append(breedLi);
        })
    });
})

// CHALLENGE FOUR //

const dropdown = document.querySelector("#breed-dropdown");

// function loadBreeds(data) {
//   const itemList = document.getElementById("itemList");
// let breeds = Object.keys(data.message);
//   breeds.forEach(function(breed) {
//     const newItem = document.createElement("li");
//     newItem.textContent = itemText;
//     itemList.append(itemText);
//   });
// }

dropdown.addEventListener("change", function() {
  let selectedLetter = dropdown.value;
  const itemList = document.getElementById("dog-breeds");
  itemList.innerHTML = "";
      breeds.forEach(function(breed) {
        const itemText = breed;
        if (itemText.charAt(0).toLowerCase() === selectedLetter.toLowerCase()) {
          const newItem = document.createElement("li");
          newItem.textContent = itemText;
          itemList.appendChild(newItem);
        }
      });
    })