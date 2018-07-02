const { app, BrowserWindow } = require('electron')

/**
 * Create browser window and load a html page
 */
function createWindow () {
    win = new BrowserWindow({width: 800, height: 600});
    win.loadFile('index.html');
}

app.on('ready', createWindow)
