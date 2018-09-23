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

 var mysql = require('mysql');
 var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'chinatown'
 });

connection.connect(); 
 
function loadmainWindow(){    
}
 
function authenticate(username, password) {
   
    
    connection.query('SELECT * FROM users', function(error, results, fields) {
        let i;
        for(i = 0; i < results.length; i++){
            let rs = results[i];
            
            if(rs.username === username && rs.password === password){
                loadmainWindow();
                //connection.end();
                return;
            } 
        }
        console.log('incorrect credentials');
        //connection.end();
    });
}

ipcMain.on('username', function(event, arg) {
    let username = arg;
    ipcMain.on('password', function(event, arg) {
        let password = arg;
        
        authenticate(username, password);
    });
});

