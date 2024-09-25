import { _decorator, Component, director, JsonAsset, sys } from 'cc';
import { ISceneManager } from './Scene/ISceneManager';
import { ScenePoolManagerComponent } from './Scene/ScenePoolManagerComponent';
import { LocationType } from './Enums/LocationType';
// import { AnimationsManagerComponent } from '../Scene/AnimationsManagerComponent';
// import { AudioManagerComponent } from '../Scene/AudioManagerComponent';
// import { DialogManagerComponent } from '../Scene/DialogManagerComponent';
// import { LoaderComponent } from '../Scene/LoaderComponent';
// import { ScenePoolManagerComponent } from '../Scene/ScenePoolManagerComponent';
// import { LocalizationComponent } from '../Text/LocalizationComponent';
// import { TutorialLauncherComponent } from '../TutorialScene/TutorialLauncherComponent';
// import { ISceneManager } from '../Scene/ISceneManager';
// import { AppRoot } from './AppRoot';
// import { Platform } from './ApplicationConfig';
// import { LocationType } from "../Cocos/CCEnums";
// import { BankSceneFactory } from '../BankScene/BankSceneFactory';
// import { BusinessSceneFactory } from '../BusinessScene/BusinessSceneFactory';
// import { CharInfoSceneFactory } from '../CharInfoScene/CharInfoSceneFactory';
// import { CollectionSceneFactory } from '../CollectionScene/CollectionSceneFactory';
// import { CreateCharacterSceneFactory } from '../CreateCharacterScene/CreateCharacterSceneFactory';
// import { DeathSceneFactory } from '../DeathScene/DeathSceneFactory';
// import { ItemsLayerFactory } from '../ItemsScene/ItemsLayerFactory';
// import { JobLayerFactory } from '../ItemsScene/JobLayerFactory';
// import { MetaSceneLayerFactory } from '../MetaScene/MetaSceneLayerFactory';
// import { CardsSceneFactory } from '../MiniGames/Cards/CardsScene/CardsSceneFactory';
// import { SlotSceneFactory } from '../MiniGames/Slots/SlotsScene/SlotSceneFactory';
// import { X2MoneySceneFactory } from '../MiniGames/X2Money/X2MoneySceneFactory';
// import { OffersLayerFactory } from '../OffersScene/OffersLayerFactory';
// import { QuestsSceneFactory } from '../QuestScene/QuestsSceneFactory';
// import { StoreLayerFactory } from '../StoreScene/StoreLayerFactory';
// import { WelfareLayerFactory } from '../WelfareScene/WelfareLayerFactory';
// import { NameConfig, SettingsConfig } from '../Settings/SettingsConfig';
// import { StoreJsonConfig } from '../Store/StoreConfig';
// import { OfflineTimer } from './Timers';
// import { BackgroundManagerComponent } from '../Scene/BackgroundManagerComponent';

const { ccclass, property,uniquelyReferenced } = _decorator;

@ccclass('GameManagerComponent')
@uniquelyReferenced
export class GameManagerComponent extends Component 
{
    @property(JsonAsset) settingsFile:JsonAsset = null!
    @property(JsonAsset) storeFile:JsonAsset = null!
    @property(JsonAsset) namesFile:JsonAsset = null!
    
    private _scene!:ISceneManager
    // private _dialog!:DialogManagerComponent
    // private _animations!:AnimationsManagerComponent
    // private _backgroundManager!:BackgroundManagerComponent
    // private _soundManager!:AudioManagerComponent
    // private _loader!:LoaderComponent
    // private _localizationComponent!:LocalizationComponent
    // private _tutorLauncher!:TutorialLauncherComponent

    protected onLoad(): void {
        director.addPersistRootNode(this.node);
          
        this._animations = this.getComponent(AnimationsManagerComponent)!;
        let scene = this.getComponent(ScenePoolManagerComponent)!;
        this._scene = scene
        this._soundManager = this.getComponent(AudioManagerComponent)!;

        AppRoot.getInstance.Init(
            sys.os == sys.OS.IOS ? Platform.Ios : sys.os == sys.OS.ANDROID ? Platform.Android : Platform.Editor,
            this._scene,
            this._animations,
            this._soundManager,
            timer,
            <SettingsConfig>this.settingsFile.json,
            <StoreJsonConfig>this.storeFile.json,
            <NameConfig>this.namesFile.json
        )
        AppRoot.getInstance.onLoad()

        scene.AddLocation(LocationType.LoadingScene       ,"Prefabs/LoadingScene"                                  ,0 )
        scene.AddLocation(LocationType.StartScene         ,"Prefabs/StartScene"                                    ,0 )
        scene.AddLocation(LocationType.GameScene          ,"Prefabs/MainScene/MainScene"                           ,1 )
        scene.AddLocation(LocationType.ScoreScene         ,"Prefabs/IntroOutro/IntroLayer"                         ,2 )

    }
}

