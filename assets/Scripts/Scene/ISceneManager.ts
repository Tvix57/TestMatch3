import { IDispatcher } from "../Utils/Dispatcher"
import { LocationType } from "./../Enums/LocationType"

export interface ITransferHandler
{
    WillTransfer(loc:LocationType):void
    OnTransfer(loc:LocationType):void
    OnLoadedScene?(num:number, max:number):void
}

export interface ISceneManager extends IDispatcher<ITransferHandler>
{
    Transfer(location:LocationType, parameter?:string):void
    RemoveAll(): void
    TransferBack():void
    GetCurrentLocation():LocationType
} 