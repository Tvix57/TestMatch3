import { BallColor } from "../Enums/BallColor";
import { FieldConfig } from "./FieldConfig";

export class FieldGenerator extends FieldConfig {
    constructor (
        private field : Array<Array<BallColor>>) {
        super();
    }

    GenerateNewField() {
        this.field.length = this.fieldSize;
        for(let i = 0; i < this.fieldSize; ++i) {
            this.field[i] = new Array<BallColor>(this.fieldSize);
        }
        this.generateGaranteedStartCombinations();
        this.fillEmptyCellsRandom();
    }

    ShuffuleField() {
        
    }

    private generateGaranteedStartCombinations() {
        for (let i = 0; i < this.garanteedStartCombinations; ++i) {
            const combinationValue = Object.values(BallColor)[Math.floor(Math.random() * Object.values(BallColor).length - 2)];
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
                while (!(this.field[i][j] ?? null) || this.field[i][j] === undefined) {
                    this.field[i][j] = Object.values(BallColor)[Math.floor(Math.random() * Object.values(BallColor).length - 2)] as BallColor;
                }
            }
        };
    }
}