export type Audio = {
    type: number
    name: string
    useCount:number
}

export interface IAudioManager{
    GetAudios():Audio[]
    SetMusicLvl(val: number):void
    ActivateMusic(isActive: boolean):void
    SetSoundLvl(val: number):void
    ActivateSound(isActive: boolean):void
    InitAudio(name: string, volume: number):void
    RemoveAudio(name: string):void
    PlaySound(name: string):void
    BreakeSound(name: string):void
    SetLoop(name: string, loop: boolean):void
}
