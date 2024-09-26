import { _decorator, Component, director, sys } from 'cc';
import { ISceneManager } from './Scene/ISceneManager';
import { ScenePoolManagerComponent } from './Scene/ScenePoolManagerComponent';
import { LocationType } from './Enums/LocationType';
import { AppRoot } from './Application/AppRoot';
import { Platform } from './Application/ApplicationConfig';
import { AudioManagerComponent } from './Scene/AudioManagerComponent';
import { OfflineTimer } from './Application/Timers';

const { ccclass, uniquelyReferenced } = _decorator;

@ccclass('GameManagerComponent')
@uniquelyReferenced
export class GameManagerComponent extends Component 
{   
    private _scene!:ISceneManager
    private _soundManager!:AudioManagerComponent

    protected onLoad(): void {
        director.addPersistRootNode(this.node);
          
        let scene = this.getComponent(ScenePoolManagerComponent)!;
        this._scene = scene
        this._soundManager = this.getComponent(AudioManagerComponent)!;
        const timer = this.node.getComponent(OfflineTimer)!;

        AppRoot.getInstance.Init(
            sys.os == sys.OS.IOS ? Platform.Ios : sys.os == sys.OS.ANDROID ? Platform.Android : Platform.Editor,
            this._scene,
            this._soundManager,
            timer
        )
        AppRoot.getInstance.onLoad()

        scene.AddLocation(LocationType.LoadingScene       ,"Prefabs/LoadingScene" ,0 )
        scene.AddLocation(LocationType.StartScene         ,"Prefabs/StartScene"   ,0 )
        scene.AddLocation(LocationType.GameScene          ,"Prefabs/GameScene"    ,1 )
        scene.AddLocation(LocationType.ScoreScene         ,"Prefabs/ScoreScene"   ,2 )
    }
}

