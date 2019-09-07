const electron = require('electron')

const { app } = electron;

app.on('ready', () => {
  console.log('Aplicação foi criada :)')
})
