import { _decorator, Component, instantiate, Label, Node, Prefab, tween, Tween, TweenSystem, TweenAction, TweenEasing, UITransform, Vec3 } from 'cc';
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

    @property(UITransform)
    field: UITransform = null!

    @property(Prefab)
    ballPrefab: Prefab = null!

    private _presenter?: GameScenePresenter
    private _balls: Array<Array<Node>> = []
    // private animationPromise: Promise<void> = new Promise<void>(() => {})

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

    ShowNewField(data: Array<Array<BallColor>>, callback?: () => void) {
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
                let cmpBall = this._balls[i][j].getComponent(BallComponent)!
                cmpBall.SetColor(color)
                cmpBall.SetClick(() => {this._presenter!.OnBallClick({x:i, y:j})})
                let cmpUI = this._balls[i][j].getComponent(UITransform)!
                this.addBallTween(this._balls[i][j],
                   {x:cmpUI.width / 2 + cmpUI.width  * i, 
                    y:cmpUI.height / 2 + cmpUI.height * j},
                   {x:cmpUI.width / 2 + cmpUI.width  * i, 
                    y:this.field.height + (cmpUI.height / 2 + cmpUI.height * j)}).start()
            })
        })
    }

    async RemoveBalls(data: Array<Array<BallColor>>, callback?: () => void) {
        let tweens = Array<Tween<Node>>()
        data.forEach((row, i) => {
            row.forEach((color, j) => {
                if (color === BallColor.NONE) {
                    /// add burn animation
                    let cmpUI = this._balls[i][j].getComponent(UITransform)!
                    tweens.push(this.hideBall(this._balls[i][j], 
                                {x:cmpUI.width / 2 + cmpUI.width  * i,
                                 y:this.field.height + (cmpUI.height / 2 + cmpUI.height * j)}))
                        
                }
            })
        })

        this.animationAwait(tweens).then(() => {callback?.()})
    }

    async DropDownBalls(data: Array<Array<BallColor>>, callback?: () => void) {
        let tweens = Array<Tween<Node>>()
        data.forEach((row, i) => {
            row.forEach((color, j) => {
                let cmpUI = this._balls[i][j].getComponent(UITransform)!
                if (this._balls[i][j].position.x !== cmpUI.width  / 2 + cmpUI.width  * i ||
                    this._balls[i][j].position.y !== cmpUI.height / 2 + cmpUI.height * j) {
                        if (this._balls[i][j].position.y > this.field.height) {
                            this._balls[i][j].getComponent(BallComponent)!.SetColor(color)
                        }
                        tweens.push(this.addBallTween(this._balls[i][j],
                            {x:cmpUI.width  / 2 + cmpUI.width  * i, 
                             y:cmpUI.height / 2 + cmpUI.height * j}))
                }
            })
        })

        this.animationAwait(tweens).then(() => {callback?.()})
    }

    private animationAwait(tweens: Array<Tween<Node>>) {
        let callPromise = new Promise<void>((resolve) => {
            let count = 0
            tweens.forEach(tween => {
                tween.start()
                ++count
                if(count === tweens.length) {
                    resolve()
                }
            })
        })
        return callPromise
    }

    private addBallTween(node: Node, to:{x: number, y: number}, from?:{x: number, y: number}) {
        if (from) {
            node.setPosition(from.x, from.y, 0)
        }       
        return tween(node).to(0.5, {position:new Vec3(to.x, to.y, 0)})
    }

    private hideBall(node: Node, to:{x: number, y: number}) {
        return tween(node).set({position:new Vec3(to.x, to.y, 0)})
    }



}


