System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameContext, AppAudio, AppDevice, AppRoot, _crd;

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
    _reporterNs.report("Platform", "./../Enums/ApplicationConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISceneManager(extras) {
    _reporterNs.report("ISceneManager", "../Scene/ISceneManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAudioManager(extras) {
    _reporterNs.report("IAudioManager", "./ApplicationInterfaces", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAppTimer(extras) {
    _reporterNs.report("IAppTimer", "./IAppTimer", _context.meta, extras);
  }

  _export("AppRoot", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GameContext = _unresolved_2.GameContext;
    }, function (_unresolved_3) {
      AppAudio = _unresolved_3.AppAudio;
    }, function (_unresolved_4) {
      AppDevice = _unresolved_4.AppDevice;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c8da5/Oh6xNcJhYuVtyQBbQ", "AppRoot", undefined);

      _export("AppRoot", AppRoot = class AppRoot {
        constructor() {
          this._gameContext = void 0;
          this._scene = void 0;
          this._soundManager = void 0;
          this._sound = void 0;
          this._device = void 0;
          this._saveState = void 0;
          this._timer = void 0;
          this._platform = void 0;
        }

        static get getInstance() {
          if (this.instance == null) {
            this.instance = new AppRoot();
          }

          return this.instance;
        }

        Init(platform, scene, soundManager, timer) {
          this._platform = platform;
          this._scene = scene;
          this._soundManager = soundManager;
          this._timer = timer;
        }

        onLoad() {
          this._device = new (_crd && AppDevice === void 0 ? (_reportPossibleCrUseOfAppDevice({
            error: Error()
          }), AppDevice) : AppDevice)(this._platform);
          this._sound = new (_crd && AppAudio === void 0 ? (_reportPossibleCrUseOfAppAudio({
            error: Error()
          }), AppAudio) : AppAudio)(this._soundManager);
          this._gameContext = new (_crd && GameContext === void 0 ? (_reportPossibleCrUseOfGameContext({
            error: Error()
          }), GameContext) : GameContext)(this._scene, this._device);
        }

        ResolveGameContext() {
          return this._gameContext;
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

        ResolveTimer() {
          return this._timer;
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