import { GameSceneComponent } from "./GameSceneComponent";

export class GameScenePresenter {

    constructor(
        private view: GameSceneComponent,
        // private _logick: GameLogic
    ) {}

    private updateScore() {
        this.view.UpdateScore("0")
    }
}