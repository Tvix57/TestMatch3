

//// отслеживание кликов на ячейки и оставщиеся ходы

import { BallColor } from "../Enums/BallColor";
import { FieldConfig } from "./FieldConfig";

export class FieldListener extends FieldConfig {
    constructor(
        private field: Array<Array<BallColor>>)
    {
        super();
    }

    CheckAvailableOption() : boolean {
        return this.checkAllVerticalOption() || 
               this.checkAllHorizontalOption();
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
}