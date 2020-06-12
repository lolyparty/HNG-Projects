 //Toggler

 let toggleContainer = document.createElement("div")
 let toggleIcon = document.createElement("a")
 toggleIcon.setAttribute("class", "fa fa-arrow-up")
 toggleIcon.setAttribute("href", "#")
 toggleContainer.appendChild(toggleIcon)
 document.body.appendChild(toggleContainer)

window.onscroll = () =>{
  let scrollheight = window.scrollY || document.body.innerHeight|| document.documentElement.innerHeight;

if(Math.round(scrollheight) >= 700){
  toggleContainer.setAttribute("class", "wrapUp")
}
else{
  toggleContainer.removeAttribute("class", "wrapUp")
}
}
