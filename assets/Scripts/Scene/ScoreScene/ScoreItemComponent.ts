import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ScoreItemComponent')
export class ScoreItemComponent extends Component {
    @property(Label)
    nameLabel: Label = null!
    @property(Label)
    scoreLabel: Label = null!
}


