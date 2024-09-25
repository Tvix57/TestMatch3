System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameState, SaveTimerExecutor, SaveContext, _crd;

  function _reportPossibleCrUseOfIAppTimer(extras) {
    _reporterNs.report("IAppTimer", "../Application/IAppTimer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../Game/GameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSaveDispatcher(extras) {
    _reporterNs.report("SaveDispatcher", "./SaveDispatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISaveListener(extras) {
    _reporterNs.report("ISaveListener", "./SaveInterfaces", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIStateSaver(extras) {
    _reporterNs.report("IStateSaver", "./SaveInterfaces", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSaveTimerExecutor(extras) {
    _reporterNs.report("SaveTimerExecutor", "./SaveTimerExecutor", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApplicationState(extras) {
    _reporterNs.report("ApplicationState", "./State", _context.meta, extras);
  }

  _export("SaveContext", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GameState = _unresolved_2.GameState;
    }, function (_unresolved_3) {
      SaveTimerExecutor = _unresolved_3.SaveTimerExecutor;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ef4bbOwUIpLNYKDsccFz5cv", "SaveContext", undefined);
      /**
       * 
       * SaveContext.ts
       * db://assets/Scripts/Save/SaveContext.ts
       *
       */


      _export("SaveContext", SaveContext = class SaveContext {
        constructor(saver, saveDispatcher, timer) {
          this._timeSaveExecutor = void 0;
          this._state = void 0;
          this.saver = saver;
          this.saveDispatcher = saveDispatcher;
          this.timer = timer;
          this._timeSaveExecutor = new (_crd && SaveTimerExecutor === void 0 ? (_reportPossibleCrUseOfSaveTimerExecutor({
            error: Error()
          }), SaveTimerExecutor) : SaveTimerExecutor)(timer, saveDispatcher, 60);
          saveDispatcher.AddHandler(this);
          this._state = this.saver.LoadState();
        }

        WillSave() {}

        DoSave() {
          this.saver.SaveState(this._state);
        }

        IsFirstLaunch() {
          var _this$_state$isFirstL, _this$_state;

          return (_this$_state$isFirstL = (_this$_state = this._state) == null ? void 0 : _this$_state.isFirstLaunch) != null ? _this$_state$isFirstL : true;
        }

        HasGame() {
          if (this._state) {
            return this._state.HasGame() && !this._state.IsGameFinished();
          }

          return false;
        }

        GetCurrentSaveState() {
          return this._state;
        }

        CreateNewGameState(name, tutor) {
          if (this._state.HasHardsave()) {
            var copyState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).Load(JSON.parse(JSON.stringify(this._state.hardSave.toJSON())));
            copyState.name = name;
            copyState.isTutorial = false;
            this._state.gameState = copyState;
          } else {
            var nextDay = this.timer.GetTime();
            this._state.gameState = new (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState)(2000, 17, 100 * 12, name, tutor, undefined, 0, nextDay);
          }

          this._state.storeState.ResetTemporalyTimer();

          this.saver.SaveState(this._state);
          return this._state;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eec285b8e36c70f80047e339f5b513ed3b7c8421.js.map