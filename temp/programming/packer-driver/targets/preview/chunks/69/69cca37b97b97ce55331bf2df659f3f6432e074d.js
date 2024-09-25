System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AndroidSaveState, EditorSaveState, SaveContext, SaveDispatcher, Platform, AppState, _crd;

  function _reportPossibleCrUseOfAndroidSaveState(extras) {
    _reporterNs.report("AndroidSaveState", "../Save/Android/AndroidSaveState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEditorSaveState(extras) {
    _reporterNs.report("EditorSaveState", "../Save/Editor/EditorSaveState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSaveContext(extras) {
    _reporterNs.report("SaveContext", "../Save/SaveContext", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSaveDispatcher(extras) {
    _reporterNs.report("SaveDispatcher", "../Save/SaveDispatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIStateSaver(extras) {
    _reporterNs.report("IStateSaver", "../Save/SaveInterfaces", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlatform(extras) {
    _reporterNs.report("Platform", "./ApplicationConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAppTimer(extras) {
    _reporterNs.report("IAppTimer", "./IAppTimer", _context.meta, extras);
  }

  _export("AppState", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AndroidSaveState = _unresolved_2.AndroidSaveState;
    }, function (_unresolved_3) {
      EditorSaveState = _unresolved_3.EditorSaveState;
    }, function (_unresolved_4) {
      SaveContext = _unresolved_4.SaveContext;
    }, function (_unresolved_5) {
      SaveDispatcher = _unresolved_5.SaveDispatcher;
    }, function (_unresolved_6) {
      Platform = _unresolved_6.Platform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "10639u8bNtPzoG+tvlC+GDk", "AppState", undefined);
      /**
       * 
       * AppState.ts
       * db://assets/Scripts/Application/AppState.ts
       *
       */


      _export("AppState", AppState = class AppState {
        constructor(platform, timer, prefferedLang) {
          this._platformSaver = void 0;
          this._context = void 0;
          this._saveDispatcher = void 0;

          switch (platform) {
            case (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).Android:
              {
                this._platformSaver = new (_crd && AndroidSaveState === void 0 ? (_reportPossibleCrUseOfAndroidSaveState({
                  error: Error()
                }), AndroidSaveState) : AndroidSaveState)(prefferedLang);
                break;
              }

            case (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).Ios:
              {}

            default:
              {
                this._platformSaver = new (_crd && EditorSaveState === void 0 ? (_reportPossibleCrUseOfEditorSaveState({
                  error: Error()
                }), EditorSaveState) : EditorSaveState)();
              }
          }

          this._saveDispatcher = new (_crd && SaveDispatcher === void 0 ? (_reportPossibleCrUseOfSaveDispatcher({
            error: Error()
          }), SaveDispatcher) : SaveDispatcher)();
          this._context = new (_crd && SaveContext === void 0 ? (_reportPossibleCrUseOfSaveContext({
            error: Error()
          }), SaveContext) : SaveContext)(this._platformSaver, this._saveDispatcher, timer);
        }

        ResolveSaveContext() {
          return this._context;
        }

        ResolveSaveDispatcher() {
          return this._saveDispatcher;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=69cca37b97b97ce55331bf2df659f3f6432e074d.js.map