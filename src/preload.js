const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('omni', {
  openPanel: () => ipcRenderer.send('open-panel'),
  closePanel: () => ipcRenderer.send('close-panel'),
  quit: () => ipcRenderer.send('quit-app'),
});
