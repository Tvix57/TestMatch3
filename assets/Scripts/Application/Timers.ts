import { _decorator, Component, macro, Node } from 'cc';
import { Dispatcher } from '../Utils/Dispatcher';
import { IAppTimer, IAppTimerHandler } from './IAppTimer';
const { ccclass } = _decorator;

@ccclass('OfflineTimer')
export class OfflineTimer extends Component implements IAppTimer
{
    private _dispatcher = new Dispatcher<IAppTimerHandler>
    
    start() {
        this.schedule((dt:number)=>this.SchedulerCallback(),1,macro.REPEAT_FOREVER)
    }

    SchedulerCallback(){
        this._dispatcher.Post((h)=>h.Tick())
    }

    IsActive(): boolean { return true }
    GetTime(): Date { return new Date() }
    AddHandler(arg: IAppTimerHandler): void {
        this._dispatcher.AddObserver(arg)
    }
    RemoveHandler(arg: IAppTimerHandler): void {
        this._dispatcher.RemoveObserver(arg)
    }
    RemoveAll(): void {
        this._dispatcher.RemoveAll()
    }
}

