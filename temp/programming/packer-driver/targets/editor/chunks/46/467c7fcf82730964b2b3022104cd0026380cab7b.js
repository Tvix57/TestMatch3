System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AndroidNoticationScheduler, EditorNoticationScheduler, AndroidApplicationConfig, Platform, ApplicationListener, EditorAppConfig, AppDevice, _crd;

  function _reportPossibleCrUseOfAndroidNoticationScheduler(extras) {
    _reporterNs.report("AndroidNoticationScheduler", "../Notifications/Android/AndroidNoticationScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEditorNoticationScheduler(extras) {
    _reporterNs.report("EditorNoticationScheduler", "../Notifications/Editor/EditorNoticationScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfINoticationScheduler(extras) {
    _reporterNs.report("INoticationScheduler", "../Notifications/INoticationScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAndroidApplicationConfig(extras) {
    _reporterNs.report("AndroidApplicationConfig", "./Android/AndroidApplicationConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlatform(extras) {
    _reporterNs.report("Platform", "./ApplicationConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApplicationListener(extras) {
    _reporterNs.report("ApplicationListener", "./Editor/ApplicationListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEditorAppConfig(extras) {
    _reporterNs.report("EditorAppConfig", "./Editor/EditorAppConfig", _context.meta, extras);
  }

  _export("AppDevice", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AndroidNoticationScheduler = _unresolved_2.AndroidNoticationScheduler;
    }, function (_unresolved_3) {
      EditorNoticationScheduler = _unresolved_3.EditorNoticationScheduler;
    }, function (_unresolved_4) {
      AndroidApplicationConfig = _unresolved_4.AndroidApplicationConfig;
    }, function (_unresolved_5) {
      Platform = _unresolved_5.Platform;
    }, function (_unresolved_6) {
      ApplicationListener = _unresolved_6.ApplicationListener;
    }, function (_unresolved_7) {
      EditorAppConfig = _unresolved_7.EditorAppConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5a90eKkdfVAp70DJnO7jW0Y", "AppDevice", undefined);
      /**
       * 
       * AppDevice.ts
       * db://assets/Scripts/Application/AppDevice.ts
       *
       */


      _export("AppDevice", AppDevice = class AppDevice {
        constructor(platform) {
          this._scheduler = void 0;
          this._app = void 0;
          this._config = void 0;
          this._app = new (_crd && ApplicationListener === void 0 ? (_reportPossibleCrUseOfApplicationListener({
            error: Error()
          }), ApplicationListener) : ApplicationListener)();

          switch (platform) {
            case (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).Android:
              {
                this._scheduler = new (_crd && AndroidNoticationScheduler === void 0 ? (_reportPossibleCrUseOfAndroidNoticationScheduler({
                  error: Error()
                }), AndroidNoticationScheduler) : AndroidNoticationScheduler)("com/grit/fftc/notifications/Scheduler");
                this._config = new (_crd && AndroidApplicationConfig === void 0 ? (_reportPossibleCrUseOfAndroidApplicationConfig({
                  error: Error()
                }), AndroidApplicationConfig) : AndroidApplicationConfig)();
                break;
              }

            case (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).Ios:
              {}
            //break;

            default:
              {
                this._scheduler = new (_crd && EditorNoticationScheduler === void 0 ? (_reportPossibleCrUseOfEditorNoticationScheduler({
                  error: Error()
                }), EditorNoticationScheduler) : EditorNoticationScheduler)();
                this._config = new (_crd && EditorAppConfig === void 0 ? (_reportPossibleCrUseOfEditorAppConfig({
                  error: Error()
                }), EditorAppConfig) : EditorAppConfig)();
              }
          }
        }

        GetApplicationUserId() {
          return this._config.GetApplicationUserId();
        }

        GetPreferredLanguage(langs) {
          return this._config.GetPreferredLanguage(langs);
        }

        GetDevice() {
          return this._config;
        }

        AddHandler(handler) {
          this._app.AddHandler(handler);
        }

        RemoveHandler(handler) {
          this._app.RemoveHandler(handler);
        }

        ResolveScheduler() {
          return this._scheduler;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=467c7fcf82730964b2b3022104cd0026380cab7b.js.map