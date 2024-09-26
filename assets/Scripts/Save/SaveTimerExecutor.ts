import { IAppTimer, IAppTimerHandler } from "../Application/IAppTimer";
import { SaveDispatcher } from "./SaveDispatcher";

export class SaveTimerExecutor implements IAppTimerHandler
{
    private _count:number

    constructor(
        private timer:IAppTimer,
        private saveDispatcher:SaveDispatcher,
        private period:number
    ) {
        timer.AddHandler(this)
        this._count = period
    }
    Tick(): void {
        this._count -= 1
        if(this._count <= 0){
            this.saveDispatcher.Save()
            this._count = this.period
        }
    }
    OnActivate(): void { }
    OnDeactivate(): void { }
}