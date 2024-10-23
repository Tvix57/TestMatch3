import { BallColor } from "../Enums/BallColor";
import { FieldConfig } from "./FieldConfig";

export class FieldController extends FieldConfig  {
    constructor( 
        private field: Array<Array<BallColor>>) {
        super();
    }

    RemoveFromCoord(coord: {x: number, y: number}[]) {
        for (const ball of coord) {
            this.field[ball.y][ball.x] = BallColor.NONE;
        }
    }

    DropDownBalls() {
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
    }    
}