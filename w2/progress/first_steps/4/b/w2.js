const bottomCanvas = document.getElementById("BottomCanvas")

document.addEventListener("mousemove", (event) => {
    bottomCanvas.style.transform = `translate(${(window.innerWidth/2-event.clientX)/5}px, ${(window.innerHeight/2-event.clientY)/5}px)`
});
    