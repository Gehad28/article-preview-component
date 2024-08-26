let btn = document.getElementById("btn");
let popup = document.getElementById("popup");

btn.addEventListener("click", (e) => {
    console.log(popup.style.display);
    if(!popup.style.display || popup.style.display == "none"){
        popup.style.display = "flex";
    }
    else{
        popup.style.display = "none";
    }
});