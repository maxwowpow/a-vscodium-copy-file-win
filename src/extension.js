const vscode = require('vscode');
const AmathronUtilClipboardWin = require('@amathron/copy-file-to-clipboard-win');

const dbg = false;

dbg && console.log('AMATHRON_SCRIPT_ROOT');

// ... MAC and LINUX specific code ...

function activate(context) {
    const vsCommands = vscode.commands;
    const vsWindow = vscode.window;

    dbg && console.log('Extension "amathron.copyfile" active.');

    const subscriptions = context.subscriptions;

    let disposable = vsCommands.registerCommand('amathron.copyfile.copyfile', async (uri) => {
        dbg && console.log('amathron.copyfile.copyfile TRIGGERED');
        try {
            const message = await AmathronUtilClipboardWin.copyFileToClipboardAsync([uri.fsPath]);
            vsWindow.showInformationMessage(message);
        } catch (error) {
            if (error instanceof Error) {
                vsWindow.showErrorMessage(error.message);
            } else {
                console.error(error);
            }
        }
    });

    subscriptions.push(disposable);
}

function deactivate(context) {
    const subscriptions = context.subscriptions;
    // Clean up, remove subscriptions, etc.
}

module.exports = {
    activate,
    deactivate
};
