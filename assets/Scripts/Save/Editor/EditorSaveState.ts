/**
 * 
 * EditorSaveState.ts
 * db://assets/Scripts/Save/Editor/EditorSaveState.ts
 *
 */

import { log } from "cc";
import { ApplicationState } from "../State";
import { IState } from "../SaveInterfaces";
import { GameState } from "../../Session/GameState";

export class EditorSaveState 
{
    constructor(){
    }

    LoadState():IState {
        return new ApplicationState(
            new GameState(
                "Player", //name
                undefined, //stats
                undefined, //field
                true, //isFinished
            ),                                             //gameState
            true,                                           //isFirstLaunch
        ) 
    }

    SaveState(state: ApplicationState):void { 
        let saveStr = state.Save()
        log("EditorSaveState: "+ saveStr)
    }
}