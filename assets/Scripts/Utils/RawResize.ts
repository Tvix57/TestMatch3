import { _decorator, Component, Enum, Node, UITransform } from 'cc';
const { ccclass, requireComponent,executeInEditMode, property } = _decorator;

export enum ResizeType {
    FIT,
    FILL
}Enum(ResizeType)

export enum ResizeWay {
    ByScale,
    ByContentSize
}Enum(ResizeWay)

@ccclass('RawResize')
@executeInEditMode
@requireComponent(UITransform)
export class RawResize extends Component 
{
    @property({type: ResizeType})
    resizeType: ResizeType = ResizeType.FIT

    @property({type: ResizeWay})
    resizeWay: ResizeWay = ResizeWay.ByScale

    @property({type: UITransform, tooltip: 'Target node to resize. Parent or DeepParen ONLY'})
    target: UITransform | null = null

    private _nodeUITransform!:UITransform
    private _parentUITransform!:UITransform

    protected onLoad(): void {
        this._nodeUITransform = this.getComponent(UITransform)!
        if (this.target && this.node.isChildOf(this.target.node)) {
            this._parentUITransform = this.target
        } else {
            this._parentUITransform = this.node.parent!.getComponent(UITransform)!
        }
        this.node.on(Node.EventType.SIZE_CHANGED,this.Update,this)
        this.node.parent?.on(Node.EventType.SIZE_CHANGED,this.Update,this)
        this.Update()
    }

    protected onDisable(): void {
        this.node.parent?.off(Node.EventType.SIZE_CHANGED)
        this.node.off(Node.EventType.SIZE_CHANGED)
    }

    ForceUpdate() {
        this.Update()
    }

    private Update() {
        if (this.checkSize()) {
            const scale = this.getNewScale()
            if (this.resizeWay == ResizeWay.ByScale) {
                this.node.setScale(scale,scale)
            } else {
                this._nodeUITransform.setContentSize(this._nodeUITransform.width * scale, this._nodeUITransform.height * scale)
            }
        }
    }

    private checkSize() : boolean {
        let result = false;
        if (this.resizeType == ResizeType.FILL) {
            result = this._nodeUITransform.width < this._parentUITransform.width ||
                     this._nodeUITransform.height < this._parentUITransform.height
        } else {
            result = this._nodeUITransform.width > this._parentUITransform.width ||
                     this._nodeUITransform.width < this._parentUITransform.width ||
                     this._nodeUITransform.height < this._parentUITransform.height ||
                     this._nodeUITransform.height > this._parentUITransform.height
        }
        return result
    }

    private getNewScale() : number {
        if (this.resizeType == ResizeType.FILL) {
            return Math.max(this._parentUITransform.height / this._nodeUITransform.height,
                            this._parentUITransform.width / this._nodeUITransform.width )
        } else {
            return Math.min(this._parentUITransform.height / this._nodeUITransform.height, 
                            this._parentUITransform.width / this._nodeUITransform.width )
        }
    }
}