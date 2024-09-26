import { GameLogic } from "./GameLogic";
import { GameState } from "./GameState";
import { GameoverListener } from "./GameoverListener";
import { ApplicationState } from "../Save/State";
import { SaveDispatcher } from "../Save/SaveDispatcher";
import { GameSaveListener } from "./GameSaveListener";
import { SessionDeviceListener } from "./SessionDeviceListener";
import { ISceneManager } from "../Scene/ISceneManager";
import { AppDevice } from "../Application/AppDevice";
import { IAppTimer } from "../Application/IAppTimer";

export class GameContext {
    private _logic: GameLogic | null = null;
    private _state!: GameState;
    private _gameoverListener: GameoverListener | null = null;
    private _saveListener!: GameSaveListener;
    private _sessionDeviceListener!:SessionDeviceListener
    private isGameActive = false

    constructor(
        private sceneManager: ISceneManager,
        private device: AppDevice,
    ) {}

    CreateGame(timer: IAppTimer,
               saveDisp: SaveDispatcher,
               state: ApplicationState
    ){
        this.isGameActive = true
        this._state = state.gameState!;
        this._logic = new GameLogic(timer, this._state);
        
        // this._gameoverListener = new GameoverListener(this._logic);

        // this._saveListener = new GameSaveListener(saveDisp, this._logic, this.device, state);
       
        this._sessionDeviceListener = new SessionDeviceListener(this.device,this._logic)
    }

    FinishGame() {
        this._state.isFinished = true
    }
    ClearGame(){
        this._saveListener.ManualSave()
        this._logic?.Finish();
        this._logic = null;
        this._gameoverListener = null;
        this.isGameActive = false;
        this._sessionDeviceListener.RemoveHandler()
        this._saveListener.RemoveHandler()
        this.sceneManager.RemoveAll()
    }

    IsGameActive(){ 
        return this.isGameActive 
    }

    ResolveGame() {
        return this._logic!;
    }
    ResolveState() {
        return this._state;
    }
}
