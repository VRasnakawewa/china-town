const { ipcRenderer } = require('electron');

/* Add a click event listener for signin button */
document.querySelector('#signin').addEventListener('click', function () {
    var inputs = document.querySelectorAll('form input');

    var i;
    for (i = 0; i < inputs.length; i++) {
        ipcRenderer.send(inputs[i].name, inputs[i].value);
    }
});
