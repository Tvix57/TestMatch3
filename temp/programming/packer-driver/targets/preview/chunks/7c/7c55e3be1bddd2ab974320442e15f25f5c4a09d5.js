System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, native, AndroidApplicationConfig, _crd;

  function _reportPossibleCrUseOfIDeviceConfig(extras) {
    _reporterNs.report("IDeviceConfig", "../AppDevice", _context.meta, extras);
  }

  _export("AndroidApplicationConfig", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      native = _cc.native;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "58c0cUeBhNBHYYeL6wCtE54", "AndroidApplicationConfig", undefined);
      /**
       * 
       * AndroidApplicationConfig.ts
       * db://assets/Scripts/Application/Android/AndroidApplicationConfig.ts
       *
       */


      __checkObsolete__(['native']);

      _export("AndroidApplicationConfig", AndroidApplicationConfig = class AndroidApplicationConfig {
        GetApplicationUserId() {
          return native.reflection.callStaticMethod("com/grit/fftc/utils/ApplicationInfo", "getUserId", "()Ljava/lang/String;");
        }

        GetVersion() {
          return native.reflection.callStaticMethod("com/grit/fftc/utils/ApplicationInfo", "getVersion", "()Ljava/lang/String;");
        }

        GetApplicationName() {
          return native.reflection.callStaticMethod("com/grit/fftc/utils/ApplicationInfo", "getAppName", "()Ljava/lang/String;");
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7c55e3be1bddd2ab974320442e15f25f5c4a09d5.js.map