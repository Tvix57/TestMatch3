import { Node } from "cc";
import { IDispatcher } from "../Utils/Dispatcher";


export interface IDialogHandler {
    WillDialogShow?(): void;
    OnDialogShow?(): void;
}

export interface IDialogManager extends IDispatcher<IDialogHandler> {
    OpenDialog(node: Node): void;
    CloseDialog(): boolean;
    CloseAllDialogs(): void;
}
