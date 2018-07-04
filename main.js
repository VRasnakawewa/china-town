const { app, BrowserWindow, ipcMain } = require('electron');

/* Keep reference to the window object */
let win;

/**
 * Create browser window and load a html page
 */
function createWindow () {
    win = new BrowserWindow({width: 800, height: 600});
    win.loadFile('index.html');
    
    /* Dereference the window when closed */
    win.on('closed', function () {
        win = null;
    });
}

app.on('ready', createWindow);

/* Print everything just for now!!! */
ipcMain.on('username', function(e, arg) {
    console.log(arg);
});

ipcMain.on('password', function(e, arg) {
    console.log(arg);
});
