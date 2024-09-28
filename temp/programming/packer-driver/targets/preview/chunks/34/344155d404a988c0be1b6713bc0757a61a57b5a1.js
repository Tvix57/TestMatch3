System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, assert, AppRoot, PrefabLoader, AnsverDialogComponent, DialogFactory, _crd;

  function _reportPossibleCrUseOfAppRoot(extras) {
    _reporterNs.report("AppRoot", "../Application/AppRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabLoader(extras) {
    _reporterNs.report("PrefabLoader", "../Utils/PrefabLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIDialogManager(extras) {
    _reporterNs.report("IDialogManager", "./IDialogManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnsverDialogComponent(extras) {
    _reporterNs.report("AnsverDialogComponent", "./AnsverDialogComponent", _context.meta, extras);
  }

  _export("DialogFactory", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      assert = _cc.assert;
    }, function (_unresolved_2) {
      AppRoot = _unresolved_2.AppRoot;
    }, function (_unresolved_3) {
      PrefabLoader = _unresolved_3.PrefabLoader;
    }, function (_unresolved_4) {
      AnsverDialogComponent = _unresolved_4.AnsverDialogComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2dd1aV1wk1IO4V2IvSXSa66", "DialogFactory", undefined);
      /**
       *
       * DialogFactory.ts
       * db://assets/Scripts/Scene/DialogFactory.ts
       *
       */


      __checkObsolete__(['Node', 'assert']);

      _export("DialogFactory", DialogFactory = class DialogFactory extends (_crd && PrefabLoader === void 0 ? (_reportPossibleCrUseOfPrefabLoader({
        error: Error()
      }), PrefabLoader) : PrefabLoader) {
        constructor(filename) {
          super("Prefabs/Dialog/DialogScene");
          this._dialogManager = void 0;
          this._filename = void 0;
          this._filename = filename;
          this._dialogManager = (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).getInstance.ResolveDialogManager();
        }

        CreateDialog(activate) {
          return new Promise((resolve, reject) => {
            this.Create().then(dialogScene => {
              this.Create(this._filename).then(itemDialog => {
                var _itemDialog$getCompon, _dialogScene$getChild;

                assert(itemDialog.getComponent(_crd && AnsverDialogComponent === void 0 ? (_reportPossibleCrUseOfAnsverDialogComponent({
                  error: Error()
                }), AnsverDialogComponent) : AnsverDialogComponent) != null, "Dialog must have AnsverDialogComponent");
                (_itemDialog$getCompon = itemDialog.getComponent(_crd && AnsverDialogComponent === void 0 ? (_reportPossibleCrUseOfAnsverDialogComponent({
                  error: Error()
                }), AnsverDialogComponent) : AnsverDialogComponent)) == null ? void 0 : _itemDialog$getCompon.SetHandler(activate);
                (_dialogScene$getChild = dialogScene.getChildByName("Center")) == null ? void 0 : _dialogScene$getChild.addChild(itemDialog);

                this._dialogManager.OpenDialog(dialogScene);

                resolve(itemDialog);
              });
            }).catch(err => reject(err));
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=344155d404a988c0be1b6713bc0757a61a57b5a1.js.map