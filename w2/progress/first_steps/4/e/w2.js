const topCanvas = document.getElementById("TopCanvas")
const middleCanvas = document.getElementById("MiddleCanvas")
const bottomCanvas = document.getElementById("BottomCanvas")

document.addEventListener('mousemove', (e) => {
    const topCanvasMovement = [
        {transform: `translate(${(-e.clientX + window.innerWidth/2)/2}px, ${(-e.clientY + window.innerHeight/2)/2}px)`},
    ];

    const middleCanvasMovement = [
        {transform: `translate(${(-e.clientX + window.innerWidth/2)/3}px, ${(-e.clientY + window.innerHeight/2)/3}px)`},
    ];

    const bottomCanvasMovement = [
        {transform: `translate(${(-e.clientX + window.innerWidth/2)/5}px, ${(-e.clientY + window.innerHeight/2)/5}px)`},
    ];
      
    const timing = {
        duration: 1000,
        iterations: 1,
        fill: "forwards",
    };

    topCanvas.animate(topCanvasMovement, timing)
    middleCanvas.animate(middleCanvasMovement, timing)
    bottomCanvas.animate(bottomCanvasMovement, timing)
})
    