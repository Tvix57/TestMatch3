import { GameContext } from '../Session/GameContext';
import { AppAudio } from './AppAudio';
import { AppDevice } from './AppDevice';
import { AppState } from './AppState';
import { Platform } from './../Enums/ApplicationConfig';
import { ISceneManager } from '../Scene/ISceneManager';
import { IAudioManager } from './ApplicationInterfaces';
import { IAppTimer } from './IAppTimer';


export class AppRoot 
{
    private _gameContext!:GameContext
    private _scene!:ISceneManager
    private _soundManager!:IAudioManager

    private _sound!:AppAudio
    private _device!:AppDevice
    private _saveState!:AppState
    private _timer!:IAppTimer
    private _platform!:Platform

    private static instance: AppRoot;
    private constructor() {}
    public static get getInstance(): AppRoot {
        if (this.instance == null) {
            this.instance = new AppRoot();
        }
        return this.instance;
    }

    Init(platform:Platform,
         scene:ISceneManager,
         soundManager:IAudioManager,
         timer:IAppTimer
    ){
        this._platform = platform
        this._scene = scene
        this._soundManager = soundManager
        this._timer = timer
    }

    onLoad() {
        this._device = new AppDevice(this._platform)                                           
        this._sound = new AppAudio(this._soundManager);
        this._gameContext = new GameContext(this._scene, this._device);
    }
    
    ResolveGameContext() { return this._gameContext }
    ResolveSceneManager():ISceneManager { return this._scene }
    ResolveSound() { return this._sound }
    ResolveDevice() { return this._device }
    ResolveTimer() { return this._timer }
    ResovleSaveState() { return this._saveState }
}

