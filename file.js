let container= document.querySelector('#container');
let dino = document.querySelector('#dino');
let block = document.querySelector('#block');
let road = document.querySelector('#road');
let cloud = document.querySelector('#cloud');
let score = document.querySelector('#score');
let gameover = document.querySelector('#gameover');

let interval = null;
let playerscore = 0;

let scorecounter = () => {
    playerscore++;
    score.innerHTML = `Score <b>${playerscore}</b>`;
}

window.addEventListener("keydown", (event) => {
    switch (event.code) {
        case "Space":
            gameover.style.display = "none";
            block.classList.add("blockAnimate");
            road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite";
            cloud.firstElementChild.style.animation = "cloudAnimate 30s linear infinite";
            interval = setInterval(scorecounter, 200);
            break;

        case "ArrowUp":
            if (dino.classList != "dinoActive") {
                dino.classList.add("dinoActive");

                setTimeout(() => {
                    dino.classList.remove("dinoActive");
                }, 500);

                break;
            }
    }
});

let result = setInterval(()=>{
    let dinoBottom =  parseInt(getComputedStyle(dino).getPropertyValue("bottom"));

    let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));

    if(dinoBottom <= 90 && blockLeft >= 20 && blockLeft <=53){
        alert("Game Over");
        gameover.style.display = "block";
        block.classList.remove("blockAnimate");
        road.firstElementChild.style.animation = "none";
        cloud.firstElementChild.style.animation = "none";
        clearInterval(interval);
        playerscore = 0;
    }
},10);
