import "./styles/styles.css";

let btn;

function init(){
    btn = document.querySelector('.boutons');

    btn.addEventListener('click',() =>{
        sound();
    });

    function sound(){
        var context = new AudioContext();
        var o = context.createOscillator();
        var  g = context.createGain();
        g.gain.value = 0.1;
        o.connect(g)
        o.connect(context.destination);
        o.start(0);

        g.gain.exponentialRampToValueAtTime(
            0.00001, context.currentTime + 2
        )
    };
    sound();
}

window.onload = init;