import { IDispatcher } from '../Utils/Dispatcher';


export interface IAppTimerHandler {
    Tick(): void;
}

export interface IAppTimer extends IDispatcher<IAppTimerHandler> {
    IsActive(): boolean;
    GetTime(): Date;
}
