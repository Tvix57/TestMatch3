System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameSaveListener, _crd;

  function _reportPossibleCrUseOfAppDevice(extras) {
    _reporterNs.report("AppDevice", "../Application/AppDevice", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIApplicationHandler(extras) {
    _reporterNs.report("IApplicationHandler", "../Application/AppDevice", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameLogic(extras) {
    _reporterNs.report("GameLogic", "./GameLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSaveDispatcher(extras) {
    _reporterNs.report("SaveDispatcher", "../Save/SaveDispatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISaveListener(extras) {
    _reporterNs.report("ISaveListener", "../Save/SaveInterfaces", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApplicationState(extras) {
    _reporterNs.report("ApplicationState", "../Save/State", _context.meta, extras);
  }

  _export("GameSaveListener", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "53c7bN6YpZCRJbifOfNxk52", "GameSaveListener", undefined);

      _export("GameSaveListener", GameSaveListener = class GameSaveListener {
        constructor(_saveDisp, _logic, _device, _state) {
          this._saveDisp = _saveDisp;
          this._logic = _logic;
          this._device = _device;
          this._state = _state;

          _saveDisp.AddHandler(this);

          _device.AddHandler(this);
        }

        OnExitApplication() {
          this._saveDisp.Save();
        }

        RemoveHandler() {
          this._saveDisp.RemoveHandler(this);

          this._device.RemoveHandler(this);
        }

        WillSave() {
          this._logic.WillSave(this._state.gameState);
        }

        OnPauseApplication() {
          this._saveDisp.Save();
        }

        ManualSave() {
          this._saveDisp.Save();
        }

        OnResumeApplication() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6e9105e8b0f94f073107845df773383dcbfb3d82.js.map