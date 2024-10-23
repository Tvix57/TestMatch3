import { native } from 'cc'
import { IState, IStateSaver } from "../SaveInterfaces";
import { ApplicationState } from '../State';

export class WebSaveState implements IStateSaver
{
    constructor(private prefferedLang:string){ }

    LoadState(): IState {
        return ApplicationState.Load(this.getFile())
    }
    
    SaveState(state: ApplicationState): void {
        this.setFile( state.Save() )
    }

    private getFile():string
    {
        // return native.reflection.callStaticMethod("com/grit/fftc/utils/FileUtils","getFile","()Ljava/lang/String;")
        return "load fileFromserver"
    }

    private setFile(input:string)
    {
        ///sendfile to server
        // native.reflection.callStaticMethod("com/grit/fftc/utils/FileUtils","writeFile","(Ljava/lang/String;)V",input)
    }
}