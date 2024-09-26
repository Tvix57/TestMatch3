import { _decorator, Component, Label, TiledMap } from 'cc';
import { GameScenePresenter } from './GameScenePresenter';
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

    SetPresenter(presenter: GameScenePresenter) {
        this._presenter = presenter
    }

    SetName(newName: string) {
        this.nameLabel.string = newName
    }

    UpdateScore(newScore: string) { 
        this.scoreLabel.string = newScore
    }
}


