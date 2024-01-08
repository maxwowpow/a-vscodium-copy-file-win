
//import * as vscode from 'vscode';
import { vscode } from '#vscode';
import AmathronUtilWinClipboard from './AmathronUtilWinClipboard.mjs';

const dbg = false;

dbg && console.log('AMATHRON_SCRIPT_ROOT');

/*
// MAC
require('child_process').exec(
	'echo "test foo bar" | pbcopy',

	function(err, stdout, stderr) {
		console.log(stdout); // to confirm the application has been run
	}
);
// LINUX
`apt get install xclip`
*/

/**
 * @param {vscode.ExtensionContext} context
 */
export function activate(context) {
	const
		vsCommands = vscode.commands,
		vsWindow = vscode.window;

	dbg && console.log('Extension "amathron.copyfile" active.');

	const
		subscriptions = context.subscriptions;

	//uri: vscode.Uri
	let disposable = vsCommands.registerCommand('amathron.copyfile.copyfile', async (uri) => {
		dbg && console.log('amathron.copyfile.copyfile TRIGGERED');
		try {
			// not supported by the api currently
			//const filePaths = uris.map(uri => uri.fsPath);
			const message = await AmathronUtilWinClipboard.copyFileToClipboardAsync([uri.fsPath]);
			
			vsWindow.showInformationMessage(message);
		} catch (error) {
			vsWindow.showErrorMessage(error);
		}
	});

	subscriptions.push(disposable);
}

// function deactivate() { }

// module.exports = {
// 	activate,
// 	deactivate
// }
