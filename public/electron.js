const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

const mainWindow = () => {
  const window = new BrowserWindow({
    width: 1080,
    height: 720,
    webPreferences: {
      // eslint-disable-next-line no-undef
      preload: path.join(__dirname) + '/middleware/preload.js',
    },
  })

  ipcMain.on('test', (event, data) => console.log(data))

  window.loadURL('http://localhost:3001')
}

app.whenReady().then(() => {
  mainWindow()
})
