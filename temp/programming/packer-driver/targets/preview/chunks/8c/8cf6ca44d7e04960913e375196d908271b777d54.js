System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, AppRoot, _dec, _dec2, _class, _crd, ccclass, requireComponent, BackActionComponent;

  function _reportPossibleCrUseOfAppRoot(extras) {
    _reporterNs.report("AppRoot", "../Application/AppRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIDialogManager(extras) {
    _reporterNs.report("IDialogManager", "../Dialog/IDialogManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISceneManager(extras) {
    _reporterNs.report("ISceneManager", "./ISceneManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      AppRoot = _unresolved_2.AppRoot;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "589d6ygtVlIJK9YZjK69MCh", "BackActionComponent", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Event']);

      ({
        ccclass,
        requireComponent
      } = _decorator);

      _export("BackActionComponent", BackActionComponent = (_dec = ccclass('BackActionComponent'), _dec2 = requireComponent(Button), _dec(_class = _dec2(_class = class BackActionComponent extends Component {
        constructor() {
          super(...arguments);
          this.sceneManager = void 0;
          this.dialogManager = void 0;
        }

        onLoad() {
          this.sceneManager = (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).getInstance.ResolveSceneManager();
          this.dialogManager = (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).getInstance.ResolveDialogManager();
        }

        start() {
          this.node.on(Button.EventType.CLICK, this.BackAction, this);
        }

        BackAction(event, customEventData) {
          if (!this.dialogManager.CloseDialog()) {
            this.sceneManager.TransferBack();
          }
        }

      }) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8cf6ca44d7e04960913e375196d908271b777d54.js.map