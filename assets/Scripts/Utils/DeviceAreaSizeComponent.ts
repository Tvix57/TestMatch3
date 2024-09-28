import { _decorator, Component, find, log, Node, UITransform, warn } from 'cc';
const { ccclass, requireComponent } = _decorator;

@ccclass('DeviceAreaSizeComponent')
@requireComponent(UITransform)
export class DeviceAreaSizeComponent extends Component 
{
    private _deviceAreaNode!:Node

    protected onLoad(): void {
        let area = find("Canvas/DeviceArea");
        if( area == null){
            warn("Canvas/DeviceArea not found")
            log("Canvas/DeviceArea not found")
        }
        else{
            this._deviceAreaNode = area!
        }
    }

    start() {
        let transfom = this.getComponent(UITransform)!
        transfom.setContentSize(this._deviceAreaNode.getComponent(UITransform)!.contentSize)
    }
}

