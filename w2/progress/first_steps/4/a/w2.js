const bottomCanvas = document.getElementById("BottomCanvas")

document.addEventListener("mousemove", (event) => {
    bottomCanvas.style.transform = `translate(${window.innerWidth/2-event.clientX}px, ${window.innerHeight/2-event.clientY}px)`
});
    