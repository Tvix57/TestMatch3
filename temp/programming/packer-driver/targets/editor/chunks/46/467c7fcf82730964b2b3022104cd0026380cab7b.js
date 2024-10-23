System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AndroidApplicationConfig, Platform, ApplicationListener, EditorAppConfig, WebAppConfig, AppDevice, _crd;

  function _reportPossibleCrUseOfAndroidApplicationConfig(extras) {
    _reporterNs.report("AndroidApplicationConfig", "./native/AndroidApplicationConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlatform(extras) {
    _reporterNs.report("Platform", "./../Enums/ApplicationConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApplicationListener(extras) {
    _reporterNs.report("ApplicationListener", "./native/ApplicationListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEditorAppConfig(extras) {
    _reporterNs.report("EditorAppConfig", "./native/EditorAppConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebAppConfig(extras) {
    _reporterNs.report("WebAppConfig", "./native/WebAppConfig", _context.meta, extras);
  }

  _export("AppDevice", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AndroidApplicationConfig = _unresolved_2.AndroidApplicationConfig;
    }, function (_unresolved_3) {
      Platform = _unresolved_3.Platform;
    }, function (_unresolved_4) {
      ApplicationListener = _unresolved_4.ApplicationListener;
    }, function (_unresolved_5) {
      EditorAppConfig = _unresolved_5.EditorAppConfig;
    }, function (_unresolved_6) {
      WebAppConfig = _unresolved_6.WebAppConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5a90eKkdfVAp70DJnO7jW0Y", "AppDevice", undefined);

      _export("AppDevice", AppDevice = class AppDevice {
        constructor(platform) {
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

            case (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).Web:
              {}
              new (_crd && WebAppConfig === void 0 ? (_reportPossibleCrUseOfWebAppConfig({
                error: Error()
              }), WebAppConfig) : WebAppConfig)();

            default:
              {
                this._config = new (_crd && EditorAppConfig === void 0 ? (_reportPossibleCrUseOfEditorAppConfig({
                  error: Error()
                }), EditorAppConfig) : EditorAppConfig)();
              }
          }
        }

        GetApplicationUserId() {
          return this._config.GetApplicationUserId();
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

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=467c7fcf82730964b2b3022104cd0026380cab7b.js.map