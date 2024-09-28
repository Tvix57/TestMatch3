import { _decorator, Button, Component, Event } from 'cc';
import { AppRoot } from '../Application/AppRoot';
import { IDialogManager } from '../Dialog/IDialogManager';
import { ISceneManager } from './ISceneManager';
const { ccclass, requireComponent } = _decorator;

@ccclass('BackActionComponent')
@requireComponent(Button)
export class BackActionComponent extends Component 
{
    private sceneManager!:ISceneManager
    private dialogManager!:IDialogManager

    protected onLoad(): void {
        this.sceneManager = AppRoot.getInstance.ResolveSceneManager()
        this.dialogManager = AppRoot.getInstance.ResolveDialogManager()
    }

    protected start() {
        this.node.on(Button.EventType.CLICK,this.BackAction,this)
    }

    private BackAction(event: Event, customEventData: string)
    {
        if(!this.dialogManager.CloseDialog()){
            this.sceneManager.TransferBack()
        }
    }
}

