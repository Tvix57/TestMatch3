import { _decorator, Button, CCString, Component} from 'cc';
import {  LocationType } from '../Enums/LocationType';
import { AppRoot } from '../Application/AppRoot';
const { ccclass, property,requireComponent } = _decorator;

@ccclass('TransferComponent')
@requireComponent(Button)
export class TransferComponent extends Component {
    @property({type: LocationType})
    toLocation:LocationType = LocationType.End

    @property(CCString)
    param:string = ""

    start() {
        this.node.on(Button.EventType.CLICK,()=>{
            let transfer = AppRoot.getInstance.ResolveSceneManager()
            transfer?.Transfer(this.toLocation,this.param)
        })
    }
}

