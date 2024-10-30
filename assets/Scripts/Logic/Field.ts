import { BallColor } from "../Enums/BallColor";
import { GameState } from "../Session/GameState";
import { AbstractDispatcher } from "../Utils/Dispatcher";
import { FieldController } from "./FieldController";
import { FieldGenerator } from "./FieldGenerator";
import { FieldListener } from "./FieldListener";
import { FieldManager } from "./FieldManager";
import { GameStatsInfo } from "./GameStatsInfo";

import { log } from "cc";


export interface IFieldHandler {
    NewGame(name: string): void
    NewScore?(score: number): void
    EndGame(info: GameStatsInfo): void
    UpdateField?(field: Array<Array<BallColor>>, callback?: () => void): void
}

export class Field extends AbstractDispatcher <IFieldHandler> {
    private fieldGenerator:FieldGenerator
    private fieldManager:FieldManager
    private fieldListener:FieldListener
    private fieldController:FieldController

    constructor(
        private _state:GameState,
        private field:Array<Array<BallColor>>) {
        super()
        
        this.fieldGenerator = new FieldGenerator(this.field)
        this.fieldManager = new FieldManager(this.field)
        this.fieldListener = new FieldListener(this.field)
        this.fieldController = new FieldController(this.field)

        if (this.field.length == 0) {
            this.fieldGenerator.GenerateNewField()
        }
    }

    GetField(): Array<Array<BallColor>> {
        return this.field
    }

    OnBallClick(coord: {x: number, y: number}) {
        const addScore = this.fieldManager.CheckFromCoord(coord)
        if (addScore.length != 0) {
            this.addScore(addScore.length)
            this.fieldController.RemoveFromCoord(addScore)
            this._dispatcher.Post((h)=>h.UpdateField?.([...this.field], this.dropDownBalls.bind(this)))
        } 
    }

    private dropDownBalls() {
        this.fieldController.DropDownBalls()
        this._dispatcher.Post((h)=>h.UpdateField?.([...this.field], this.checkEndGame.bind(this)))
    }

    private checkEndGame() {
        log("checkEndGame")
        if (!this.fieldListener.CheckAvailableOption()) { //// check available shuffle
            this._dispatcher.Post((h)=>h.EndGame({name: this._state.name, score: this._state.score}))
        }
    }

    private addScore(score: number) {
        this._state.score += score
        this._dispatcher.Post((h)=>h.NewScore?.(this._state.score))
    }
}