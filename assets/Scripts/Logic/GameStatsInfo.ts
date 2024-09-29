import { BallColor } from "../Enums/BallColor"
import { Field, IFieldHandler } from "./Field"

export type GameStatsInfo = { 
    name: string,
    score: number,
}

export class GameStats implements IFieldHandler {
    constructor(
        private field: Field,
        private stats: Array<GameStatsInfo>
    ) {
        field.AddHandler(this)
    }

    NewGame(name: string): void {}

    EndGame(info: GameStatsInfo): void {
        this.stats.push(info)
    }

    GetData(): Array<GameStatsInfo> {
        return this.stats
    }
}