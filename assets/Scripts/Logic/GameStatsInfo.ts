export type GameStatsInfo = { 
    name: string,
    score: number,
}

export class GameStats {
    constructor(private stats: Array<GameStatsInfo>) {}

    Add(name: string, score: number) {
        this.stats.push({name, score})
    }

    GetData(): Array<GameStatsInfo> {
        return this.stats
    }
}