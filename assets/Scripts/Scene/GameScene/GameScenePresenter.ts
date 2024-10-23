import { BallColor } from "../../Enums/BallColor";
import { AnimationType, Field, IFieldHandler } from "../../Logic/Field";
import { GameStatsInfo } from "../../Logic/GameStatsInfo";
import { ApplicationState } from "../../Save/State";
import { GameSceneComponent } from "./GameSceneComponent";

export class GameScenePresenter implements IFieldHandler {

    private _animationQueue: Array<() => void> = []

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

    UpdateField?(field: Array<Array<BallColor>>, type?: AnimationType, animationCallback?: () => void): void {
        switch (type) {
            case AnimationType.REMOVE:
                this._animationQueue.push(() => {  
                    this.view.RemoveBalls(field)
                })
                break
            case AnimationType.DropDown:
                this._animationQueue.push(() => {  
                    this.view.DropDownBalls(field)
                })
                break
            case AnimationType.DropDownNew:
                this._animationQueue.push(() => {
                    this.view.ShowNewField(field)
                })
                break
        }
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

    PlayNextAnimation() {
        if (this._animationQueue.length > 0) {
            this._animationQueue.pop()?.()
        }
    }

    SaveCurrentGame() {
        /////
    }
}