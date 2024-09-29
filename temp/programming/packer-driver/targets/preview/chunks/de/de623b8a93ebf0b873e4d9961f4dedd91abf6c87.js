System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EditorAppConfig, _crd;

  function _reportPossibleCrUseOfIDeviceConfig(extras) {
    _reporterNs.report("IDeviceConfig", "../AppDevice", _context.meta, extras);
  }

  _export("EditorAppConfig", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2cf05LHR9NDjKElEHk0PSOJ", "EditorAppConfig", undefined);

      _export("EditorAppConfig", EditorAppConfig = class EditorAppConfig {
        GetApplicationUserId() {
          return "EditorAppConfig";
        }

        GetVersion() {
          return "current version";
        }

        GetApplicationName() {
          return "Application name";
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=de623b8a93ebf0b873e4d9961f4dedd91abf6c87.js.map