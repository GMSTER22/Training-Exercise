const box = document.getElementById("box");

box.addEventListener("click", (e) => {
    box.classList.toggle("active");
    box.parentElement.classList.toggle("active")
})