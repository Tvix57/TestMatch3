import { AppRoot } from "../Application/AppRoot";
import { AppState } from "../Application/AppState";
import { ApplicationState } from "../Save/State";

export class GameFactory 
{
    constructor(private saveContext:AppState){}

    CreateGame(name:string) {
        this.createNewGame(this.saveContext.ResolveSaveContext().CreateNewGameState(name))
    }

    LoadGame() {
        this.createNewGame(this.saveContext.ResolveSaveContext().GetCurrentSaveState())
    }

    private createNewGame(state:ApplicationState)  {
        if(AppRoot.getInstance.ResolveGameContext().IsGameActive()) {
            AppRoot.getInstance.ResolveGameContext().FinishGame()
            AppRoot.getInstance.ResolveGameContext().ClearGame()
        }
        AppRoot.getInstance.ResolveGameContext().CreateGame(
            AppRoot.getInstance.ResolveTimer(), 
            AppRoot.getInstance.ResovleSaveState().ResolveSaveDispatcher(),
            AppRoot.getInstance.ResolveSceneManager(),
            state
        )
    }
}