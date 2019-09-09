const electron = require('electron')

const { app, BrowserWindow, ipcMain } = electron;

app.on('ready', () => {
  const janelaPrincipal = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true
		}
	})
  janelaPrincipal.loadURL(`file://${__dirname}/index.html`)
})

ipcMain.on('obterDimensoesDaImagem', () => {})
