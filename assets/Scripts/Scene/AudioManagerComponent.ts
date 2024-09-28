import { _decorator, Enum, AudioClip, AudioSource, Component, Node } from 'cc';
import { Audio, IAudioManager } from '../Application/ApplicationInterfaces';
import { AudioType } from '../Enums/CCEnums';
const { ccclass, property } = _decorator;

@ccclass('AudioItem')
export class AudioItem {
    @property({type: AudioType})
    public type: AudioType = AudioType.SOUND

    @property(AudioClip)
    public clip: AudioClip | null = null

    @property
    set name(value: string) { this.clip ? this.clip.name = value : null }
    get name(): string { return this.clip?.name ?? "" }

    useCount = 0
}

@ccclass('AudioManagerComponent')
export class AudioManagerComponent extends Component implements IAudioManager{
    @property(AudioSource)
    musicLayer: AudioSource = null!

    @property(Node)
    soundLayer: Node = null!

    @property({type: [AudioItem]})
    audios: AudioItem[] = []

    GetAudios():Audio[] { return this.audios.map((value)=>{ return {type: value.type, name: value.name, useCount:value.useCount} }) }

    SetMusicLvl(val: number) {
        this.musicLayer.volume = val
    }

    ActivateMusic(isActive: boolean) {
    }

    SetSoundLvl(val: number) {
        this.soundLayer.children.forEach((node) => {
            node.getComponent(AudioSource)!.volume = val
        })
    }

    ActivateSound(isActive: boolean): void {
    }
    
    InitAudio(name: string, volume: number = 1.0) {
        const item = this.audios.find((item) => item.name === name)
        if (item && item.type == AudioType.MUSIC) { this.addMusic(item, volume) } 
        else if (item && item.type == AudioType.SOUND) { this.addSound(item, volume) }
    }

    RemoveAudio(name: string) {
        const item = this.audios.find((item) => item.name === name)
        if (item && item.type == AudioType.MUSIC) { this.removeMusic(item) } 
        else if (item && item.type == AudioType.SOUND) { this.removeSound(item) }
    }

    PlaySound(name: string) {
        this.soundLayer.getComponentsInChildren(AudioSource).find((cmp) => cmp.clip?.name === name)?.play()
    }

    BreakeSound(name: string) {
        this.soundLayer.getComponentsInChildren(AudioSource).find((cmp) => cmp.clip?.name === name)?.stop()
    }

    SetLoop(name: string, loop: boolean) {
        let item = this.soundLayer.getComponentsInChildren(AudioSource).find((cmp) => cmp.clip?.name === name)
        if (item) { item.loop = loop }
    }

    private addSound(item: AudioItem, volume: number = 1) {
        if (this.soundLayer.getComponentsInChildren(AudioSource).find((cmp) => cmp.clip?.name === item.name)) {
            item.useCount++; 
            return 
        }
        let soundNode = new Node()
        let newCmp = soundNode.addComponent(AudioSource)
        newCmp.loop = newCmp.playOnAwake = false
        newCmp.clip = item.clip
        newCmp.volume = volume
        this.soundLayer.addChild(soundNode)
    }

    private addMusic(item: AudioItem, volume: number = 1) {
        if (item.clip !== this.musicLayer.clip) { this.setMusic(item, volume) }
    }

    private removeSound(item: AudioItem) {
        const cmp = this.soundLayer.getComponentsInChildren(AudioSource).find((cmp) => cmp.clip?.name === item.name)
        if (cmp && item.useCount >= 1) {
            item.useCount--;
            if (item.useCount > 0) { return }
            cmp.node.once(AudioSource.EventType.ENDED, () => {
                cmp.node.parent?.removeChild(cmp.node)
            })
        }
    }
    
    private removeMusic(item: AudioItem) {
        // this.musicLayer.stop()
    }

    private setMusic(item: AudioItem, volume: number = 1) {
        this.musicLayer.stop()
        this.musicLayer.volume =volume 
        this.musicLayer.clip = item.clip
        this.musicLayer.play()
    }
}

