import { AppDevice, IApplicationHandler } from "../Application/AppDevice";
import { GameLogic } from "./GameLogic";
import { SaveDispatcher } from "../Save/SaveDispatcher";
import { ISaveListener } from "../Save/SaveInterfaces";
import { ApplicationState } from "../Save/State";

export class GameSaveListener implements ISaveListener,IApplicationHandler
{
    constructor(
        private _saveDisp:SaveDispatcher,
        private _logic:GameLogic,
        private _device:AppDevice,
        private _state:ApplicationState
    ) {
        _saveDisp.AddHandler(this)
        _device.AddHandler(this)
    }
    RemoveHandler(){
        this._saveDisp.RemoveHandler(this)
        this._device.RemoveHandler(this)
    }
    
    WillSave(): void {
        this._logic.WillSave(this._state.gameState!)
    }

    OnPauseApplication(): void { 
        this._saveDisp.Save() 
    }
    
    ManualSave() {
        this._saveDisp.Save()
    }

    OnResumeApplication(): void {}
}