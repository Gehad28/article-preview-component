let btn = document.getElementById("btn");
let icon = document.getElementById("svg");
let popup = document.getElementById("popup");
let profile = document.getElementById("profile");

btn.addEventListener("click", (e) => {
    if(!popup.style.display || popup.style.display == "none"){
        popup.style.display = "flex";
        btn.classList.add("bg-color");
        popup.classList.remove("close");
        popup.classList.add("open");
    }
    else{
        btn.classList.remove("bg-color");
        popup.classList.remove("open");
        popup.classList.add("close");
        popup.addEventListener(
            'animationend',
            function handler() {
                popup.style.display = 'none'; 
                popup.removeEventListener('animationend', handler);
            }
        );
    }
});