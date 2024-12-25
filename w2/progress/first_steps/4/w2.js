const bottomCanvas = document.getElementById("BottomCanvas")

document.addEventListener("mousemove", (event) => {
    bottomCanvas.style.transform = `translate(${-event.clientX}px, ${-event.clientY}px)`
});
    