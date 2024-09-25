System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, log, ApplicationState, GameState, Types, AdsState, StoreState, SettingsState, StatisticState, EditorSaveState, _crd;

  function _reportPossibleCrUseOfApplicationState(extras) {
    _reporterNs.report("ApplicationState", "../State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIState(extras) {
    _reporterNs.report("IState", "../SaveInterfaces", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../../Game/GameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTypes(extras) {
    _reporterNs.report("Types", "../../Game/Types", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdsState(extras) {
    _reporterNs.report("AdsState", "../../Ads/AdsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreState(extras) {
    _reporterNs.report("StoreState", "../../Store/StoreState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSettingsState(extras) {
    _reporterNs.report("SettingsState", "../../Settings/SettingsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStatisticState(extras) {
    _reporterNs.report("StatisticState", "../../Statistic/StatisticState", _context.meta, extras);
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
    }, function (_unresolved_4) {
      Types = _unresolved_4.Types;
    }, function (_unresolved_5) {
      AdsState = _unresolved_5.AdsState;
    }, function (_unresolved_6) {
      StoreState = _unresolved_6.StoreState;
    }, function (_unresolved_7) {
      SettingsState = _unresolved_7.SettingsState;
    }, function (_unresolved_8) {
      StatisticState = _unresolved_8.StatisticState;
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
          var gs = new (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState)(1000, //balance
          19, //age
          100 * 12, //life
          "NAWUHODONOSOR", false, //turor
          ["Accommodation", "Job1", "Food", "Clothes", "JobRequirements", "Family", "Slots", // "Business",
          "Quest", "Bank", "Happiness", "JobSpeedup", "Education", "BalanceInfo", // "FirstStar",
          "Meta", "GoToMinigameX2", "GoToMinigameCard" // "Age",
          ], //tutorialStages
          2, //dailyDay
          undefined, //dailyTriggeredTime
          undefined, //specialBonusTriggeredTime
          undefined, // startDate
          new Date(2024, 8, 2, 14, 0, 0, 0), // currentDate
          undefined, //  buffDate
          0, // stars
          10, //tickets
          // new Map([]),
          new Map([[(_crd && Types === void 0 ? (_reportPossibleCrUseOfTypes({
            error: Error()
          }), Types) : Types).Job, "Job1.4"], // [Types.AdditionalJob,"AdditionalJob1.2"],
          [(_crd && Types === void 0 ? (_reportPossibleCrUseOfTypes({
            error: Error()
          }), Types) : Types).Accommodation, "Accommodation1"], [(_crd && Types === void 0 ? (_reportPossibleCrUseOfTypes({
            error: Error()
          }), Types) : Types).Clothes, "Clothes2"], [(_crd && Types === void 0 ? (_reportPossibleCrUseOfTypes({
            error: Error()
          }), Types) : Types).Food, "Food2"], // [Types.Transport,"Transport1"],
          [(_crd && Types === void 0 ? (_reportPossibleCrUseOfTypes({
            error: Error()
          }), Types) : Types).Marital, "Marital1"] // [Types.Job,"Job2.1"],
          ]), // inventory
          new Map([["Job1.1", 0], ["Job1.2", 0], ["Job1.3", 0], ["Job1.4", 0], ["Education1", 0], ["Education2", 0]]), //exp
          ["Education1", "Education2", "Education3"], //educations
          undefined, //business
          undefined, //businessUnlockDate
          undefined, //  investition
          undefined, // deposits
          new Map([[(_crd && Types === void 0 ? (_reportPossibleCrUseOfTypes({
            error: Error()
          }), Types) : Types).Happiness, 82], [(_crd && Types === void 0 ? (_reportPossibleCrUseOfTypes({
            error: Error()
          }), Types) : Types).Health, 90]]), // welfare
          undefined, //minigames
          ["QuestMain2", "QuestAdditional1.1", "QuestAdditional2.1"], // quests
          [], //collections
          undefined, //unlocked
          undefined, //officeTimer
          // undefined,
          [{
            picked: 2,
            variantsBuyed: [false, true, false]
          }, //"Office1",  
          {
            picked: 1,
            variantsBuyed: [true, false, false]
          }, //"Office2",  
          {
            picked: 2,
            variantsBuyed: [false, true, false]
          }, //"Office3",  
          {
            picked: 2,
            variantsBuyed: [false, true, false]
          }, //"Office4",  
          {
            picked: 2,
            variantsBuyed: [false, true, false]
          }, //"Office5",  
          {
            picked: 2,
            variantsBuyed: [false, true, false]
          }, //"Office6",  
          {
            picked: 2,
            variantsBuyed: [false, true, false]
          }, //"Interior.Office1",
          {
            picked: 2,
            variantsBuyed: [false, true, false]
          }, //"Interior.Office2",
          {
            picked: 2,
            variantsBuyed: [false, true, false]
          }, //"Interior.Office3",
          {
            picked: 2,
            variantsBuyed: [false, true, false]
          }, //"Interior.Office4",
          {
            picked: 2,
            variantsBuyed: [false, true, false]
          }, //"Interior.Office5",
          {
            picked: 2,
            variantsBuyed: [false, true, false]
          }, //"Exterior.Office1",
          {
            picked: 3,
            variantsBuyed: [false, true, false]
          }, //"Exterior.Office2",
          {
            picked: 2,
            variantsBuyed: [false, true, false]
          } //"Exterior.Office3",
          ], //officeInfo
          false, //officeIsNew
          false, //isHardmode
          {
            totalSlotSpins: 5250,
            totalX2MoneyWins: 45240,
            totalX2StarWins: 450400,
            totalX2TicketWins: 72525,
            totalCardsTicketWins: 555,
            totalCardsStarsWins: 555,
            maxBusinessLevel: 0,
            totalBusinessManagers: 0
          } //gameStats
          );
          var hs = new (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState)(1000, 17, 75 * 12, undefined, false, undefined, 0, undefined, undefined, undefined, undefined, undefined, 16, 228);
          var date = new Date();
          date.setMinutes(date.getMinutes() - 59);
          return new (_crd && ApplicationState === void 0 ? (_reportPossibleCrUseOfApplicationState({
            error: Error()
          }), ApplicationState) : ApplicationState)(1, //version
          "ru", //lang
          gs, //gameState
          new (_crd && AdsState === void 0 ? (_reportPossibleCrUseOfAdsState({
            error: Error()
          }), AdsState) : AdsState)(99, 280000), //adsState
          new (_crd && StoreState === void 0 ? (_reportPossibleCrUseOfStoreState({
            error: Error()
          }), StoreState) : StoreState)(date, [""]), //storeState
          undefined, //offer
          new (_crd && SettingsState === void 0 ? (_reportPossibleCrUseOfSettingsState({
            error: Error()
          }), SettingsState) : SettingsState)("ru", true, true, true), //settings
          new (_crd && StatisticState === void 0 ? (_reportPossibleCrUseOfStatisticState({
            error: Error()
          }), StatisticState) : StatisticState)(undefined, undefined, undefined, undefined, undefined, undefined, undefined, 2), //statisticState
          undefined, //appsflyerState
          undefined, //firstLaunch
          undefined, //firstLaunchTime
          undefined, //hardDeadline
          undefined, //hs                                 //hardSave
          false);
        }

        SaveState(state) {
          var saveStr = state.Save();
          log("EditorSaveState: " + saveStr);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=57428597d364a000f18def810d2c907dc916d19f.js.map