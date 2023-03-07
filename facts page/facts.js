

// TRY 3 Still previuous image is not vissible but better 



var images = ['img/fact-1.jpg', 'img/fact-2.jpg', 'img/fact-3.jpg', 'img/fact-4.jpg', 'img/fact-5.jpg', 'img/fact-6.jpg'];
var index = 0;

function changeImage() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  var image = document.getElementById('image');
  image.src = images[index];
}











// TRY 1 ONLY SHOWS 1 IMG


// function toggleImage() {
//     var image = document.getElementById('image');
//     image.classList.toggle('hidden');
//   }
  
//   var button = document.getElementById('button')
//   button.addEventListener('click', toggleImage)




// TRY 2 THE PREVIOUS IMAGE DISAPEARS 

// function changeImage() {
//   var image = document.getElementById("myImage");
//   if (image.src.match("img/fact-1.jpg")) {
//     image.src = "img/fact-2.jpg";
//   } else {
//     image.src = "img/fact-3.jpg"; 
//     } if (image.src.match("img/fact-3.jpg")) {
//       image.src = "img/fact-4.jpg";
//       } if (image.src.match("img/fact-4.jpg")) {
//         image.src = "img/fact-5.jpg";
//         } 
// }





