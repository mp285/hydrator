var app = require('app');
var BrowserWindow = require('browser-window');

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 500});
  //mainWindow.loadURL('file:///Users/ed/Projects/hydrator/index.html');

  var url = 'file://' + __dirname + '/index.html';
  if (process.env.ENV == 'dev') {
    url = 'http://localhost:8080/';
  }
  mainWindow.loadURL(url);

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
