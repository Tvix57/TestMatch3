import { ScoreSceneComponent } from "./ScoreSceneComponent";

export class ScoreScenePresenter { 
    constructor(private view: ScoreSceneComponent) {}

    LoadScores() {
        this.view.AddScore("0", 0); //// TODO
    }
}