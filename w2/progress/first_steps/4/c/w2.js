const bottomCanvas = document.getElementById("BottomCanvas")

document.addEventListener("mousemove", (e) => {
    const bottomCanvasMovement = [
        {transform: `translate(${(-e.clientX + window.innerWidth/2)/5}px, ${(-e.clientY + window.innerHeight/2)/5}px)`},
    ];
      
    const timing = {
        duration: 1000,
        iterations: 1,
        fill: "forwards",
    };

    bottomCanvas.animate(bottomCanvasMovement, timing)
});
    