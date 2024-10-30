System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AbstractDispatcher, FieldController, FieldGenerator, FieldListener, FieldManager, log, Field, _crd;

  function _reportPossibleCrUseOfBallColor(extras) {
    _reporterNs.report("BallColor", "../Enums/BallColor", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../Session/GameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbstractDispatcher(extras) {
    _reporterNs.report("AbstractDispatcher", "../Utils/Dispatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFieldController(extras) {
    _reporterNs.report("FieldController", "./FieldController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFieldGenerator(extras) {
    _reporterNs.report("FieldGenerator", "./FieldGenerator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFieldListener(extras) {
    _reporterNs.report("FieldListener", "./FieldListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFieldManager(extras) {
    _reporterNs.report("FieldManager", "./FieldManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatsInfo(extras) {
    _reporterNs.report("GameStatsInfo", "./GameStatsInfo", _context.meta, extras);
  }

  _export("Field", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
    }, function (_unresolved_2) {
      AbstractDispatcher = _unresolved_2.AbstractDispatcher;
    }, function (_unresolved_3) {
      FieldController = _unresolved_3.FieldController;
    }, function (_unresolved_4) {
      FieldGenerator = _unresolved_4.FieldGenerator;
    }, function (_unresolved_5) {
      FieldListener = _unresolved_5.FieldListener;
    }, function (_unresolved_6) {
      FieldManager = _unresolved_6.FieldManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6521eNbYMNPc5xb3oMLLJMi", "Field", undefined);

      __checkObsolete__(['log']);

      _export("Field", Field = class Field extends (_crd && AbstractDispatcher === void 0 ? (_reportPossibleCrUseOfAbstractDispatcher({
        error: Error()
      }), AbstractDispatcher) : AbstractDispatcher) {
        constructor(_state, field) {
          super();
          this.fieldGenerator = void 0;
          this.fieldManager = void 0;
          this.fieldListener = void 0;
          this.fieldController = void 0;
          this._state = _state;
          this.field = field;
          this.fieldGenerator = new (_crd && FieldGenerator === void 0 ? (_reportPossibleCrUseOfFieldGenerator({
            error: Error()
          }), FieldGenerator) : FieldGenerator)(this.field);
          this.fieldManager = new (_crd && FieldManager === void 0 ? (_reportPossibleCrUseOfFieldManager({
            error: Error()
          }), FieldManager) : FieldManager)(this.field);
          this.fieldListener = new (_crd && FieldListener === void 0 ? (_reportPossibleCrUseOfFieldListener({
            error: Error()
          }), FieldListener) : FieldListener)(this.field);
          this.fieldController = new (_crd && FieldController === void 0 ? (_reportPossibleCrUseOfFieldController({
            error: Error()
          }), FieldController) : FieldController)(this.field);

          if (this.field.length == 0) {
            this.fieldGenerator.GenerateNewField();
          }
        }

        GetField() {
          return this.field;
        }

        OnBallClick(coord) {
          const addScore = this.fieldManager.CheckFromCoord(coord);

          if (addScore.length != 0) {
            this.addScore(addScore.length);
            this.fieldController.RemoveFromCoord(addScore);

            this._dispatcher.Post(h => h.UpdateField == null ? void 0 : h.UpdateField([...this.field], this.dropDownBalls.bind(this)));
          }
        }

        dropDownBalls() {
          log("dropDownBalls");
          this.fieldController.DropDownBalls();

          this._dispatcher.Post(h => h.UpdateField == null ? void 0 : h.UpdateField([...this.field], this.checkEndGame.bind(this)));
        }

        checkEndGame() {
          log("checkEndGame");

          if (!this.fieldListener.CheckAvailableOption()) {
            //// check available shuffle
            this._dispatcher.Post(h => h.EndGame({
              name: this._state.name,
              score: this._state.score
            }));
          }
        }

        addScore(score) {
          this._state.score += score;

          this._dispatcher.Post(h => h.NewScore == null ? void 0 : h.NewScore(this._state.score));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=abc1a0f915410d5f9b93709a80fc68f41db0554d.js.map