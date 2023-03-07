const { app, BrowserWindow } = require('electron')

const mainWindow = () => {
  const window = new BrowserWindow({
    width: 1080,
    height: 720,
  })

  window.loadURL('http://localhost:3000')
}

app.whenReady().then(() => {
  mainWindow()
})
