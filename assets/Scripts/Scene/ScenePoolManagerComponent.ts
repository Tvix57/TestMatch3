import { _decorator, Component, log, Node, error, assert, __private, tween, UIOpacity } from "cc";
import { LocationType } from "../Enums/LocationType";
import { Dispatcher } from "../Utils/Dispatcher";
import { ISceneManager, ITransferHandler } from "./ISceneManager";
import { PrefabLoader } from "../Utils/PrefabLoader";

const { ccclass, property } = _decorator;

interface Factory {
    Create(node: Node, parameter?:string): void;
}

class EmptyFactory implements Factory {
    Create(node: Node): void {}
}

type LocationEntry = {
    factory: Factory;
    scenePath: string;
    priority: number;
};

@ccclass("ScenePoolManagerComponent")
export class ScenePoolManagerComponent extends Component implements ISceneManager {
    @property(Node)
    readonly sceneNode!: Node;
    @property(Node)
    readonly currentNode!: Node;
    @property(Node)
    readonly forwardNode!: Node;
    @property(Node)
    readonly blockerNode!: Node;
    
    @property({type: LocationType})
    loadingScene:LocationType = LocationType.End
    @property({type: LocationType})
    startScene:LocationType = LocationType.End

    private _locationMap: Map<LocationType, LocationEntry> = new Map();
    private _dispatcher: Dispatcher<ITransferHandler> = new Dispatcher();
    private _sceneStack: Array<LocationType> = [];
    private _pool: Map<LocationType, Node> = new Map();

    private _isBlockTransfer: boolean = false;
    private loadedIndex = 0;
    private _isStart: boolean = true;
    private _currentSceneShow:LocationType=LocationType.End

    start() { this.Init() }

    private async Init() {
        if (!this._pool.has(this.loadingScene)) { 
            const loadScene = await this.CreateScene(this._locationMap.get(this.loadingScene)!.scenePath);
            this._pool.set(this.loadingScene, loadScene);
            this.Transfer(this.loadingScene)
            this._isStart = false
        }
    }

    async Preload(){
        for (const [name, entry] of this._locationMap) {
            this.CreateScene(entry.scenePath)
                .then((value) => {
                    value.active = false;
                    this._pool.set(name, value);
                })
                .catch((err) => {
                    log(entry.scenePath + " " + err);
                })
                .finally(() => {
                    this.loadedIndex++;
                    this._dispatcher.Post((arg) => arg.OnLoadedScene?.(this.loadedIndex, this._locationMap.size));
                    if (this.loadedIndex === this._locationMap.size){
                         this.Transfer(this.startScene);
                    }
                });
        }
    }

    AddLocation(location: LocationType, scenePath: string, priority: number, factory?: Factory) {
        this._locationMap.set(location, { factory:(factory? factory! : new EmptyFactory()), scenePath, priority });
    }

    Transfer(location: LocationType, parameter?:string): void {
        if (this._isBlockTransfer) return;
        this._isBlockTransfer = true;
        this.blockerNode.active = true;

        let entry = this._locationMap.get(location);
        if (entry === undefined) {
            error("ERROR: NoScene " + LocationType[location]);
            return;
        }
        this._dispatcher.Post((arg) => arg.WillTransfer(location));
        let scene = this._pool.get(location)!;
        entry!.factory.Create(scene,parameter);

        this.PopToPriority(entry!.priority);
        this._sceneStack.push(location);
        this.openScene(location);
    }

    private async CreateScene(name: string) {
        return new PrefabLoader(name).Create();
    }

    private PopToPriority(priority: number) {
        while (priority <= this._sceneStack.length - 1) this._sceneStack.pop();
    }

    private openScene(location: LocationType): void {
        if (!this._pool.has(location)) {
            log("ScenePoolManagerComponent: " + LocationType[location] + " not exist");
            return;
        }
        this.forwardNode.addChild(this._pool.get(location)!);
        this._pool.get(location)!.active = true;

        tween(this.forwardNode.getComponent(UIOpacity)!)
        .call(()=>this.forwardNode.getComponent(UIOpacity)!.opacity = 0)
        .to(0.2,{ opacity: 255 } )
        .call(()=>{ 
            this.forwardNode.getComponent(UIOpacity)!.opacity = 255
            this.CloseScene()
            this.currentNode.addChild(this.forwardNode.children[0]) 
            this._currentSceneShow = this._sceneStack.slice(-1)[0];

            this._dispatcher.Post((arg) => arg.OnTransfer(location));
            this._isBlockTransfer = false;
            this.blockerNode.active = false;
        })
        .start()
    }

    private CloseScene() {
        if (this.currentNode.children.length > 0) {
            const scene = this.currentNode.children[0];
            this.currentNode.removeAllChildren();
            scene.active = false;
        }
    }

    protected update(dt: number): void {
        if(!this._isStart){
            this._isStart = true
        }
    }

    AddHandler(arg: ITransferHandler): void {
        this._dispatcher.AddObserver(arg);
    }
    RemoveHandler(arg: ITransferHandler): void {
        this._dispatcher.RemoveObserver(arg);
    }
    RemoveAll(): void {
        this._dispatcher.RemoveAll();
    }

    TransferBack() {
        if (this._sceneStack.length <= 1) {
            assert(false, "TransferBack with empty scene stack");
            return;
        }

        this._sceneStack.pop();
        this.Transfer(this._sceneStack.pop()!);
    }

    GetCurrentLocation() {
        return this._currentSceneShow;
    }
    GetCurrentScene<T extends Component>(classConstructor: __private._types_globals__Constructor<T> | __private._types_globals__AbstractedConstructor<T>): T | null {
        if(this.currentNode.children.length) return this.currentNode.children[0].getComponent(classConstructor);
        return null
    }
}
