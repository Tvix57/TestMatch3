import { AndroidApplicationConfig } from "./native/AndroidApplicationConfig";
import { Platform } from "./../Enums/ApplicationConfig";
import { ApplicationListener } from "./native/ApplicationListener";
import { EditorAppConfig } from "./native/EditorAppConfig";

export interface IApplicationHandler{
    OnPauseApplication():void
    OnResumeApplication():void
    OnExitApplication():void
}

export interface IDeviceConfig{
    GetApplicationUserId():string
    GetVersion():string
    GetApplicationName():string
}

export class AppDevice {
    private _app:ApplicationListener
    private _config:IDeviceConfig

    constructor(platform:Platform){
        this._app = new ApplicationListener()

        switch(platform)
        {
            case Platform.Android : {
                this._config = new AndroidApplicationConfig()
                break;
            }
            case Platform.Ios: {} //break;
            default:{
                this._config = new EditorAppConfig()
            }
        }
    }
    GetApplicationUserId():string { return this._config.GetApplicationUserId() }
    GetDevice(){ return this._config }
    
    AddHandler(handler:IApplicationHandler) { this._app.AddHandler(handler); }
    RemoveHandler(handler:IApplicationHandler) { this._app.RemoveHandler(handler); }
}