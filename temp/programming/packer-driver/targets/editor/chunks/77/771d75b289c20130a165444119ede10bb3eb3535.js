System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameState, IState, ApplicationState, _crd;

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../Session/GameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIState(extras) {
    _reporterNs.report("IState", "./SaveInterfaces", _context.meta, extras);
  }

  _export("ApplicationState", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GameState = _unresolved_2.GameState;
    }, function (_unresolved_3) {
      IState = _unresolved_3.IState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "44478dRJq9KTo0txxEwOo8v", "State", undefined);

      _export("ApplicationState", ApplicationState = class ApplicationState extends (_crd && IState === void 0 ? (_reportPossibleCrUseOfIState({
        error: Error()
      }), IState) : IState) {
        constructor(gameState, isFirstLaunch) {
          super();
          this.gameState = void 0;
          this.isFirstLaunch = void 0;
          this.gameState = gameState;
          this.isFirstLaunch = isFirstLaunch;
        }

        HasGame() {
          return this.gameState != null;
        }

        IsGameFinished() {
          var _this$gameState$isFin, _this$gameState;

          return (_this$gameState$isFin = (_this$gameState = this.gameState) == null ? void 0 : _this$gameState.isFinished) != null ? _this$gameState$isFin : true;
        }

        Save() {
          return JSON.stringify(this);
        }

        static Load(input) {
          let obj = JSON.parse(input);

          if (!("isFirstLaunch" in obj)) {
            return new ApplicationState();
          }

          return new ApplicationState((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).Load(obj.gameState));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=771d75b289c20130a165444119ede10bb3eb3535.js.map