import "./styles/styles.css";
import * as Tone from 'tone'

let btn = {
    rouge: null,
    bleu: null,
    vert: null,
    jaune: null
};

function init(){
    btn.rouge = document.getElementById('rouge');

    btn.rouge.addEventListener('click',() =>{
        sound();
    });

    function sound(){
        const synth = new Tone.Synth().toDestination();
        const now = Tone.now()
        synth.triggerAttackRelease("C4", "8n", now)
        synth.triggerAttackRelease("E4", "8n", now + 0.5)
        synth.triggerAttackRelease("G4", "8n", now + 1)
        synth.triggerAttackRelease("F4", "8n", now + 1.5)
    }
    sound();
}

window.onload = init;