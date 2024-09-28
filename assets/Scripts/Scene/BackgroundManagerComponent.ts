import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BackgroundManagerComponent')
export class BackgroundManagerComponent extends Component {

    @property(Node)
    layer!: Node;


    /// при загрузке префаба он находит компонент AdaptiveBackGround разымвает его и заполняет им пространство

    UpdateImage(node: Node) {
        //// продублировать ноды с префаба

        

        ///TODO create duplicate background
    }
}

