'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  let mainWindow = new BrowserWindow({width: 400, height: 500});

  // by default Electron loads the static file
  var url = 'file://' + __dirname + '/index.html';

  // when developing it can be useful for Electron to get the
  // the latest code from the webpack-dev-server
  if (process.env.ENV == 'dev') {
    url = 'http://localhost:8080/';
  }

  mainWindow.loadURL(url);

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
