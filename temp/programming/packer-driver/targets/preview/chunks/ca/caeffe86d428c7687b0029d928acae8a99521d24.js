System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, LocationType, _dec, _class, _crd, ccclass, property, StartSceneComponent;

  function _reportPossibleCrUseOfStartScenePresenter(extras) {
    _reporterNs.report("StartScenePresenter", "./StartScenePresenter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocationType(extras) {
    _reporterNs.report("LocationType", "../../Enums/LocationType", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      LocationType = _unresolved_2.LocationType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e8b1d7oWFlMmLb4SuxuL5cV", "StartSceneComponent", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StartSceneComponent", StartSceneComponent = (_dec = ccclass('StartSceneComponent'), _dec(_class = class StartSceneComponent extends Component {
        constructor() {
          super(...arguments);
          this.presenter = void 0;
        }

        onContinueClick() {
          var _this$presenter, _this$presenter2;

          (_this$presenter = this.presenter) == null ? void 0 : _this$presenter.LoadSave();
          (_this$presenter2 = this.presenter) == null ? void 0 : _this$presenter2.Transfer((_crd && LocationType === void 0 ? (_reportPossibleCrUseOfLocationType({
            error: Error()
          }), LocationType) : LocationType).GameScene);
        }

        onNewGameClick() {
          var _this$presenter3, _this$presenter4;

          (_this$presenter3 = this.presenter) == null ? void 0 : _this$presenter3.CreateNewField();
          (_this$presenter4 = this.presenter) == null ? void 0 : _this$presenter4.Transfer((_crd && LocationType === void 0 ? (_reportPossibleCrUseOfLocationType({
            error: Error()
          }), LocationType) : LocationType).GameScene);
        }

        onLeaderBoardClick() {
          var _this$presenter5;

          (_this$presenter5 = this.presenter) == null ? void 0 : _this$presenter5.Transfer((_crd && LocationType === void 0 ? (_reportPossibleCrUseOfLocationType({
            error: Error()
          }), LocationType) : LocationType).ScoreScene);
        }

        onExitClick() {
          var _this$presenter6;

          (_this$presenter6 = this.presenter) == null ? void 0 : _this$presenter6.ExitGame();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=caeffe86d428c7687b0029d928acae8a99521d24.js.map