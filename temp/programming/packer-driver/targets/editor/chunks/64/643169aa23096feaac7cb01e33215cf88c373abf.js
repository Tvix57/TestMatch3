System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SessionDeviceListener, _crd;

  function _reportPossibleCrUseOfAppDevice(extras) {
    _reporterNs.report("AppDevice", "../Application/AppDevice", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIApplicationHandler(extras) {
    _reporterNs.report("IApplicationHandler", "../Application/AppDevice", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameLogic(extras) {
    _reporterNs.report("GameLogic", "./GameLogic", _context.meta, extras);
  }

  _export("SessionDeviceListener", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a1ae0We6vFObp915QlUcBpT", "SessionDeviceListener", undefined);

      _export("SessionDeviceListener", SessionDeviceListener = class SessionDeviceListener {
        constructor(device, logic) {
          this.device = device;
          this.logic = logic;
          device.AddHandler(this);
        }

        RemoveHandler() {
          this.device.RemoveHandler(this);
        }

        OnPauseApplication() {}

        OnResumeApplication() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=643169aa23096feaac7cb01e33215cf88c373abf.js.map