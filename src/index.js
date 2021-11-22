import "./styles/styles.css";
import * as Tone from 'tone'

let btn = {
    start: null,
    game: null,
    fin: null
};


let couleur = ['rouge','bleu','vert','jaune'];
let nombre = 3
let game = [];

let gameColor = [];


function init(){
    let array1 = document.querySelectorAll(".boutons");
    array1.forEach(element =>  {
        element.addEventListener("click",() =>{
            if (element.id === "rouge"){
                const synth = new Tone.Synth().toDestination();
                const now = Tone.now()
                synth.triggerAttackRelease("C4", "8n", now)
            }else if (element.id === "bleu"){
                const synth = new Tone.Synth().toDestination();
                const now = Tone.now()
                synth.triggerAttackRelease("E4", "8n", now)

            }else if (element.id === "jaune"){
                const synth = new Tone.Synth().toDestination();
                const now = Tone.now()
                synth.triggerAttackRelease("G4", "8n", now)

            }else if (element.id === "vert"){
                const synth = new Tone.Synth().toDestination();
                const now = Tone.now()
                synth.triggerAttackRelease("F4", "8n", now )
            }

        })

    });

}



function debut () {
    btn.game = document.querySelector('.game');
    btn.fin = document.querySelector('.fin');
    btn.start = document.querySelector('.form');

    let arra = document.querySelectorAll(".boutons");
    arra.forEach(element =>  {
        element.addEventListener("click",() =>{
            if (element.id === "jouer"){
                randomColor();
                play();

                btn.game.style.display = 'block';
                btn.start.style.display = 'none';


                console.log(game);
            }else {

            }
        })
    })
}

const randomColor = () =>{
    for (let i = 0; i < nombre; i++) {
        const pos = Math.round(Math.random() * (couleur.length - 1))
        game.push(couleur[pos])
    }

}

const sound = () => {
    
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now()
    synth.triggerAttackRelease("C4", "8n", now)

}


const play = (delay = 0) => {
    setTimeout(() =>{
        const selectElement = document.querySelector(".bouton_play")
        selectElement.classList.add('hover')
        setTimeout(()=>{
            selectElement.classList.remove('hover')
        },500);
    }, delay)
}



debut();

window.onload = init;