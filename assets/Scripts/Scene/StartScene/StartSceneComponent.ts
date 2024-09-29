import { _decorator, Button, Component, director, EditBox } from 'cc';
import { LocationType } from '../../Enums/LocationType';
import { ISceneManager } from '../ISceneManager';
import { AppRoot } from '../../Application/AppRoot';
import { GameFactory } from '../../Session/GameFactory';
import { DialogFactory } from '../../Dialog/DialogFactory';
import { AnsverDialogComponent } from '../../Dialog/AnsverDialogComponent';
const { ccclass, property } = _decorator;

@ccclass('StartSceneComponent')
export class StartSceneComponent extends Component {

    @property(Button)
    private continueBtn!:Button

    @property(Button)
    private leaderboardBtn!:Button

    private _sceneManager!:ISceneManager
    private dialogFactory = new DialogFactory("Prefabs/Dialog/NewGameDialog")
    
    protected onEnable(): void {
        this._sceneManager = AppRoot.getInstance.ResolveSceneManager()
        this.continueBtn.interactable = !AppRoot.getInstance.ResovleSaveState().ResolveSaveContext().IsGameFinished()
        if (AppRoot.getInstance.ResovleSaveState().ResolveSaveContext().HasGame()) {
            new GameFactory(AppRoot.getInstance.ResovleSaveState()).LoadGame()
        }
        if (AppRoot.getInstance.ResovleSaveState().ResolveSaveContext().GetCurrentSaveState().gameState != undefined) {
            this.leaderboardBtn.interactable = AppRoot.getInstance.ResovleSaveState().ResolveSaveContext().GetCurrentSaveState().gameState?.gameStats != undefined
        }
    }

    onContinueClick() {
        this._sceneManager.Transfer(LocationType.GameScene)
    }

    onNewGameClick() {
        this.dialogFactory.CreateDialog().then((dialog) => {
            dialog.getComponent(AnsverDialogComponent)!.SetHandler((isAccept:boolean) => {
                let cmp = dialog.getComponentInChildren(EditBox)
                if (isAccept && cmp && cmp.string.length > 0) {
                    new GameFactory(AppRoot.getInstance.ResovleSaveState()).CreateGame(cmp.string)
                    this._sceneManager.Transfer(LocationType.GameScene)
                }
            })
        })
    }

    onLeaderBoardClick() {
        this._sceneManager.Transfer(LocationType.ScoreScene);
    }

    onExitClick() {
        
    }
}


