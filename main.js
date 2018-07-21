const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, ipcMain, Menu } = require('electron');

let mainWindow;

//listen for the app to be ready
app.on('ready', function () {
    //create new window
    mainWindow = new BrowserWindow({});
    //load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
    //quit app when closed
    mainWindow.on('closed', function () {
        app.quit();
    });

    //build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //insert menu
    Menu.setApplicationMenu(mainMenu);
})

//Handle create bill window
function createBillWindow() {
    //create new window
    billWindow = new BrowserWindow({
        width: 300,
        height: 200,
        title: 'ChinaTown'
    });
    //load html into window
    billWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'billWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
}

// create menu Template
const mainMenuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Quit',
                accelerator: 'Ctrl+Q',
                click() {
                    app.quit();
                }
            }
        ]
    }
];


