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

function skillAnimationScroll() {
    window.addEventListener("scroll", () => {
        let skillsList = document.querySelector('.skills-list');
        let skills = document.querySelectorAll(".skill");
        let contentPosition = skillsList.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.6;

        if(contentPosition < screenPosition) {
            for(let i = 0; i < skills.length; i++) {
                skills[i].classList.add('active');
            }
        }else {
            for(let i = 0; i < skills.length; i++) {
                skills[i].classList.remove('active');
            }
        }
    })
}

skillAnimationScroll()