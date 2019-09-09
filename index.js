const electron = require('electron')
const sizeOf = require('image-size')

const { app, BrowserWindow, ipcMain } = electron;
let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true
		},
	})
  mainWindow.loadURL(`file://${__dirname}/index.html`)
})

ipcMain.on('obterDimensoesDaImagem', (e, path) => {
	sizeOf(path, function(err, dimensions) {
		mainWindow.webContents.send('dimensoesDaImagem', dimensions)
	})
})
