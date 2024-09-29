import { _decorator, Component, ProgressBar, UITransform } from 'cc';
import { ITransferHandler } from '../ISceneManager';
import { ScenePoolManagerComponent } from '../ScenePoolManagerComponent';
import { LocationType } from '../../Enums/LocationType';
import { AppRoot } from '../../Application/AppRoot';
const { ccclass, property } = _decorator;

@ccclass('LoadingSceneComponent')
export class LoadingSceneComponent extends Component implements ITransferHandler
{
    @property(ProgressBar)
    progress!:ProgressBar

    @property(UITransform)
    progressSize!:UITransform

    protected onEnable(): void {
        AppRoot.getInstance.ResolveSceneManager().AddHandler(this)
        this.progress.totalLength = this.progressSize.width
    }
    protected onDisable(): void {
        AppRoot.getInstance.ResolveSceneManager().RemoveHandler(this)
    }

    WillTransfer(loc: LocationType): void { }

    OnTransfer(loc: LocationType): void { 
        if(AppRoot.getInstance.ResolveSceneManager() instanceof ScenePoolManagerComponent) (AppRoot.getInstance.ResolveSceneManager() as ScenePoolManagerComponent).Preload()
    }

    OnLoadedScene?(num: number, max:number): void {
        this.progress.progress = num / max
    }
}


