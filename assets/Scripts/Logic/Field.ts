import { BallColor } from "../Enums/BallColor";
import { AbstractDispatcher } from "../Utils/Dispatcher";
import { GameStatsInfo } from "./GameStatsInfo";


export interface IFieldHandler {
    NewGame(name: string): void
    NewScore?(score: number): void
    UpdateField?(field: Array<Array<BallColor>>, fromOutside?: boolean): void
    EndGame(info: GameStatsInfo): void
}

export class Field extends AbstractDispatcher <IFieldHandler> {

    readonly minCombinationLength = 3;
    readonly garanteedStartCombinations = 4;
    readonly fieldSize = 20;
    private name: string = "name"
    private currentScore: number = 0

    constructor(
        isFinished: boolean,
        private field:Array<Array<BallColor>>) {
        super()
        if (this.field.length === 0 || isFinished) this.generateNewField()
    }

    GetField(): Array<Array<BallColor>> {
        return this.field
    }

    StartNewGame(name: string) {
        this.name = name
        this.currentScore = 0
        this.generateNewField()
    }

    OnBallClick(coord: {x: number, y: number}) {
        const addScore = this.checkFromCoord(coord)
        if (addScore.length != 0) {
            this.addScore(addScore.length)

            this.removeFromCoord(addScore)
            /// await animation
            this.dropDownBalls()
            /// await animation
            this.fillEmptyCellsRandom()
            this._dispatcher.Post((h)=>h.UpdateField?.(this.field, true))
        } 

        if (!this.checkAllOption()) {
            this._dispatcher.Post((h)=>h.EndGame({name: this.name, score: this.currentScore}))
        }
    }

    private addScore(score: number) {
        this.currentScore += score
        this._dispatcher.Post((h)=>h.NewScore?.(this.currentScore))
    }

    private checkFromCoord(coord: {x: number, y: number}) : {x: number, y: number}[] {
        const addScore: {x: number, y: number}[] = []
        addScore.concat(this.checkVerticalFromCoord(coord))
                .concat(this.checkHorizontalFromCoord(coord))
                .concat(this.checkDiagonalFromCoord(coord))
        return addScore
    }

    private checkVerticalFromCoord(coord: {x: number, y: number}) : {x: number, y: number}[] {
        const result : {x: number, y: number}[] = []
        let startY = coord.y
        for (; this.field[startY] && this.field[startY][coord.x] === this.field[coord.y][coord.x]; --startY) {
            result.push({x: coord.x, y: startY})
        }
        startY = coord.y + 1
        for (; this.field[startY] && this.field[startY][coord.x] === this.field[coord.y][coord.x]; ++startY) {
            result.push({x: coord.x, y: startY})
        }
        if (result.length >= this.minCombinationLength) return result
        return []
    }

    private checkHorizontalFromCoord(coord: {x: number, y: number}) : {x: number, y: number}[] {
        const result : {x: number, y: number}[] = []
        let startX = coord.x
        for (; this.field[coord.y][startX] && this.field[coord.y][startX] === this.field[coord.y][coord.x]; --startX) {
            result.push({x: startX, y: coord.y})
        }
        startX = coord.x + 1
        for (;this.field[coord.y][startX] && this.field[coord.y][startX] === this.field[coord.y][coord.x]; ++startX) {
            result.push({x: startX, y: coord.y})
        }
        if (result.length >= this.minCombinationLength) return result
        return []
    }

    private checkDiagonalFromCoord(coord: {x: number, y: number}) : {x: number, y: number}[] {
        const result : {x: number, y: number}[] = []
        let startX = coord.x
        let startY = coord.y
        for (; this.field[startY][startX] && this.field[startY][startX] === this.field[coord.y][coord.x]; ) {
            result.push({x: startX, y: startY})
            --startY
            --startX
        }
        startX = coord.x + 1
        startY = coord.y + 1
        for (; this.field[coord.y][startX] && this.field[startY][startX] === this.field[coord.y][coord.x]; ) {
            result.push({x: startX, y: startY})
            ++startX;
            ++startY;
        }
        if (result.length >= this.minCombinationLength) return result
        return []
    }

    private removeFromCoord(coord: {x: number, y: number}[]) {
        for (const ball of coord) {
            this.field[ball.y][ball.x] = BallColor.NONE;
        }
        this._dispatcher.Post((h)=> h.UpdateField?.(this.field, false))
    }

