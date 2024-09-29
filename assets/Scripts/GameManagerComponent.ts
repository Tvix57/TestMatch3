import { _decorator, Component, director, sys } from 'cc';
import { ISceneManager } from './Scene/ISceneManager';
import { ScenePoolManagerComponent } from './Scene/ScenePoolManagerComponent';
import { LocationType } from './Enums/LocationType';
import { AppRoot } from './Application/AppRoot';
import { Platform } from './Enums/ApplicationConfig';
import { AudioManagerComponent } from './Scene/AudioManagerComponent';
import { OfflineTimer } from './Application/Timers';
import { DialogManagerComponent } from './Dialog/DialogManagerComponent';

const { ccclass, uniquelyReferenced } = _decorator;

@ccclass('GameManagerComponent')
@uniquelyReferenced
export class GameManagerComponent extends Component 
{   
    private _scene!:ISceneManager
    private _soundManager!:AudioManagerComponent
    private _dialog!:DialogManagerComponent

    protected onLoad(): void {
        director.addPersistRootNode(this.node);
          
        let scene = this.getComponent(ScenePoolManagerComponent)!;
        this._dialog = this.getComponent(DialogManagerComponent)!;
        this._scene = scene
        this._soundManager = this.getComponent(AudioManagerComponent)!;
        const timer = this.node.getComponent(OfflineTimer)!;

        AppRoot.getInstance.Init(
            this.getOS(),
            this._scene,
            this._soundManager,
            timer,
            this._dialog
        )
        AppRoot.getInstance.onLoad()

        scene.AddLocation(LocationType.LoadingScene       ,"Prefabs/LoadingScene"           ,0 )
        scene.AddLocation(LocationType.StartScene         ,"Prefabs/StartScene"             ,1 )
        scene.AddLocation(LocationType.GameScene          ,"Prefabs/GameScene/GameScene"    ,2 )
        scene.AddLocation(LocationType.ScoreScene         ,"Prefabs/ScoreScene/ScoreScene"  ,2 )
    }

    private getOS() : Platform {
        switch (sys.os) {
            case sys.OS.IOS:
                return Platform.Ios;
            case sys.OS.ANDROID:
                return Platform.Android;
            case sys.OS.WINDOWS:
                return Platform.Editor;
            default:
                return Platform.Editor;
        }
    }
}
