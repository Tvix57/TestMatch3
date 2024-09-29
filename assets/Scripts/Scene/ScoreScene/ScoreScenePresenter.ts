import { GameStats } from "../../Logic/GameStatsInfo";
import { ScoreSceneComponent } from "./ScoreSceneComponent";

export class ScoreScenePresenter { 
    constructor(
        private view: ScoreSceneComponent,
        private context: GameStats) {}

    LoadScores() {
        this.context.GetData().forEach((info) => {
            this.view.AddScore(info.name, info.score);
        })
    }
}