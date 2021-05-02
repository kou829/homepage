const boxElement = document.querySelectorAll(".box");
console.log("画面の高さ", window.innerHeight)
document.addEventListener("scroll", function(){
    for (let i = 0; i < boxElement.length; i++) {
        const getElementDistance = boxElement[i].getBoundingClientRect().top + boxElement[i].clientHeight * 0.6
        if (window.innerHeight > getElementDistance){
            boxElement[i].classList.add("show");
        }
    }
})
