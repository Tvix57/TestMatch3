import { BallColor } from "../Enums/BallColor";
import { FieldConfig } from "./FieldConfig";

export class FieldController extends FieldConfig  {
    constructor( 
        private field: Array<Array<BallColor>>) {
        super();
    }

    RemoveFromCoord(coord: {x: number, y: number}[]) {
        for (const ball of coord) {
            this.field[ball.x][ball.y] = BallColor.NONE;
        }
    }

    DropDownBalls() {
        for(let x = 0; x < this.fieldSize; ++x) {
            for(let y = 0; y < this.fieldSize; ++y) {
                if (this.field[x][y] === BallColor.NONE) {
                    let yAdditional = 1;
                    while (this.field[x] && this.field[x][y] === BallColor.NONE) {
                        ++yAdditional;
                    }
                    this.field[x][y] = this.field[y + yAdditional][x];
                    this.field[y + yAdditional][x] = BallColor.NONE;
                }
            }
        }
    }    
}