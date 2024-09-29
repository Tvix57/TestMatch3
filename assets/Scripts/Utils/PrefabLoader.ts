import { Prefab, Node, instantiate, resources } from "cc";

export class PrefabLoader {
    constructor(
        readonly pathName:string
    ){ }

    Create(name?:string) {
        return new Promise<Node>((resolve,reject)=>
            resources.load(name? name : this.pathName, Prefab,(err,prefab) => {
                if(err == null){ 
                    resolve(instantiate(prefab))
                }
                else{ reject(err) }
            })
        )
    }
}