import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { ScoreItemComponent } from './ScoreItemComponent';
import { ScoreScenePresenter } from './ScoreScenePresenter';
import { AppRoot } from '../../Application/AppRoot';
const { ccclass, property } = _decorator;

@ccclass('ScoreSceneComponent')
export class ScoreSceneComponent extends Component {
    @property(Node)
    private contentnode: Node = null!

    @property(Prefab)
    private scoreItemPrefab: Prefab = null!

    private presenter?: ScoreScenePresenter

    protected onEnable(): void {
        this.presenter = new ScoreScenePresenter(this, AppRoot.getInstance.ResolveGameContext().ResolveGame().ResolveGameStats())
        this.presenter!.LoadScores()
    }

    AddScore(name : string, score: number) {
        const node = instantiate(this.scoreItemPrefab)
        const itemCmp = node.getComponent(ScoreItemComponent)
        itemCmp!.nameLabel.string = name
        itemCmp!.scoreLabel.string = score.toString()
        this.contentnode.addChild(node)
    }
}


