import { _decorator, Component, instantiate, Label, Node, Prefab, tween, Tween, UITransform, Vec3 } from 'cc';
import { GameScenePresenter } from './GameScenePresenter';
import { AppRoot } from '../../Application/AppRoot';
import { BallColor } from '../../Enums/BallColor';
import { BallComponent } from './BallComponent';
import { AnimationType } from '../../Logic/Field';
const { ccclass, property } = _decorator;

@ccclass('GameSceneComponent')
export class GameSceneComponent extends Component {
    @property(Label)
    nameLabel: Label = null!

    @property(Label)
    scoreLabel: Label = null!

    @property(UITransform)
    field: UITransform = null!

    @property(Prefab)
    ballPrefab: Prefab = null!

    private _presenter?: GameScenePresenter
    private _balls: Array<Array<Node>> = []
    private animation?: Tween<Node>

    onEnable(): void {
        this._presenter = new GameScenePresenter(this, 
                                                 AppRoot.getInstance.ResolveGameContext().ResolveGame().ResolveField(),
                                                 AppRoot.getInstance.ResovleSaveState().ResolveSaveContext().GetCurrentSaveState())

        this._presenter!.LoadData()
    }

    protected onDisable(): void {
        this._presenter?.SaveCurrentGame()
    }

    SetName(newName: string) {
        this.nameLabel.string = newName
    }

    UpdateScore(newScore: string) { 
        this.scoreLabel.string = newScore
    }

    ShowNewField(data: Array<Array<BallColor>>) {
        if (!this._balls.length) {
            this._balls = new Array(data.length).fill(null).map(() => new Array(data.length).fill(null));
            data.forEach((row, i) => {
                row.forEach((color, j) => {
                    this._balls[i][j] = instantiate(this.ballPrefab)
                    this.field.node.addChild(this._balls[i][j])
                })
            })
        } 
        data.forEach((row, i) => {
            row.forEach((color, j) => {
                this.addBallTween(this._balls[i][j],
                   {x:this._balls[i][j].getComponent(UITransform)!.width  /2  * (i+1), 
                    y:this._balls[i][j].getComponent(UITransform)!.height /2  * (j+1)},
                   {x:this._balls[i][j].getComponent(UITransform)!.width  /2  * (i+1), 
                    y:this.field.height + this._balls[i][j].getComponent(UITransform)!.height /2  * (j+1)})
                this._balls[i][j].getComponent(BallComponent)?.SetColor(color)
            })
        })
        
        this.animation?.start()
    }

    RemoveBalls(data: Array<Array<BallColor>>) {
        
    }

    DropDownBalls(data: Array<Array<BallColor>>) {

    }

    private addBallTween(node: Node, to:{x: number, y: number}, from?:{x: number, y: number},) {
        if (from) {
            node.setPosition(from.x, from.y, 0)
        }
        let addAninm = tween(node)
            .to(0.5, { position: new Vec3(to.x, to.y, 0) })
        if (this.animation) {
            // this.animation = this.animation.parallel(addAninm, this.animation)
        } else {
            this.animation = addAninm
        }
    }

    private hideBall(node: Node) {

    }
}


