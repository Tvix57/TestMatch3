System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AdsState, GameState, StoreState, IState, SettingsState, StatisticState, AppsflyerState, OfferState, ApplicationState, _crd;

  function _reportPossibleCrUseOfAdsState(extras) {
    _reporterNs.report("AdsState", "../Ads/AdsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../Game/GameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreState(extras) {
    _reporterNs.report("StoreState", "../Store/StoreState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIState(extras) {
    _reporterNs.report("IState", "./SaveInterfaces", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSettingsState(extras) {
    _reporterNs.report("SettingsState", "../Settings/SettingsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStatisticState(extras) {
    _reporterNs.report("StatisticState", "../Statistic/StatisticState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppsflyerState(extras) {
    _reporterNs.report("AppsflyerState", "../Statistic/AppsflyerState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOfferState(extras) {
    _reporterNs.report("OfferState", "../Offers/OfferState", _context.meta, extras);
  }

  _export("ApplicationState", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AdsState = _unresolved_2.AdsState;
    }, function (_unresolved_3) {
      GameState = _unresolved_3.GameState;
    }, function (_unresolved_4) {
      StoreState = _unresolved_4.StoreState;
    }, function (_unresolved_5) {
      IState = _unresolved_5.IState;
    }, function (_unresolved_6) {
      SettingsState = _unresolved_6.SettingsState;
    }, function (_unresolved_7) {
      StatisticState = _unresolved_7.StatisticState;
    }, function (_unresolved_8) {
      AppsflyerState = _unresolved_8.AppsflyerState;
    }, function (_unresolved_9) {
      OfferState = _unresolved_9.OfferState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "44478dRJq9KTo0txxEwOo8v", "State", undefined);
      /**
       * 
       * State.ts
       * db://assets/Scripts/Save/State.ts
       *
       */


      _export("ApplicationState", ApplicationState = class ApplicationState extends (_crd && IState === void 0 ? (_reportPossibleCrUseOfIState({
        error: Error()
      }), IState) : IState) {
        constructor(version, lang, gameState, adsState, storeState, offerState, settings, statistic, appsflyerState, firstLaunch, firstLaunchTime, hardmodeDeadline, hardSave, isRated) {
          super();
          this.gameState = void 0;
          this.adsState = void 0;
          this.storeState = void 0;
          this.settings = void 0;
          this.statistic = void 0;
          this.appsflyerState = void 0;
          this.isFirstLaunch = void 0;
          this.firstLaunchTime = void 0;
          this.hardmodeDeadline = void 0;
          this.hardSave = void 0;
          this.isRated = void 0;
          this.version = void 0;
          this.version = version;
          this.isFirstLaunch = firstLaunch != null ? firstLaunch : true;
          this.firstLaunchTime = firstLaunchTime != null ? firstLaunchTime : new Date();
          this.gameState = gameState;
          this.adsState = adsState != null ? adsState : new (_crd && AdsState === void 0 ? (_reportPossibleCrUseOfAdsState({
            error: Error()
          }), AdsState) : AdsState)();
          this.storeState = storeState != null ? storeState : new (_crd && StoreState === void 0 ? (_reportPossibleCrUseOfStoreState({
            error: Error()
          }), StoreState) : StoreState)(this.firstLaunchTime);
          this.settings = settings != null ? settings : new (_crd && SettingsState === void 0 ? (_reportPossibleCrUseOfSettingsState({
            error: Error()
          }), SettingsState) : SettingsState)(lang);
          this.statistic = statistic != null ? statistic : new (_crd && StatisticState === void 0 ? (_reportPossibleCrUseOfStatisticState({
            error: Error()
          }), StatisticState) : StatisticState)();
          this.appsflyerState = appsflyerState != null ? appsflyerState : new (_crd && AppsflyerState === void 0 ? (_reportPossibleCrUseOfAppsflyerState({
            error: Error()
          }), AppsflyerState) : AppsflyerState)();
          this.hardmodeDeadline = hardmodeDeadline != null ? hardmodeDeadline : new Date(0);
          this.hardSave = hardSave;
          this.isRated = isRated != null ? isRated : false;
        }

        HasGame() {
          return this.gameState != null;
        }

        IsGameFinished() {
          var _this$gameState$isFin, _this$gameState;

          return (_this$gameState$isFin = (_this$gameState = this.gameState) == null ? void 0 : _this$gameState.isFinished) != null ? _this$gameState$isFin : true;
        }

        HasHardsave() {
          return this.hardSave != undefined;
        }

        Save() {
          return JSON.stringify(this);
        }

        static Load(input, lang) {
          var obj = JSON.parse(input);

          if (!("isFirstLaunch" in obj)) {
            return new ApplicationState(1, lang);
          }

          return new ApplicationState(obj.version, "en", (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).Load(obj.gameState), (_crd && AdsState === void 0 ? (_reportPossibleCrUseOfAdsState({
            error: Error()
          }), AdsState) : AdsState).Load(obj.adsState), (_crd && StoreState === void 0 ? (_reportPossibleCrUseOfStoreState({
            error: Error()
          }), StoreState) : StoreState).Load(obj.storeState), (_crd && OfferState === void 0 ? (_reportPossibleCrUseOfOfferState({
            error: Error()
          }), OfferState) : OfferState).Load(obj.offerState), (_crd && SettingsState === void 0 ? (_reportPossibleCrUseOfSettingsState({
            error: Error()
          }), SettingsState) : SettingsState).Load(obj.settings), (_crd && StatisticState === void 0 ? (_reportPossibleCrUseOfStatisticState({
            error: Error()
          }), StatisticState) : StatisticState).Load(obj.statistic), (_crd && AppsflyerState === void 0 ? (_reportPossibleCrUseOfAppsflyerState({
            error: Error()
          }), AppsflyerState) : AppsflyerState).Load(obj.appsflyerState), obj.firstLaunch, new Date(obj.firstLaunchTime), new Date(obj.hardmodeDeadline), obj.hardSave ? (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).Load(obj.hardSave) : undefined, obj.isRated);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=771d75b289c20130a165444119ede10bb3eb3535.js.map