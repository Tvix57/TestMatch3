import { _decorator, Component, instantiate, Label, Node, Prefab, UITransform } from 'cc';
import { GameScenePresenter } from './GameScenePresenter';
import { AppRoot } from '../../Application/AppRoot';
import { BallColor } from '../../Enums/BallColor';
import { BallComponent } from './BallComponent';
const { ccclass, property } = _decorator;

@ccclass('GameSceneComponent')
export class GameSceneComponent extends Component {
    @property(Label)
    nameLabel: Label = null!

    @property(Label)
    scoreLabel: Label = null!

    @property(Node)
    field: Node = null!

    @property(Prefab)
    ballPrefab: Prefab = null!

    private _presenter?: GameScenePresenter
    private _balls: Array<Array<Node>> = []

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

    UpdateField(newfield: Array<Array<BallColor>>, fromOutside?: boolean) { 
        if (this._balls.length != newfield.length) {
            this._balls = new Array(newfield.length).fill(null).map(() => new Array(newfield.length).fill(null));
            newfield.forEach((row, i) => {
                row.forEach((color, j) => {
                    this._balls[i][j] = instantiate(this.ballPrefab)
                    this._balls[i][j].getComponent(BallComponent)?.SetColor(color)
                    this.field.addChild(this._balls[i][j])
                    this.setBallsPosition(this._balls[i][j], i, j)
                })
            })
        } else {
            this._balls.forEach((row, i) => {
                row.forEach((ball, j) => {
                    if (fromOutside) {
                        
                    }
                })
            })
        }
    }

    private setBallsPosition(node: Node, x: number, y: number) {
        const nodeSize = node.getComponent(UITransform)!
        node.position.set(nodeSize.width / 2 + (x * nodeSize.width),
                          nodeSize.height / 2 + (y * nodeSize.height),
                          0)
    }

    private hideBall(node: Node) {

    }
}


