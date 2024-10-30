import { BallColor } from "../../Enums/BallColor";
import { Field, IFieldHandler } from "../../Logic/Field";
import { GameStatsInfo } from "../../Logic/GameStatsInfo";
import { ApplicationState } from "../../Save/State";
import { GameSceneComponent } from "./GameSceneComponent";

export class GameScenePresenter implements IFieldHandler {

    private animationPromise?:Promise<void>
    constructor(
        private view: GameSceneComponent,
        private _logic: Field,
        private _state: ApplicationState
    ) {
        this._logic.AddHandler(this)
    }

    NewGame(name: string): void {
        this.view.SetName(name)
    }

    NewScore?(score: number): void {
        this.view.UpdateScore(score.toString())
    }

    UpdateField?(field: Array<Array<BallColor>>, callback?: () => void): void {
        this.playAnimation(field, callback)
    }

    EndGame(info: GameStatsInfo): void {}

    LoadData() {
        this.view.ShowNewField(this._logic.GetField())
        this.view.UpdateScore(this._state.gameState?.score.toString()??'0')
        this.view.SetName(this._state.gameState?.name??'')
    }

    OnBallClick(coord: {x: number, y: number}) {
        this._logic.OnBallClick(coord)
    }

    SaveCurrentGame() {
        /////
    }

    private playAnimation(field: Array<Array<BallColor>>, callback?: () => void) {
        if (field.some(x => x.some(y => y == BallColor.NONE))) { 
            this.view.RemoveBalls(field, callback)
        } else {
            this.view.DropDownBalls(field, callback)
        }
    }
}