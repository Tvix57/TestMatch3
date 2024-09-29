System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AppRoot, GameFactory, _crd;

  function _reportPossibleCrUseOfAppRoot(extras) {
    _reporterNs.report("AppRoot", "../Application/AppRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppState(extras) {
    _reporterNs.report("AppState", "../Application/AppState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApplicationState(extras) {
    _reporterNs.report("ApplicationState", "../Save/State", _context.meta, extras);
  }

  _export("GameFactory", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AppRoot = _unresolved_2.AppRoot;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fcc19JIqelHwLMwnrLY4wKN", "GameFactory", undefined);

      _export("GameFactory", GameFactory = class GameFactory {
        constructor(saveContext) {
          this.saveContext = saveContext;
        }

        CreateGame(name) {
          this.createNewGame(this.saveContext.ResolveSaveContext().CreateNewGameState(name));
        }

        LoadGame() {
          this.createNewGame(this.saveContext.ResolveSaveContext().GetCurrentSaveState());
        }

        createNewGame(state) {
          if ((_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).getInstance.ResolveGameContext().IsGameActive()) {
            (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
              error: Error()
            }), AppRoot) : AppRoot).getInstance.ResolveGameContext().FinishGame();
            (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
              error: Error()
            }), AppRoot) : AppRoot).getInstance.ResolveGameContext().ClearGame();
          }

          (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).getInstance.ResolveGameContext().CreateGame((_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).getInstance.ResolveTimer(), (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).getInstance.ResovleSaveState().ResolveSaveDispatcher(), (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).getInstance.ResolveSceneManager(), state);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=df89741321dfcad4628d9c8ac7ba5e156c19290f.js.map