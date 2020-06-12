let mobileMenu = document.querySelector(".headerBars")

let carouselContainer = document.querySelector(".slider").children;
let carousel_add_btn = document.querySelector("#nextSlide") 
let carousel_prev_btn = document.querySelector("#prevSlide");
let carouselIndicator = document.querySelector(".indicators");

let index = 0;

carousel_add_btn.onclick = element => {
  if(index >= carouselContainer.length-1){
    index = 0;
  }
  else{
    index++
  }
  carousel()

} 

carousel_prev_btn.onclick = () =>{
  if(index <= 0){
    index = carouselContainer.length-1
  
  }else{
    index--
  }
  carousel()
}
//carousel function
function carousel(){
  for(var i = 0; i < carouselContainer.length; i++){
    carouselContainer[i].classList.remove("active")
  }
  carouselContainer[index].classList.add("active")
  activeIndicator()
}
//create carousel Indicators 
function indicator(){
  for(var i = 0; i < carouselContainer.length; i++){
    let sphere = document.createElement("span")
   sphere.setAttribute("onclick", "fetch(this)")
   sphere.setAttribute("id", i)
   carouselIndicator.append(sphere)
  }
}
indicator()
function activeIndicator(){
  for(var i = 0; i < carouselIndicator.children.length; i++){
    carouselIndicator.children[i].classList.remove("active")
  }
  carouselIndicator.children[index].classList.add("active")
}
function fetch(e){
index = e.id;
carousel()
}

//Hamburgger-menu-
mobileMenu.onclick = element =>{
document.querySelector(".lists").classList.toggle("active");
 mobileMenu.classList.toggle("active");
 }

