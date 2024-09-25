System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameSaveListener, _crd;

  function _reportPossibleCrUseOfAdsContext(extras) {
    _reporterNs.report("AdsContext", "../Ads/AdsContext", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppDevice(extras) {
    _reporterNs.report("AppDevice", "../Application/AppDevice", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIApplicationHandler(extras) {
    _reporterNs.report("IApplicationHandler", "../Application/AppDevice", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameLogic(extras) {
    _reporterNs.report("GameLogic", "../Game/GameLogic", _context.meta, extras);
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

  function _reportPossibleCrUseOfStatisticAgregator(extras) {
    _reporterNs.report("StatisticAgregator", "../Statistic/StatisticAgregator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreContext(extras) {
    _reporterNs.report("StoreContext", "../Store/StoreContext", _context.meta, extras);
  }

  function _reportPossibleCrUseOfITutorialHandler(extras) {
    _reporterNs.report("ITutorialHandler", "../Tutorial/TutorialContext", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTutorialContext(extras) {
    _reporterNs.report("TutorialContext", "../Tutorial/TutorialContext", _context.meta, extras);
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
      /**
       * 
       * GameSaveListener.ts
       * db://assets/Scripts/Session/GameSaveListener.ts
       *
       */


      _export("GameSaveListener", GameSaveListener = class GameSaveListener {
        constructor(_saveDisp, _logic, _adsContext, _store, _tutorial, _device, _statistic, _state) {
          this._saveDisp = _saveDisp;
          this._logic = _logic;
          this._adsContext = _adsContext;
          this._store = _store;
          this._tutorial = _tutorial;
          this._device = _device;
          this._statistic = _statistic;
          this._state = _state;

          _saveDisp.AddHandler(this);

          _device.AddHandler(this);

          _tutorial.AddHandler(this);
        }

        RemoveHandler() {
          this._saveDisp.RemoveHandler(this);

          this._device.RemoveHandler(this);

          this._tutorial.RemoveHandler(this);
        }

        WillSave() {
          this._logic.WillSave(this._state.gameState);

          this._adsContext.WillSave(this._state.adsState);

          this._store.WillSave(this._state.storeState);

          this._statistic.WillSave();

          this._state.gameState.tutorialStages = this._tutorial.ResolveTutorialProgress().GetAll();
        }

        OnPauseApplication() {
          this._saveDisp.Save();
        }

        OnStepChanged() {
          if (this._tutorial.GetRunningStage() == undefined) this._saveDisp.Save();
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