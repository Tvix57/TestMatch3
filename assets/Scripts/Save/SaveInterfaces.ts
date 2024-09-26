/**
 * 
 * SaveInterfaces.ts
 * db://assets/Scripts/Save/SaveInterfaces.ts
 *
 */

export interface ISaveListener{
    WillSave():void
    DoSave?():void
}

export class IState
{
}

export interface IStateSaver
{
    LoadState():IState
    SaveState(state:IState):void
}
