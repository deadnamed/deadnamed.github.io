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

const middleCanvasCarousel = document.getElementById("MiddleCanvasCarousel")
const middleCanvasItems = middleCanvasCarousel.children

const middleCanvasSetup = ()=>{
    let i = 0;
    const length = middleCanvasCarousel.children.length;
    const shiftRadius = middleCanvasCarousel.offsetWidth/2 + middleCanvasCarousel.children[0].offsetHeight/2 + 40;
    const pi = 3.141592;
    for (let child of middleCanvasCarousel.children) {
        child.style.transform = `translate(${-child.offsetWidth/2 + shiftRadius*Math.sin(2*pi*i/length)}px, ${-child.offsetHeight/2 + shiftRadius*Math.cos(2*pi*i/length)}px)`;

        const image = document.createElement("img");
        image.src = `https://picsum.photos/500?random=${i.toString()}`
        child.appendChild(image);

        const learnMore = document.createElement("div");
        learnMore.classList.add('LearnMore');
        child.appendChild(learnMore);
        learnMore.style.pointerEvents = "all";
        learnMore.onclick = ()=>{
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }
        
        const learnMoreText = document.createElement("p");
        learnMoreText.style.textAlign = "center";
        learnMoreText.innerHTML = "Learn more about this image"
        learnMore.appendChild(learnMoreText);

        i++;
    }
}

middleCanvasSetup();

const topCanvasCarousel = document.getElementById("TopCanvasCarousel")
const topCanvasItems = topCanvasCarousel.children

const topCanvasSetup = ()=>{
    let i = 0;
    const length = topCanvasCarousel.children.length;
    const shiftRadius = topCanvasCarousel.offsetWidth/2 + topCanvasCarousel.children[0].offsetHeight/2 + 40;
    const pi = 3.141592;
    for (let child of topCanvasCarousel.children) {
        child.style.transform = `translate(${-child.offsetWidth/2 + shiftRadius*Math.sin(2*pi*i/length)}px, ${-child.offsetHeight/2 + shiftRadius*Math.cos(2*pi*i/length)}px)`;

        const image = document.createElement("img");
        image.src = `https://picsum.photos/500?random=${i.toString()}`
        child.appendChild(image);

        const learnMore = document.createElement("div");
        learnMore.classList.add('LearnMore');
        child.appendChild(learnMore);
        learnMore.style.pointerEvents = "all";
        learnMore.onclick = ()=>{
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }
        
        const learnMoreText = document.createElement("p");
        learnMoreText.style.textAlign = "center";
        learnMoreText.innerHTML = "Learn more about this image"
        learnMore.appendChild(learnMoreText);

        i++;
    }
}

topCanvasSetup();
