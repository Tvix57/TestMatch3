import { IAppTimer } from "../Application/IAppTimer";
import { GameState } from "../Session/GameState";
import { SaveDispatcher } from "./SaveDispatcher";
import { ISaveListener, IStateSaver } from "./SaveInterfaces";
import { SaveTimerExecutor } from "./SaveTimerExecutor";
import { ApplicationState } from "./State";

export class SaveContext implements ISaveListener
{
    private _timeSaveExecutor:SaveTimerExecutor
    private _state:ApplicationState

    constructor(
        private saver:IStateSaver,
        saveDispatcher:SaveDispatcher,
        timer:IAppTimer
    ) {
        this._timeSaveExecutor = new SaveTimerExecutor(timer,saveDispatcher,60)
        saveDispatcher.AddHandler(this)
        
        this._state = this.saver.LoadState() as ApplicationState
    }
    
    WillSave(): void {}

    DoSave(): void {
        this.saver.SaveState(this._state!)        
    }

    IsFirstLaunch():boolean {
        return this._state?.isFirstLaunch ?? true
    }

    HasGame():boolean {   
        if(this._state) {
            return this._state.HasGame() && !this._state.IsGameFinished()
        }
        return false
    }

    GetCurrentSaveState():ApplicationState {
        return this._state
    }

    CreateNewGameState(name:string):ApplicationState {
        this._state!.gameState = new GameState(name) 
        this.saver.SaveState(this._state!)
        return this._state!
    }
}