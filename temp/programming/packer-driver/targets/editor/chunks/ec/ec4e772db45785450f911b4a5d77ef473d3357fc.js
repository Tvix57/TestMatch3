System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, instantiate, resources, PrefabLoader, _crd;

  _export("PrefabLoader", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      resources = _cc.resources;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "534b4ZT1ZhANYqm8Oe5pr1n", "PrefabLoader", undefined);

      __checkObsolete__(['Prefab', 'Node', 'instantiate', 'resources']);

      _export("PrefabLoader", PrefabLoader = class PrefabLoader {
        constructor(pathName) {
          this.pathName = pathName;
        }

        Create(name) {
          return new Promise((resolve, reject) => resources.load(name ? name : this.pathName, Prefab, (err, prefab) => {
            if (err == null) {
              resolve(instantiate(prefab));
            } else {
              reject(err);
            }
          }));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ec4e772db45785450f911b4a5d77ef473d3357fc.js.map