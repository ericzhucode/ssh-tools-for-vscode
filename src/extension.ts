import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Start to activate "ssh tools" extension!');

	const disposable = vscode.commands.registerCommand('sshTool.openConnectTerminal', () => {
		const ipAddress = "192.168.142.129";
		const username = "eric";
		const terminal = vscode.window.createTerminal(`${ipAddress}-ssh-terminal`);
		terminal.show();
		terminal.sendText(`ssh ${username}@${ipAddress}`);
		terminal.sendText(`z19970510`, false);
	});

	context.subscriptions.push(disposable);
}
