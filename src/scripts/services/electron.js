angular.module('torrentApp').factory("electron", [function() {
    var o = {};

    // Get the Electron remote
    const remote        = require('electron').remote;

    // Directly accesible modules
    o.ipc               = require('electron').ipcRenderer;
    o.shell             = require('electron').shell;

    //Remote moudles from main process
    o.remote            = remote;
    o.app               = remote.app;
    o.browserWindow     = remote.BrowserWindow;
    o.clipboard         = remote.clipboard;
    o.dialog            = remote.dialog;
    o.menu              = remote.Menu;
    o.menuItem          = remote.MenuItem;
    o.nativeImage       = remote.nativeImage;
    o.powerMonitor      = remote.powerMonitor;
    o.protocol          = remote.protocol;
    o.screen            = remote.screen;
    o.tray              = remote.shell;
    o.capturer          = remote.capturer;
    o.autoUpdater       = remote.autoUpdater;

    // Custom resources
    o.config            = remote.require('./lib/config.js');
    o.updater           = remote.require('./lib/update.js');
    o.is                = remote.require('electron-is');
    o.program           = remote.require('yargs').argv;
    o.torrents          = remote.require('./lib/torrents.js');
    o.themes            = remote.require('./lib/themes.js');

    // Return object
    return o;
}])