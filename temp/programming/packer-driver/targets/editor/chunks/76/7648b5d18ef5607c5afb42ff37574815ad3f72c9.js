System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, WebAppConfig, _crd;

  function _reportPossibleCrUseOfIDeviceConfig(extras) {
    _reporterNs.report("IDeviceConfig", "../AppDevice", _context.meta, extras);
  }

  _export("WebAppConfig", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "23ab7NWX61O+52/WyAqqnFt", "WebAppConfig", undefined);

      _export("WebAppConfig", WebAppConfig = class WebAppConfig {
        GetApplicationUserId() {
          throw new Error("Method not implemented.");
        }

        GetVersion() {
          throw new Error("Method not implemented.");
        }

        GetApplicationName() {
          throw new Error("Method not implemented.");
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7648b5d18ef5607c5afb42ff37574815ad3f72c9.js.map