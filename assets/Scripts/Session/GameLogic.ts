import { GameState } from "./GameState"
import { GameStats } from "../Logic/GameStatsInfo"
import { Field } from "../Logic/Field"

export class GameLogic
{
    private _field: Field
    private _gameStats:GameStats;

    constructor( private state:GameState) {
        this._field = new Field(state.isFinished, state, state.field)
        this._gameStats = new GameStats(this._field, state.gameStats)
    }

    ResolveField() { return this._field }
    
    ResolveGameStats() { return this._gameStats }

    GetName():string { return this.state.name }

    WillSave(currentState:GameState) {
        currentState.field = this._field.GetField();
        currentState.gameStats = this._gameStats.GetData();
    }
}