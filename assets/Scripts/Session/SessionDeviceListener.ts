import { AppDevice, IApplicationHandler } from "../Application/AppDevice";
import { GameLogic } from "./GameLogic";

export class SessionDeviceListener implements IApplicationHandler
{
    constructor(private device:AppDevice, private logic:GameLogic){
        device.AddHandler(this)
    }
    
    OnExitApplication(): void {
       
    }

    RemoveHandler(){
        this.device.RemoveHandler(this)
    }
    OnPauseApplication(): void { 

    }

    OnResumeApplication(): void {
        
    }
}