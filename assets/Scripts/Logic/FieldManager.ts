import { BallColor } from "../Enums/BallColor";
import { FieldConfig } from "./FieldConfig";

export class FieldManager extends FieldConfig{
    constructor(private field : Array<Array<BallColor>>) {
        super();
    }

    CheckFromCoord(coord: {x: number, y: number}) : {x: number, y: number}[] {
        const addScore: {x: number, y: number}[] = []
        addScore.concat(this.checkVerticalFromCoord(coord))
                .concat(this.checkHorizontalFromCoord(coord))
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
}