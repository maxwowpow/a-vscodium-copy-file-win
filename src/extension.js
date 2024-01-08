/**
 * @param {import('vscode').ExtensionContext} context - The context.
 */
async function activate(context) {
    (await import('./extension.mjs')).activate(context);
  }
  
  module.exports.activate = activate;