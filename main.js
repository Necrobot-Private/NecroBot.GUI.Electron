const electron = require('electron')
// Module to control application life + native browser window + autoUpdater
const {
	app,
	BrowserWindow,
	autoUpdater
} = electron

const path = require('path')
const url = require('url')
const feedURL = 'https://github.com/Necrobot-Private/NecroBot/releases';

// START UPDATE EVENT - Check for Updates on Launch
autoUpdater.setFeedURL(feedURL);

if (handleSquirrelEvent()) {
	// squirrel event handled and app will exit in 1000ms, so don't do anything else
	return;
}

autoUpdater.addListener("update-downloaded", function(event, releaseNotes, releaseName, releaseDate, updateURL) {
	dialog.showMessageBox({
		type: 'info',
		title: 'Update has been Completed',
		buttons: ['Restart now', 'Later'],
		message: 'Version ' + releaseName + ' has been downloaded, Would you like to restart?'
	}, function(buttonIndex) {
		if (buttonIndex == 0) {
			autoUpdater.quitAndInstall();
		}
	});
});

function handleSquirrelEvent() {
	if (process.argv.length === 1) {
		return false;
	}

	const ChildProcess = require('child_process');
	const path = require('path');

	const appFolder = path.resolve(process.execPath, '..');
	const rootAtomFolder = path.resolve(appFolder, '..');
	const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));
	const exeName = path.basename(process.execPath);

	const spawn = function(command, args) {
		let spawnedProcess, error;

		try {
			spawnedProcess = ChildProcess.spawn(command, args, {
				detached: true
			});
		} catch (error) {}

		return spawnedProcess;
	};

	const spawnUpdate = function(args) {
		return spawn(updateDotExe, args);
	};

	const squirrelEvent = process.argv[1];
	switch (squirrelEvent) {
		case '--squirrel-install':
		case '--squirrel-updated':
			// Optionally do things such as:
			// - Add your .exe to the PATH
			// - Write to the registry for things like file associations and
			//   explorer context menus

			// Install desktop and start menu shortcuts
			spawnUpdate(['--createShortcut', exeName]);

			setTimeout(app.quit, 1000);
			return true;

		case '--squirrel-uninstall':
			// Undo anything you did in the --squirrel-install and
			// --squirrel-updated handlers

			// Remove desktop and start menu shortcuts
			spawnUpdate(['--removeShortcut', exeName]);

			setTimeout(app.quit, 1000);
			return true;

		case '--squirrel-obsolete':
			// This is called on the outgoing version of your app before
			// we update to the new version - it's the opposite of
			// --squirrel-updated

			app.quit();
			return true;
	}
};
// END UPDATE EVENT

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let captchaWindow

function showCaptchaWindow(captchaUrl) {
	captchaWindow = new BrowserWindow({
		width: 600,
		height: 500,
		show: false,
		webPreferences: {
			nodeIntegration: true,
			webSecurity: true,
			preload: path.resolve(path.join(__dirname, 'scripts/preload.js'))
		}
	})

	captchaWindow.loadURL(captchaUrl)
	captchaWindow.once('ready-to-show', () => {
		captchaWindow.show()
	})
}

function createWindow() {
	// Create the browser window.
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		show: false,
		webPreferences: {
			nodeIntegration: true,
			webSecurity: true,
			preload: path.resolve(path.join(__dirname, 'scripts/preload.js'))
		}
	})

	// and load the index.html of the app.
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'PokeEase-Necrobot-Private/index.html'),
		protocol: 'file:',
		slashes: true
	}))

	// Open the DevTools.
	//mainWindow.webContents.openDevTools()

	// Emitted when the window is closed.
	mainWindow.on('closed', function() {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null
	})

	mainWindow.once('ready-to-show', () => {
		mainWindow.show()
	})
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function() {
	// On OS X it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', function() {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (mainWindow === null) {
		createWindow()
	}
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
