const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('pearapps', {
  test: () => {
    ipcRenderer.send('test', 'Hello World')
  },
})
