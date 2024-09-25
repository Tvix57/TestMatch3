System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Library, GameContext, AppAudio, AppDevice, AppRoot, _crd;

  function _reportPossibleCrUseOfNameConfig(extras) {
    _reporterNs.report("NameConfig", "../Settings/SettingsConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSettingsConfig(extras) {
    _reporterNs.report("SettingsConfig", "../Settings/SettingsConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLibrary(extras) {
    _reporterNs.report("Library", "../Settings/Library", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameContext(extras) {
    _reporterNs.report("GameContext", "../Session/GameContext", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppAudio(extras) {
    _reporterNs.report("AppAudio", "./AppAudio", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppDevice(extras) {
    _reporterNs.report("AppDevice", "./AppDevice", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppState(extras) {
    _reporterNs.report("AppState", "./AppState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlatform(extras) {
    _reporterNs.report("Platform", "./ApplicationConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISceneManager(extras) {
    _reporterNs.report("ISceneManager", "../Scene/ISceneManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAudioManager(extras) {
    _reporterNs.report("IAudioManager", "./ApplicationInterfaces", _context.meta, extras);
  }

  _export("AppRoot", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Library = _unresolved_2.Library;
    }, function (_unresolved_3) {
      GameContext = _unresolved_3.GameContext;
    }, function (_unresolved_4) {
      AppAudio = _unresolved_4.AppAudio;
    }, function (_unresolved_5) {
      AppDevice = _unresolved_5.AppDevice;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c8da5/Oh6xNcJhYuVtyQBbQ", "AppRoot", undefined);

      _export("AppRoot", AppRoot = class AppRoot {
        constructor() {
          this._gameContext = void 0;
          this._library = void 0;
          this._scene = void 0;
          this._soundManager = void 0;
          this._sound = void 0;
          this._device = void 0;
          this._saveState = void 0;
          this._platform = void 0;
          this._settingsFile = void 0;
          this._namesFile = void 0;
        }

        static get getInstance() {
          if (this.instance == null) {
            this.instance = new AppRoot();
          }

          return this.instance;
        }

        Init(platform, scene, soundManager, settings, names) {
          this._platform = platform;
          this._scene = scene;
          this._soundManager = soundManager;
          this._settingsFile = settings;
          this._namesFile = names;
        }

        onLoad() {
          this._device = new (_crd && AppDevice === void 0 ? (_reportPossibleCrUseOfAppDevice({
            error: Error()
          }), AppDevice) : AppDevice)(this._platform); // this._saveState = new AppState( this._platform, this._timer, this._device.GetPreferredLanguage(this._localizationComponent.GetArrayOfLangs()) )

          this._library = new (_crd && Library === void 0 ? (_reportPossibleCrUseOfLibrary({
            error: Error()
          }), Library) : Library)(this._settingsFile);
          this._sound = new (_crd && AppAudio === void 0 ? (_reportPossibleCrUseOfAppAudio({
            error: Error()
          }), AppAudio) : AppAudio)(this._soundManager, this._saveState.ResolveSaveContext().GetCurrentSaveState().settings);
          this._gameContext = new (_crd && GameContext === void 0 ? (_reportPossibleCrUseOfGameContext({
            error: Error()
          }), GameContext) : GameContext)(this._scene, this._device);
        }

        GetNames() {
          return this._namesFile;
        }

        GetCurrentLang() {
          return this._saveState.ResolveSaveContext().GetCurrentSaveState().settings.lang;
        }

        ResolveGameContext() {
          return this._gameContext;
        }

        ResolveLibrary() {
          return this._library;
        }

        ResolveSceneManager() {
          return this._scene;
        }

        ResolveSound() {
          return this._sound;
        }

        ResolveDevice() {
          return this._device;
        }

        ResovleSaveState() {
          return this._saveState;
        }

      });

      AppRoot.instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9ec8eda8f55e566a0695a32ddf51eaf19c971742.js.map