function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("ligth")
  // if(html.classList.contains("ligth")){
  //   html.classList.remove("ligth")
  // } else{
  //   html.classList.add("light")
  // }

  // trocar imagem//
  // const img = document.querySelector("#profile img")
  // if (html.classList.contains("ligth")) {
  //   img.setAttribute("src","./linkimage-ligth")
  // } else {
  //   img.setAttribute("src", "./linkimage-dark")
  // }
  //troca descriçao//
  const img = document.querySelector("#profile img")
  if (html.classList.contains("ligth")) {
    img.setAttribute("alt","logo do meu pau")
  } else {
    img.setAttribute("alt", "logo do jupiter atelier de tatuagem")
}
}
