import { _decorator, Button, Component, Node } from 'cc';
import { StartScenePresenter } from './StartScenePresenter';
import { LocationType } from '../../Enums/LocationType';
const { ccclass, property } = _decorator;

@ccclass('StartSceneComponent')
export class StartSceneComponent extends Component {
    private presenter?: StartScenePresenter

    onContinueClick() {
        this.presenter?.LoadSave();
        this.presenter?.Transfer(LocationType.GameScene);
    }

    onNewGameClick() {
        this.presenter?.CreateNewField()
        this.presenter?.Transfer(LocationType.GameScene);
    }

    onLeaderBoardClick() {
        this.presenter?.Transfer(LocationType.ScoreScene);
    }

    onExitClick() {
        this.presenter?.ExitGame()
    }
}


