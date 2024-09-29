import { _decorator, Button, Component, Node } from 'cc';
import { IDialogManager } from './IDialogManager';
import { AppRoot } from '../Application/AppRoot';
import { IAnsverHandler } from './IAnsverHandler';
import { ISceneManager } from '../Scene/ISceneManager';
const { ccclass, property } = _decorator;

@ccclass('AnsverDialogComponent')
export class AnsverDialogComponent extends Component implements IAnsverHandler 
{
    @property(Button)
    protected rejectBtn?:Button

    @property(Button)
    protected acceptBtn?:Button
    
    private _handler?:(isAccept:boolean)=>void

    private dialogManager!:IDialogManager

    protected onEnable(): void {
        this.dialogManager = AppRoot.getInstance.ResolveDialogManager()

        this.rejectBtn?.node.on(Button.EventType.CLICK,this.OnRejectPressed,this)
        this.acceptBtn?.node.on(Button.EventType.CLICK,this.OnAcceptPressed,this)
    }

    private BackAction() {
        this.dialogManager.CloseDialog()
    }

    SetHandler(cb?: (isAccept: boolean) => void): void {
        this._handler = cb
    }

    async OnAcceptPressed()
    {
        await this._handler?.(true)
        this.BackAction()
    }

    async OnRejectPressed(){
        await this._handler?.(false)
        this.BackAction()
    }
}
