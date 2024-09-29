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
import { GameStatsInfo } from "../../Logic/GameStatsInfo";

export class EditorSaveState 
{
    constructor(){
    }

    LoadState():IState {
        return new ApplicationState(
            new GameState(
                undefined, //name
                0, //score
                [ {name:"Player1", score: 12},
                  {name:"Player2", score: 24},
                  {name:"Player3", score: 26},
                ], //stats
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