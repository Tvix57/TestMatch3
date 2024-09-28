/**
 *
 * DialogFactory.ts
 * db://assets/Scripts/Scene/DialogFactory.ts
 *
 */
import { Node, assert } from "cc";
import { AppRoot } from "../Application/AppRoot";
import { PrefabLoader } from "../Utils/PrefabLoader";
import { IDialogManager } from './IDialogManager';
import { AnsverDialogComponent } from "./AnsverDialogComponent";

export class DialogFactory extends PrefabLoader {
    private _dialogManager: IDialogManager;
    private _filename: string;

    constructor(filename: string) {
        super("Prefabs/Dialog/DialogScene");
        this._filename = filename;
        this._dialogManager = AppRoot.getInstance.ResolveDialogManager();
    }

    CreateDialog(activate?: (isOk: boolean) => void):Promise<Node>{
        return new Promise<Node>((resolve,reject)=>{
            this.Create().then((dialogScene: Node) => {
                this.Create(this._filename).then((itemDialog: Node) => {
                    assert(itemDialog.getComponent(AnsverDialogComponent) != null, "Dialog must have AnsverDialogComponent");

                    itemDialog.getComponent(AnsverDialogComponent)?.SetHandler(activate);
                    dialogScene.getChildByName("Center")?.addChild(itemDialog);
                    this._dialogManager.OpenDialog(dialogScene);
                    
                    resolve(itemDialog)
                });
            })
            .catch((err) => reject(err));
        })
    }
}
