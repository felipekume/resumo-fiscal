const { app, BrowserWindow } = require('electron');
const path = require('path');

function abrirJanela() {
  const win = new BrowserWindow({ width: 1300, height: 900, title: 'Resumo Fiscal', autoHideMenuBar: true });
  win.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(abrirJanela);
app.on('window-all-closed', () => app.quit());
