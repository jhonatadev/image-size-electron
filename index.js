const electron = require('electron')
const sizeOf = require('image-size')
const { app, BrowserWindow, ipcMain } = electron;

app.on('ready', () => {
  const janelaPrincipal = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true
		}
	})
  janelaPrincipal.loadURL(`file://${__dirname}/index.html`)
})

ipcMain.on('obterDimensoesDaImagem', (e, path) => {
	sizeOf(path, function(err, dimensions) {
		console.log(`largura: ${dimensions.width}, Altura: ${dimensions.height}`)
	})
})
