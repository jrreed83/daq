const {app, BrowserWindow} = require('electron');

let window;

function createWindow() {
    window = new BrowserWindow({width: 800, height: 600});
    window.loadURL(`file://${__dirname}/app/index.html`);
    // Open the DevTools.
    window.webContents.openDevTools()    
    window.on('closed', () => window=null);
}

// App for lifecycle
app.on('ready', createWindow);
app.on('windows-all-closed', () => console.log('windows-all-closed'));