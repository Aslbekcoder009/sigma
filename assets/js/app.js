const top1 = document.querySelector(".top1")
const top2 = document.querySelector(".top2")
const btn = document.querySelector(".btn")
const top3 = document.querySelector(".top3")
const img = document.querySelector(".video")

btn.addEventListener("click", (e) => {
    e.preventDefault();

    img.style.width = top1.value + "px"
    img.style.height = top2.value + "px"
    img.style.opacity = top3.value + "%"

})