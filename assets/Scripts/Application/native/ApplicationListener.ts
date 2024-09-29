import { Game, game } from "cc";
import { AbstractDispatcher } from "../../Utils/Dispatcher";
import { IApplicationHandler } from "../AppDevice";

export class ApplicationListener extends AbstractDispatcher<IApplicationHandler>
{
    constructor(){ 
        super()
        game.on(Game.EVENT_RESUME,this.OnResume,this)
        game.on(Game.EVENT_PAUSE,this.OnPause,this)
        game.on(Game.EVENT_CLOSE,this.OnExit,this)
    }
    private OnResume(){
        this._dispatcher.Post((h)=>h.OnResumeApplication())
    }
    private OnPause(){
        this._dispatcher.Post((h)=>h.OnPauseApplication())
    }
    private OnExit(){
        this._dispatcher.Post((h)=>h.OnExitApplication())
    }
}   