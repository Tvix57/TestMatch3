import { IDispatcher } from '../Utils/Dispatcher';


export interface IAppTimerHandler {
    OnActivate(): void;
    OnDeactivate(): void;
    Tick(): void;
}

export interface IAppTimer extends IDispatcher<IAppTimerHandler> {
    IsActive(): boolean;
    GetTime(): Date;
}
