import "./styles/styles.css";
import * as Tone from 'tone'

let btn = {
    rouge: null,
    bleu: null,
    vert: null,
    jaune: null
};

let intervalFunction;

let couleur = ['rouge','bleu','vert','jaune'];
let nombre = 3
let game = [];

const colorQueue = [];


function init(){
    let array1 = document.querySelectorAll(".boutons");
    array1.forEach(element =>  {
        element.addEventListener("click",() =>{
            if (element.id === "jouer"){
                for (let i = 0; i<nombre;i++){
                    let pos = Math.round(Math.random() * (couleur.length - 1))
                    game.push(couleur[pos])
                }
                let position = 0
                intervalFunction = setInterval(
                    () =>{
                        const selectPosition = game[position]

                    },1000
                )
            }else if (element.id === "rouge"){
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

    const addColor = () => {
        colorQueue.push(pos)
    }
}

function debut () {
    let arra = document.querySelectorAll(".boutons");
    arra.forEach(element =>  {
        element.addEventListener("click",() =>{
            if (element.id === "jouer"){
                for (let i = 0; i < nombre; i++) {
                    const pos = Math.round(Math.random() * (couleur.length - 1))
                    game.push(couleur[pos])
                }
                console.log(game);
                /* let position = 0
                 intervalFunction = setInterval(
                     () => {
                         const selectPosition = game[position]

                     }, 1000
                 )*/
            }else {

            }
        })
 })
}
debut();

window.onload = init;