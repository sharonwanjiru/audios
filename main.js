const electron = require('electron');
const url = require('url');
const path = require('path');

//const { app, BrowserWindow } = electron;
const { app, BrowserWindow } = require('electron');

let mainWindow;

//Listen for app to be ready
app.on('ready', function () {
    //create a new window
    //mainWindow = new BrowserWindow({});
    //Load html file inti the window
    function createWindow () {
        const mainWindow = new BrowserWindow({
          width: 800,
          height: 600
        })
        mainWindow.setMenu(null) 
        mainWindow.loadFile('index.html')
      }
      app.whenReady().then(() => {
        createWindow()
      
        app.on('activate', function () {
          if (BrowserWindow.getAllWindows().length === 0) createWindow()
        })
      })
      
      
      

    /*mainWindow.loadURL(url.format({
        pathname: path.join(_dirname, 'mainWindow.html'),
        protol: 'file',
        slashes: true
    }))
    ;*/
})
