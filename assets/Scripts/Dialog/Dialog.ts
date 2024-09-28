/**
 * 
 * Dialog.ts
 * db://assets/Scripts/Scene/Dialog.ts
 *
 */

import { IDialogManager } from './IDialogManager';

export class Dialog {
    constructor(private _dialogComponent:IDialogManager){
        
    }

    protected CloseDialog()
    {
        this._dialogComponent.CloseDialog()
    }
}