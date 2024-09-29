import { _decorator, Animation, AnimationComponent, AnimationState, Component, Node } from 'cc';
import { Dispatcher } from '../Utils/Dispatcher';
import { IDialogManager, IDialogHandler } from './IDialogManager';
const { ccclass, property } = _decorator;

class DialogEntry 
{
    readonly node: Node;

    constructor(node: Node) {
        this.node = node;
    }
}

@ccclass('DialogManagerComponent')
export class DialogManagerComponent extends Component implements IDialogManager
{
    @property(Node)
    dialogNode:Node=null!

    private _dispatcher:Dispatcher<IDialogHandler> = new Dispatcher
    private _dialogStack:Array<DialogEntry> = []
    private _isShow : boolean = false

    OpenDialog(node:Node) {
        this._dialogStack.push(new DialogEntry(node))
        this._dispatcher.Post((h)=>h.WillDialogShow?.())
    }

    CloseDialog():boolean {
        if(!this._isShow || this._dialogStack.length == 0) return false
        const component = this._dialogStack[0].node.getComponent(AnimationComponent)
        component?.play("Close")
        component?.on(Animation.EventType.FINISHED, this.onAnimationEvent, this)
        return true
    }

    CloseAllDialogs() {
        this.dialogNode.removeAllChildren()
        this._dialogStack.length = 0
        this._isShow = false
    }

    onAnimationEvent(type: Animation.EventType, state: AnimationState) {
        this.dialogNode.removeAllChildren()
        this._dialogStack.shift()
        this._isShow = false
    }

    protected update(dt: number): void {
        if(!this._isShow && this._dialogStack.length > 0){
            this._isShow = true
            this.dialogNode.addChild(this._dialogStack[0].node)
            this._dialogStack[0].node.getComponent(AnimationComponent)?.play("Open")
            this._dispatcher.Post((h)=>h.OnDialogShow?.())
        }
    }

    AddHandler(arg: IDialogHandler): void {
        this._dispatcher.AddObserver(arg)
    }

    RemoveHandler(arg: IDialogHandler): void {
        this._dispatcher.RemoveObserver(arg)
    }

    RemoveAll(): void {
        this._dispatcher.RemoveAll()
    }
}

