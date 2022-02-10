//img-slider
let slide =[
    "image/slider-img1.jpg",
    "image/slider-img2.jpg",
    "image/slider-img3.jpg",
]
let index=0;
function changeImg(){
    let myslide = document.querySelector(".my-img-slider");
    myslide.src = slide[index];

    if(index < slide.length - 1){
      index++; 
    } else { 
        index = 0;
    }

    setTimeout("changeImg()", 5000);
}
window.onload=changeImg;
