/**
 * 
 * SaveDispatcher.ts
 * db://assets/Scripts/Save/SaveDispatcher.ts
 *
 */

import { AbstractDispatcher } from "../Utils/Dispatcher";
import { ISaveListener } from "./SaveInterfaces";

interface HasIsBlock{
    IsBlock():boolean
}

export class SaveDispatcher extends AbstractDispatcher<ISaveListener>
{
    private blockers:HasIsBlock[] = []

    constructor(){
        super()
    }

    Save()
    {
        if(this.blockers.some((blocker)=>blocker.IsBlock())) { return }
        
        this._dispatcher.Post((h)=>h.WillSave())
        this._dispatcher.Post((h)=>h.DoSave?.())
    }

    SetSaveBlocker(executor:HasIsBlock){
        this.blockers.push(executor)
    }
    
    Clear(){
        this.blockers.length = 0
    }
}