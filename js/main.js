const btn = document.querySelector(".go-up");

window.onscroll = function() {
    window.scrollY >= 700 ? btn.classList.add("show") :  btn.classList.remove("show")
};

btn.onclick = function() {
    window.scrollTo({
        top: 0
    })
}