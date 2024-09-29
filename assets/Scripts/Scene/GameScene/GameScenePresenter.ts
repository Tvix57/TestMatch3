import { BallColor } from "../../Enums/BallColor";
import { Field, IFieldHandler } from "../../Logic/Field";
import { GameStatsInfo } from "../../Logic/GameStatsInfo";
import { GameSceneComponent } from "./GameSceneComponent";

export class GameScenePresenter implements IFieldHandler {

    constructor(
        private view: GameSceneComponent,
        private _logic: Field
    ) {
        this._logic.AddHandler(this)
    }

    NewGame(name: string): void {
        this.view.SetName(name)
    }

    NewScore?(score: number): void {
        this.view.UpdateScore(score.toString())
    }

    UpdateField?(field: Array<Array<BallColor>>, fromOutside?: boolean): void {
        
    }

    EndGame(info: GameStatsInfo): void {}

    LoadData() {

    }
}