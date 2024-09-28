System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AnsverDialogComponent, DialogFactory, LocationType, GameoverListener, _crd;

  function _reportPossibleCrUseOfAnsverDialogComponent(extras) {
    _reporterNs.report("AnsverDialogComponent", "../Dialog/AnsverDialogComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDialogFactory(extras) {
    _reporterNs.report("DialogFactory", "../Dialog/DialogFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocationType(extras) {
    _reporterNs.report("LocationType", "../Enums/LocationType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIFieldHandler(extras) {
    _reporterNs.report("IFieldHandler", "../Logic/Field", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatsInfo(extras) {
    _reporterNs.report("GameStatsInfo", "../Logic/GameStatsInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISceneManager(extras) {
    _reporterNs.report("ISceneManager", "../Scene/ISceneManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameLogic(extras) {
    _reporterNs.report("GameLogic", "./GameLogic", _context.meta, extras);
  }

  _export("GameoverListener", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AnsverDialogComponent = _unresolved_2.AnsverDialogComponent;
    }, function (_unresolved_3) {
      DialogFactory = _unresolved_3.DialogFactory;
    }, function (_unresolved_4) {
      LocationType = _unresolved_4.LocationType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cd607awZJNBIah3/fR8Jr90", "GameoverListener", undefined);

      _export("GameoverListener", GameoverListener = class GameoverListener {
        constructor(_gameLogic, _sceneManager) {
          this._dialogFactory = new (_crd && DialogFactory === void 0 ? (_reportPossibleCrUseOfDialogFactory({
            error: Error()
          }), DialogFactory) : DialogFactory)("Prefabs/Dialog/EndDialog");
          this._gameLogic = _gameLogic;
          this._sceneManager = _sceneManager;

          this._gameLogic.ResolveField().AddHandler(this);
        }

        NewGame(name) {}

        EndGame(info) {
          this.showEndDialog();
        }

        showEndDialog() {
          this._dialogFactory.CreateDialog().then(dialog => {
            dialog.getComponent(_crd && AnsverDialogComponent === void 0 ? (_reportPossibleCrUseOfAnsverDialogComponent({
              error: Error()
            }), AnsverDialogComponent) : AnsverDialogComponent).SetHandler(isAccept => {
              if (isAccept) {
                this._sceneManager.Transfer((_crd && LocationType === void 0 ? (_reportPossibleCrUseOfLocationType({
                  error: Error()
                }), LocationType) : LocationType).StartScene);
              } else {
                this._sceneManager.Transfer((_crd && LocationType === void 0 ? (_reportPossibleCrUseOfLocationType({
                  error: Error()
                }), LocationType) : LocationType).ScoreScene);
              }
            });
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=76cb67036cc5edaaf7aec909fff4334c7395c74b.js.map