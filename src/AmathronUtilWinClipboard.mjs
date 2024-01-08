import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

class AmathronUtilWinClipboard {
    static #psScriptName = './amathron.set-file-to-clipboard.ps1';
    static #__dirname = path.dirname(fileURLToPath(import.meta.url));
    static #psScriptPath = path.join(AmathronUtilWinClipboard.#__dirname, AmathronUtilWinClipboard.#psScriptName);

    static async copyFileToClipboardAsync(filePaths) {
        const filePathsString = filePaths.join(',');
        return new Promise((resolve, reject) => {
            exec(`powershell -File "${AmathronUtilWinClipboard.#psScriptPath}" -filePaths "${filePathsString}"`, (error, stdout, stderr) => {
                if (error) {
                    reject(`Error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    reject(`Stderr: ${stderr}`);
                    return;
                }
                resolve('File copied to clipboard');
            });
        });
    }
}

export default AmathronUtilWinClipboard;
