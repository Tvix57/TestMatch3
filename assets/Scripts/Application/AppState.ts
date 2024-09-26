/**
 * 
 * AppState.ts
 * db://assets/Scripts/Application/AppState.ts
 *
 */

import { AndroidSaveState } from "../Save/Android/AndroidSaveState"
import { EditorSaveState } from "../Save/Editor/EditorSaveState"
import { SaveContext } from "../Save/SaveContext"
import { SaveDispatcher } from "../Save/SaveDispatcher"
import { IStateSaver } from "../Save/SaveInterfaces"
import { Platform } from "./ApplicationConfig"
import { IAppTimer } from "./IAppTimer"

export class AppState 
{    
    private _platformSaver:IStateSaver
    private _context:SaveContext
    private _saveDispatcher:SaveDispatcher

    constructor(platform:Platform, timer:IAppTimer, prefferedLang:string)
    {
        switch(platform)
        {
            case Platform.Android : {
                this._platformSaver = new AndroidSaveState(prefferedLang); break;
            }
            case Platform.Ios: {}
            default:{
                this._platformSaver = new EditorSaveState()
            }
        }
        this._saveDispatcher = new SaveDispatcher()
        this._context = new SaveContext(this._platformSaver, this._saveDispatcher, timer)
    }

    ResolveSaveContext() { return this._context }
    ResolveSaveDispatcher() { return this._saveDispatcher }
}