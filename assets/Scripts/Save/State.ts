import { GameState } from "../Session/GameState";
import { IState } from "./SaveInterfaces";

export class ApplicationState extends IState
{
    gameState?:GameState
    isFirstLaunch?:boolean

    constructor(
        gameState?:GameState,
        isFirstLaunch?:boolean
    ){
        super();
        this.gameState = gameState
        this.isFirstLaunch = isFirstLaunch
    }

    HasGame():boolean {
        return this.gameState != null
    }

    IsGameFinished():boolean {
        return this.gameState?.isFinished ?? true
    }

    Save(): string {
        return JSON.stringify(this)
    }

    static Load(input:string): ApplicationState {
        let obj = JSON.parse(input)
        if(!("isFirstLaunch" in obj)) {
            return new ApplicationState()
        }
        return new ApplicationState(
            GameState.Load(obj.gameState), 
        )
    }
}