System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameLogic, GameoverListener, GameSaveListener, SessionDeviceListener, GameContext, _crd;

  function _reportPossibleCrUseOfGameLogic(extras) {
    _reporterNs.report("GameLogic", "./GameLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "./GameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameoverListener(extras) {
    _reporterNs.report("GameoverListener", "./GameoverListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApplicationState(extras) {
    _reporterNs.report("ApplicationState", "../Save/State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSaveDispatcher(extras) {
    _reporterNs.report("SaveDispatcher", "../Save/SaveDispatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSaveListener(extras) {
    _reporterNs.report("GameSaveListener", "./GameSaveListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSessionDeviceListener(extras) {
    _reporterNs.report("SessionDeviceListener", "./SessionDeviceListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISceneManager(extras) {
    _reporterNs.report("ISceneManager", "../Scene/ISceneManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppDevice(extras) {
    _reporterNs.report("AppDevice", "../Application/AppDevice", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAppTimer(extras) {
    _reporterNs.report("IAppTimer", "../Application/IAppTimer", _context.meta, extras);
  }

  _export("GameContext", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GameLogic = _unresolved_2.GameLogic;
    }, function (_unresolved_3) {
      GameoverListener = _unresolved_3.GameoverListener;
    }, function (_unresolved_4) {
      GameSaveListener = _unresolved_4.GameSaveListener;
    }, function (_unresolved_5) {
      SessionDeviceListener = _unresolved_5.SessionDeviceListener;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4273dV1hRFB8Iv5ONEWgPYn", "GameContext", undefined);

      _export("GameContext", GameContext = class GameContext {
        constructor(sceneManager, device) {
          this._logic = null;
          this._state = void 0;
          this._gameoverListener = null;
          this._saveListener = void 0;
          this._sessionDeviceListener = void 0;
          this.isGameActive = false;
          this.sceneManager = sceneManager;
          this.device = device;
        }

        CreateGame(timer, saveDisp, sceneManager, state) {
          this.isGameActive = true;
          this._state = state.gameState;
          this._logic = new (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic)(this._state);
          this._gameoverListener = new (_crd && GameoverListener === void 0 ? (_reportPossibleCrUseOfGameoverListener({
            error: Error()
          }), GameoverListener) : GameoverListener)(this._logic, sceneManager);
          this._saveListener = new (_crd && GameSaveListener === void 0 ? (_reportPossibleCrUseOfGameSaveListener({
            error: Error()
          }), GameSaveListener) : GameSaveListener)(saveDisp, this._logic, this.device, state);
          this._sessionDeviceListener = new (_crd && SessionDeviceListener === void 0 ? (_reportPossibleCrUseOfSessionDeviceListener({
            error: Error()
          }), SessionDeviceListener) : SessionDeviceListener)(this.device, this._logic);
        }

        FinishGame() {
          this._state.isFinished = true;
        }

        ClearGame() {
          this._saveListener.ManualSave();

          this._logic = null;
          this._gameoverListener = null;
          this.isGameActive = false;

          this._sessionDeviceListener.RemoveHandler();

          this._saveListener.RemoveHandler();

          this.sceneManager.RemoveAll();
        }

        IsGameActive() {
          return this.isGameActive;
        }

        ResolveGame() {
          return this._logic;
        }

        ResolveState() {
          return this._state;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a4df9ce64a683289daf02dc66d1dd03d0a03a461.js.map