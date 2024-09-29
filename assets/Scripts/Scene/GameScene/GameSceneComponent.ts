import { _decorator, Component, Label, TiledMap } from 'cc';
import { GameScenePresenter } from './GameScenePresenter';
import { AppRoot } from '../../Application/AppRoot';
import { BallColor } from '../../Enums/BallColor';
const { ccclass, property } = _decorator;

@ccclass('GameSceneComponent')
export class GameSceneComponent extends Component {
    @property(Label)
    nameLabel: Label = null!

    @property(Label)
    scoreLabel: Label = null!

    @property(TiledMap)
    field: TiledMap = null!

    private _presenter?: GameScenePresenter

    onEnable(): void {
        this._presenter = new GameScenePresenter(this, 
                                                 AppRoot.getInstance.ResolveGameContext().ResolveGame().ResolveField(),
                                                 AppRoot.getInstance.ResovleSaveState().ResolveSaveContext().GetCurrentSaveState())

        this._presenter!.LoadData()
    }

    SetName(newName: string) {
        this.nameLabel.string = newName
    }

    UpdateScore(newScore: string) { 
        this.scoreLabel.string = newScore
    }

    UpdateField(field: Array<Array<BallColor>>, fromOutside?: boolean) { 
        
    }
}


