import { AnsverDialogComponent } from "../Dialog/AnsverDialogComponent";
import { DialogFactory } from "../Dialog/DialogFactory";
import { LocationType } from "../Enums/LocationType";
import { IFieldHandler } from "../Logic/Field";
import { GameStatsInfo } from "../Logic/GameStatsInfo";
import { ISceneManager } from "../Scene/ISceneManager";
import { GameLogic } from "./GameLogic";

export type GameoverConfig = {
    lifeExtendBy:number,
    welfareIncreaseBy:number
}

export class GameoverListener implements IFieldHandler
{

    private _dialogFactory = new DialogFactory("Prefabs/Dialog/EndDialog");
    constructor(
        private _gameLogic:GameLogic,
        private _sceneManager:ISceneManager
    ) {
        this._gameLogic.ResolveField().AddHandler(this)
    }

    NewGame(name: string): void {}

    EndGame(info: GameStatsInfo): void {
        this.showEndDialog()
    }

    private showEndDialog() {
        this._dialogFactory.CreateDialog().then((dialog) => {
            dialog.getComponent(AnsverDialogComponent)!.SetHandler((isAccept:boolean) => {
                if (isAccept) { 
                    this._sceneManager.Transfer(LocationType.StartScene)
                } else {
                    this._sceneManager.Transfer(LocationType.ScoreScene)
                }
            })
        })
    }
}
