const MainMenu = pc.createScript('MainMenu');


const btnPlay = document.querySelector('#play');
const btnGarage = document.querySelector('#garage');
const btnQuit = document.querySelector('#quit');

function onQuit()


   {
        const quit = confirm("Are you sure you want to quit game?");
        if (quit) {

            console.log('quit');
        }
    }
    btnQuit.addEventListener('click', onQuit);

MainMenu.prototype.initialize = function() {


};