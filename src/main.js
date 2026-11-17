const { app, BrowserWindow, screen, ipcMain } = require('electron');
const path = require('path');

let edgeWindow;
let panelWindow;

function boundsForDisplay(display) {
  const { workArea } = display;
  const tabWidth = 42;
  const tabHeight = 176;
  return {
    x: workArea.x + workArea.width - tabWidth,
    y: workArea.y + Math.round((workArea.height - tabHeight) / 2),
    width: tabWidth,
    height: tabHeight,
  };
}

function createEdgeWindow() {
  const display = screen.getPrimaryDisplay();
  edgeWindow = new BrowserWindow({
    ...boundsForDisplay(display),
    frame: false,
    transparent: true,
    resizable: false,
    movable: false,
    minimizable: false,
    maximizable: false,
    skipTaskbar: true,
    alwaysOnTop: true,
    focusable: true,
    hasShadow: false,
    webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true, nodeIntegration: false },
  });
  edgeWindow.setAlwaysOnTop(true, 'floating');
  edgeWindow.loadFile(path.join(__dirname, 'edge.html'));
}

function createPanel() {
  if (panelWindow && !panelWindow.isDestroyed()) { panelWindow.focus(); return; }
  const display = screen.getPrimaryDisplay();
  const { workArea } = display;
  panelWindow = new BrowserWindow({
    x: workArea.x + workArea.width - 410,
    y: workArea.y + 24,
    width: 390,
    height: workArea.height - 48,
    frame: false,
    roundedCorners: true,
    backgroundColor: '#101216',
    alwaysOnTop: true,
    show: false,
    webPreferences: { contextIsolation: true, nodeIntegration: false },
  });
  panelWindow.loadFile(path.join(__dirname, 'panel.html'));
  panelWindow.once('ready-to-show', () => panelWindow.show());
  panelWindow.on('closed', () => { panelWindow = null; });
}

app.whenReady().then(() => {
  createEdgeWindow();
  screen.on('display-metrics-changed', () => {
    if (edgeWindow && !edgeWindow.isDestroyed()) edgeWindow.setBounds(boundsForDisplay(screen.getPrimaryDisplay()));
  });
});

ipcMain.on('open-panel', createPanel);
ipcMain.on('close-panel', () => panelWindow?.close());
ipcMain.on('quit-app', () => app.quit());
app.on('window-all-closed', (event) => event.preventDefault());
