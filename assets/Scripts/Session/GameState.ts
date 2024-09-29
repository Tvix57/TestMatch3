import { BallColor } from "../Enums/BallColor";
import { GameStatsInfo } from "../Logic/GameStatsInfo";
import { IState } from "../Save/SaveInterfaces";

interface IGameState
{
    name:string
    score:number
    gameStats: Array<GameStatsInfo>;
    field: Array<Array<BallColor>>;
    isFinished:boolean;
}

export class GameState extends IState
{
    name:string
    score:number
    gameStats:Array<GameStatsInfo>
    field:Array<Array<BallColor>>
    isFinished:boolean

    constructor(
        name?:string,
        score?:number,
        gameStats?:Array<GameStatsInfo>,
        field?:Array<Array<BallColor>>,
        isFinished?:boolean
    ) {
        super()
        this.name = name ?? "";
        this.score = score ?? 0
        this.gameStats = gameStats ?? new Array();
        this.field = field ??new Array();
        this.isFinished = isFinished ?? false
    }

    toJSON() {
        return {
            gameStats:this.gameStats,
            field:this.field,
            isFinished:this.isFinished
        }
    }

    static Load(input: IGameState): GameState {
        return new GameState(
            input.name,
            input.score,
            input.gameStats,
            input.field,
            input.isFinished
        );
    }
}
