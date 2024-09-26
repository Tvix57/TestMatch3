System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, EditorAppConfig, _crd;

  function _reportPossibleCrUseOfIDeviceConfig(extras) {
    _reporterNs.report("IDeviceConfig", "../AppDevice", _context.meta, extras);
  }

  _export("EditorAppConfig", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2cf05LHR9NDjKElEHk0PSOJ", "EditorAppConfig", undefined);

      /**
       * 
       * EditorAppConfig.ts
       * db://assets/Scripts/Application/Editor/EditorAppConfig.ts
       *
       */
      __checkObsolete__(['log']);

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