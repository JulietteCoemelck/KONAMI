const KONAMIcode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

let keyboard = [];

let result = true;

let konamiFound = document.getElementById('konamiFound')

const arrowFront = document.getElementsByClassName("key") // tableau de tous les éléments front avec la classe key --> correspond aux span avec les flèches

document.addEventListener('keydown', logKey); // mise sur écoute des touches enfoncées et déclenchement de la fonction logkey

function logKey(e) {

    keyboard.push(e.key);

    let keyboardJoin = keyboard.join('');
    
    const KONAMIcodeJoin = KONAMIcode.join(''); 

    // vérification du code KONAMI dans les touches enfoncées et affichage de l'image //
    if(keyboardJoin.search(KONAMIcodeJoin) !== -1 && keyboard.length === KONAMIcode.length){  
        konamiFound.setAttribute('style', 'visibility: visible')
    };

    // surlignage des touches enfoncées correspondant au code KONAMI //
    for(i = 0; i < keyboard.length; i++){

        if(keyboard[i] === KONAMIcode[i]){
            result = true;
            keyHightlight(arrowFront[i])
        } else if (keyboard[i] !== KONAMIcode[i]){
            result = false;
            keyboard = [] 
        };
        // reset de la page //
        if (result === false){ 
            for (x = 0; x < arrowFront.length; x ++){
                keyNoHighlight(arrowFront[x])
            };
            konamiFound.setAttribute('style', 'visibility: hidden')
        }
    }
}

// fonction pour surligner touche //
function keyHightlight(key) {
    key.setAttribute('style', "box-shadow: inset 0px 0px 20px 10px white")
}

// fonction pour enlever le surlignage //
function keyNoHighlight(key) {
    key.removeAttribute('style')
}





