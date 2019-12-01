const MainMenu = pc.createScript('MainMenu');

const btnPlay = document.querySelector('#play');
const btnGarage = document.querySelector('#garage');
const btnQuit = document.querySelector('#quit');

function onQuit() {

    const options =
    {
        title: "Are you sure you want to quit game?",

        actions: [{
            caption: 'Yes',
            cls: "js-dialog-close primary",
            onclick: function () {
                cordova.plugins.exit();

            }

        },
        {
            caption: 'No',
            onclick: function () {
                Metro.dialog.close(quit);
            }

        }
        ]
    };
    const quit = Metro.dialog.create(options);

}
btnQuit.addEventListener('touchstart', onQuit);

MainMenu.prototype.initialize = function () {

};