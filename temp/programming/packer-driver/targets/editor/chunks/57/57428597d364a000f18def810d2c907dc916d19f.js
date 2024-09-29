System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, log, ApplicationState, GameState, EditorSaveState, _crd;

  function _reportPossibleCrUseOfApplicationState(extras) {
    _reporterNs.report("ApplicationState", "../State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIState(extras) {
    _reporterNs.report("IState", "../SaveInterfaces", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../../Session/GameState", _context.meta, extras);
  }

  _export("EditorSaveState", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
    }, function (_unresolved_2) {
      ApplicationState = _unresolved_2.ApplicationState;
    }, function (_unresolved_3) {
      GameState = _unresolved_3.GameState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9fc84GVz+xO9r8GkJyJG5vn", "EditorSaveState", undefined);
      /**
       * 
       * EditorSaveState.ts
       * db://assets/Scripts/Save/Editor/EditorSaveState.ts
       *
       */


      __checkObsolete__(['log']);

      _export("EditorSaveState", EditorSaveState = class EditorSaveState {
        constructor() {}

        LoadState() {
          return new (_crd && ApplicationState === void 0 ? (_reportPossibleCrUseOfApplicationState({
            error: Error()
          }), ApplicationState) : ApplicationState)(new (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState)(undefined, //name
          0, //score
          [{
            name: "Player1",
            score: 12
          }, {
            name: "Player2",
            score: 24
          }, {
            name: "Player3",
            score: 26
          }], //stats
          undefined, //field
          true), //gameState
          true);
        }

        SaveState(state) {
          let saveStr = state.Save();
          log("EditorSaveState: " + saveStr);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=57428597d364a000f18def810d2c907dc916d19f.js.map