const KONAMIcode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

let keyboard = [];

let result = true;

const arrowFront = document.getElementsByClassName("key") // tableau de tous les éléments front avec la classe key --> correspond aux span avec les flèches

document.addEventListener('keydown', logKey); // mise sur écoute des touches enfoncées et déclenchement de la fonction logkey

let cerisierID = document.getElementById('cerisier'); // recherche si l'image existe

function logKey(e) {

    keyboard.push(e.key); // tableau des touches enfoncées

    let keyboardJoin = keyboard.join(''); // tableau condensé des touches enfoncées
    
    const KONAMIcodeJoin = KONAMIcode.join(''); // tableau condensé du code KONAMI

    // vérification du code KONAMI dans les touches enfoncées et affichage de l'image //
    if(keyboardJoin.search(KONAMIcodeJoin) != -1 && cerisierID === null && keyboard.length === KONAMIcode.length){ // vérifie que l'image n'existe pas déjà + que les touches enfoncées sont identiques à celles du code KONAMI 
        let cerisier = document.createElement("img");
        cerisier.src = "http://ekladata.com/fd2W0jZf3lfpye3Q9unj-Rby8sU.gif";
        cerisier.id = "cerisier";
        cerisier.alt = 'KONAMI found';
        document.body.appendChild(cerisier)
    };

    // surlignage des touches enfoncées correspondant au code KONAMI //
    for(i = 0; i < keyboard.length; i++){

        if(keyboard[i] === KONAMIcode[i]){
            result = true;
            keyHightlight(arrowFront[i])
        } else if (keyboard[i] !== KONAMIcode[i]){
            result = false;
            keyboard = [] // on reset le tableau des touches enfoncées
        };

        if (result === false){ 
            for (x = 0; x < arrowFront.length; x ++){
                keyNoHighlight(arrowFront[x]) // on enlève le box-shadow de toutes les flèches en cas d'erreur
            };
            cerisierID = document.getElementById('cerisier'); // on recherche l'ID de l'image
            if(cerisierID !== null){
                cerisierID.remove(); // on enlève l'image de cerisier si l'ID existe
                cerisierID = document.getElementById('cerisier'); // mise à jour de la variable
            }
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





