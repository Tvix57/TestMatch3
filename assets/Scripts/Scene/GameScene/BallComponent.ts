import { _decorator, Color, Component, Sprite } from 'cc';
import { BallColor } from '../../Enums/CCEnums';
const { ccclass, property, requireComponent } = _decorator;

@ccclass('BallComponent')
@requireComponent(Sprite)
export class BallComponent extends Component {

    @property({type: BallColor})
    color: BallColor = BallColor.White

    @property(Sprite)
    sprite: Sprite = null!

    protected onLoad(): void {
        this.cangeColor(this.color);
    }

    SetColor(color: BallColor) {
        this.color = color;
        this.cangeColor(color);
    }

    OnBallClick() {
        
    }

    private activateDestroyAnimation() {
        
    }

    private cangeColor(color: BallColor) {
        switch (color) {
            case BallColor.White:
                this.sprite.color = new Color(255, 255, 255, 255);
                break;
            case BallColor.Red:
                this.sprite.color = new Color(255, 0, 0, 255);
                break;
            case BallColor.Green:
                this.sprite.color = new Color(0, 255, 0, 255);
                break;
            case BallColor.Blue:
                this.sprite.color = new Color(0, 0, 255, 255);
                break;
            case BallColor.Yellow:
                this.sprite.color = new Color(255, 255, 0, 255);
                break;
            case BallColor.Black:
                this.sprite.color = new Color(0, 0, 0, 255);
                break;
            case BallColor.NONE:
                break
        }
    }
}