    private dropDownBalls() {
        for(let y = 0; y < this.fieldSize; ++y) {
            for(let x = 0; x < this.fieldSize; ++x) {
                if (this.field[y][x] === BallColor.NONE) {
                    let yAdditional = 1;
                    while (this.field[y + yAdditional] && this.field[y + yAdditional][x] === BallColor.NONE) {
                        ++yAdditional;
                    }
                    this.field[y][x] = this.field[y + yAdditional][x];
                    this.field[y + yAdditional][x] = BallColor.NONE;
                }
            }
        }
        this._dispatcher.Post((h)=> h.UpdateField?.(this.field, false))
    }

    private checkAllOption() : boolean {
        if (this.checkAllVerticalOption() || 
            this.checkAllHorizontalOption() || 
            this.checkAllDiagonalOption()) return true;
        return false;
    }

    private checkAllVerticalOption() {
        for (let j = 0; j < this.field[0].length; j++) {
            let consecutiveSameColorCount = 1;
            let currentColor = this.field[0][j];
            for (let i = 1; i < this.field.length; i++) {
                if (this.field[i][j] === currentColor) {
                    consecutiveSameColorCount++;
                } else {
                    currentColor = this.field[i][j];
                    consecutiveSameColorCount = 1;
                }
                if (consecutiveSameColorCount === this.minCombinationLength) {
                    return true;
                }
            }
        }
    }

    private checkAllHorizontalOption() {
        for (let i = 0; i < this.field.length; i++) {
            let consecutiveSameColorCount = 1;
            let currentColor = this.field[i][0];
            for (let j = 1; j < this.field[i].length; j++) {
                if (this.field[i][j] === currentColor) {
                    consecutiveSameColorCount++;
                } else {
                    currentColor = this.field[i][j];
                    consecutiveSameColorCount = 1;
                }
                if (consecutiveSameColorCount === this.minCombinationLength) {
                    return true;
                }
            }
        }
        return false
    }

    private checkAllDiagonalOption() {
        for (let i = 0; i < this.field.length - 2; ++i) {
            for (let j = 0; j < this.field[i].length - 2; ++j) {
                let consecutiveSameColorCount = 1;
                let currentColor = this.field[i][j];
                for (let k = 1; k < 3; k++) {
                    if (this.field[i + k][j + k] === currentColor) {
                        consecutiveSameColorCount++;
                    } else {
                        currentColor = this.field[i + k][j + k];
                        consecutiveSameColorCount = 1;
                    }
                    if (consecutiveSameColorCount === this.minCombinationLength) {
                        return true;
                    }
                }
            }
        }
        return false
    }

    private generateNewField() {
        this.field = new Array(this.fieldSize).fill(null).map(() => new Array(this.fieldSize).fill(null));
        this.generateGaranteedStartCombinations();
        this.fillEmptyCellsRandom();
        this._dispatcher.Post((h)=>h.UpdateField?.(this.field, true))
    }

    private generateGaranteedStartCombinations() {
        for (let i = 0; i < this.garanteedStartCombinations; ++i) {
            const combinationValue = Object.values(BallColor)[Math.floor(Math.random() * Object.values(BallColor).length - 1)];
            const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
            const startPosition = {
              x: Math.floor(Math.random() * (this.fieldSize - this.minCombinationLength)),
              y: Math.floor(Math.random() * (this.fieldSize - this.minCombinationLength))
            };
        
            if (direction === 'horizontal') {
                for (let j = 0; j < this.minCombinationLength; ++j) {
                    this.field[startPosition.y][startPosition.x + j] = combinationValue as BallColor;
                }
            } else {
                for (let j = 0; j < this.minCombinationLength; ++j) {
                    this.field[startPosition.y + j][startPosition.x] = combinationValue as BallColor;
                }
            }
        }
    }

    private fillEmptyCellsRandom() {
        for (let i = 0; i < this.fieldSize; ++i) {
            for (let j = 0; j < this.fieldSize; ++j) {
              if (this.field[i][j] === null) {
                  this.field[i][j] = Object.values(BallColor)[Math.floor(Math.random() * Object.values(BallColor).length - 1)] as BallColor;
              }
            }
        };
    }
}