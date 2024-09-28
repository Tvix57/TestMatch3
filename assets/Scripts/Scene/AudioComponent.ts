import { CCFloat, Component, _decorator } from 'cc';
import { AppRoot } from '../Application/AppRoot';
import { IAudioManager } from '../Application/ApplicationInterfaces';

const { ccclass, property } = _decorator;

@ccclass('AudioComponent')
export class AudioComponent extends Component {
    @property
    public fileName = ""

    @property(CCFloat)
    public volume = 1.0

    private _mngr?: IAudioManager

    onEnable() {
        this._mngr = AppRoot.getInstance.ResolveSound().ResolveAudioManager()
        this._mngr!.InitAudio(this.fileName, this.volume)
    }
    
    onDisable() {
        this._mngr?.RemoveAudio(this.fileName)
    }

    SetLoop(loop: boolean) {
        this._mngr!.SetLoop(this.fileName, loop)
    }

    Play() {
        this._mngr!.PlaySound(this.fileName)
    }

    BreakeSound() {
        this._mngr!.BreakeSound(this.fileName)
    }
}
    