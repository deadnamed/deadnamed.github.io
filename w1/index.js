let preProjectState = 1;
let appActivated = false
let clicks = 0;


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
    }
    if(appActivated){
        let oldSize = 100+30*(clicks-1);
        clicks++;
        let newSize = 100+30*clicks;
        
        document.getElementById("clickCounter").innerHTML = clicks.toString();
        document.getElementById('button').style.height = `${newSize}px`;
        document.getElementById('button').style.width = `${newSize}px`
    }
}