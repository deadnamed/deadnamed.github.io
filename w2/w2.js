let preProjectState = 1;
let appActivated = false


document.onclick = (e) => {
    preProjectState++;
    if(2 <= preProjectState && preProjectState <= 5){
        removedText = document.getElementById(`text${preProjectState-1}`)
        insertedText = document.getElementById(`text${preProjectState}`)

        removedText.classList.add("post")
        insertedText.classList.remove("pre")
    }
    if(preProjectState == 6){
        removedText = document.getElementById(`text5`)
        app = document.getElementById(`app`)

        removedText.classList.add("post")
        app.classList.remove("hidden")
        appActivated = true
        setTimeout(generateLinks, 1000);
    }
}

const generateLinks = ()=>{
    const LearnMoreBoxes = document.getElementsByClassName("LearnMore");
    for (let i = 0; i < LearnMoreBoxes.length; i++){
        const box = LearnMoreBoxes[i]
        box.onclick = ()=>{
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }
    }
}

const topCanvas = document.getElementById("TopCanvas")
const middleCanvas = document.getElementById("MiddleCanvas")
const bottomCanvas = document.getElementById("BottomCanvas")

const middleCanvasCarousel = document.getElementById("MiddleCanvasCarousel")

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
        child.style.pointerEvents = "all";

        const learnMore = document.createElement("div");
        learnMore.classList.add('LearnMore');
        child.appendChild(learnMore);
        learnMore.style.animation = "backspin 60s linear infinite";
        learnMore.style.pointerEvents = "all";

        const learnMoreText = document.createElement("p");
        learnMoreText.style.textAlign = "center";
        learnMoreText.innerHTML = "Learn more about this image"
        learnMore.appendChild(learnMoreText);

        child.addEventListener('mouseover', ()=>{
            learnMore.style.clipPath = "circle(50% at 50% 50%)";
        })
        child.addEventListener('mouseleave', ()=>{
            learnMore.style.clipPath = "circle(0% at 50% 50%)"
        })
        i++;
    }
}

middleCanvasSetup();

const topCanvasCarousel = document.getElementById("TopCanvasCarousel")

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
        child.style.pointerEvents = "all";

        const learnMore = document.createElement("div");
        learnMore.classList.add('LearnMore');
        child.appendChild(learnMore);
        learnMore.style.animation = "spin 60s linear infinite";
        learnMore.style.pointerEvents = "all";

        const learnMoreText = document.createElement("p");
        learnMoreText.style.textAlign = "center";
        learnMoreText.innerHTML = "Learn more about this image"
        learnMore.appendChild(learnMoreText);

        child.addEventListener('mouseover', ()=>{
            learnMore.style.clipPath = "circle(50% at 50% 50%)";
        })
        child.addEventListener('mouseleave', ()=>{
            learnMore.style.clipPath = "circle(0% at 50% 50%)"
        })
        i++;
    }
}

topCanvasSetup();

document.onmousemove = (e) => {
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
}