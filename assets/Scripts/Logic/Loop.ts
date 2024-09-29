import { IAppTimer, IAppTimerHandler } from "../Application/IAppTimer"
import { AbstractDispatcher } from "../Utils/Dispatcher"

export enum TimeSpeed {
    Pause,
    Play,
    SpeedUp
}

export interface ILoopHandler
{
    OnDayChange?() : void
    OnTimeSpeedChange?(newValue:TimeSpeed):void
}

export class Loop extends AbstractDispatcher<ILoopHandler> implements IAppTimerHandler
{
    private _speedType:TimeSpeed
    private _pauseCount:boolean
    private _btnPause:boolean
    
    constructor(timer:IAppTimer){
        super()
        timer.AddHandler(this)
        this._speedType = TimeSpeed.Play
        this._pauseCount = false
        this._btnPause = false
    }

    Tick(): void {
        if(this.GetTimeSpeed() === TimeSpeed.Play){
            this._dispatcher.Post((arg)=>arg.OnDayChange?.())
        }
    }

    SetBtnPause(isPause:boolean) {
        this._btnPause = isPause
        this._dispatcher.Post((h:ILoopHandler)=>h.OnTimeSpeedChange?.(this.GetTimeSpeed()))
    }

    SetPause(isPause:boolean) {
        this._pauseCount = isPause
        this._dispatcher.Post((h:ILoopHandler)=>h.OnTimeSpeedChange?.(this.GetTimeSpeed()))
    }
    SetSpeedUp(isSpeedup:boolean) {
        this._speedType = isSpeedup ? TimeSpeed.SpeedUp : TimeSpeed.Play
        this._dispatcher.Post((h:ILoopHandler)=>h.OnTimeSpeedChange?.(this.GetTimeSpeed()))
    }

    GetPause() { return this._pauseCount }
    GetBtnPause() { return this._btnPause }
    
    GetTimeSpeed():TimeSpeed {
        if(this._pauseCount || this._btnPause) return TimeSpeed.Pause
        return this._speedType
    }
}