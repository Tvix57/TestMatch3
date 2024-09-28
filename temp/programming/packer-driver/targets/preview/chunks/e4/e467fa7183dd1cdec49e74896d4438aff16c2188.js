System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, AudioType;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0d246sN7y1BpYVaJZY2vrqX", "AudioType", undefined);

      _export("AudioType", AudioType = /*#__PURE__*/function (AudioType) {
        AudioType[AudioType["SOUND"] = 0] = "SOUND";
        AudioType[AudioType["MUSIC"] = 1] = "MUSIC";
        return AudioType;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e467fa7183dd1cdec49e74896d4438aff16c2188.js.map