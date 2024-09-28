import { AudioType } from "../Scene/AudioManagerComponent"
import { Audio, IAudioManager } from "./ApplicationInterfaces"

enum SoundLvl {
    OFF = 0,
    ON = 0.3
}

export interface IAudio {
    Activate():void
    Deactivate():void
}

class AbstrastAudio {
    protected _items: Audio[] = []
    protected _mngr: IAudioManager
    
    isActive = true
    
    constructor(mngr: IAudioManager, items: Audio[]){
        this._mngr = mngr
        this._items = items
    }
}

class Sound extends AbstrastAudio implements IAudio {
    constructor(mng: IAudioManager){
        super(mng, mng.GetAudios().filter(item => item.type == 0))
    }

    Activate(): void {
        this._mngr.SetSoundLvl(SoundLvl.ON)
    }
    Deactivate(): void {
        this._mngr.SetSoundLvl(SoundLvl.OFF)
    }
}

class Music extends AbstrastAudio implements IAudio {
    constructor(mng: IAudioManager){
        super(mng, mng.GetAudios().filter(item => item.type == 1))
    }

    Activate(): void {
        this._mngr.SetMusicLvl(SoundLvl.ON)
    }
    Deactivate(): void {
        this._mngr.SetMusicLvl(SoundLvl.OFF)
    }
}

export class AppAudio {
    private _sound: Sound
    private _music: Music

    constructor(
        private _mng: IAudioManager
    ){
        this._sound = new Sound(_mng)
        this._music = new Music(_mng)
    }

    ResolveAudio(type: AudioType) : IAudio | null {
        if (type == AudioType.SOUND) return this._sound
        if (type == AudioType.MUSIC) return this._music
        return null
    }

    ResolveSound() { return this._sound }

    ResolveMusic() { return this._music }

    ResolveAudioManager() { return this._mng }
}