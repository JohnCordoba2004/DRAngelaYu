const d = document;
document.querySelector("h1").innerHTML = "Good Bye";

document.getElementsByTagName("li")[2].style.color = "purple";

//Modificar elemento seleccionado
document.querySelectorAll("#list .item a")[0].style.textDecoration = "none";
document.querySelectorAll("#list .item a")[0].style.color = "red";

document.querySelector("h1").classList.toggle("huge");

d.querySelector("a").getAttribute("href");
d.querySelector("a").setAttribute("href", "www.youtube.com");
