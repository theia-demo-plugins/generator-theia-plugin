/**
 * Generated using theia-plugin-generator
 */ 
import * as theia from '@wiptheia/plugin';
const disposables: theia.Disposable[] = [];

export function doStartThings() {
    const command: theia.Command = {
        id: 'simple-plugin-command',
        label: 'Command from simple plugin'
    };
    disposables.push(
        theia.commands.registerCommand(command, (...args: any[]) => {
            console.log(`>>> Simple plugin command handler was called with arguments: `, args);
        })
    );
}

export function doStopThings(api: typeof theia) {
    while (disposables.length) {
        const disposable = disposables.pop();
        if (disposable) {
            disposable.dispose();
        }
    }
}
