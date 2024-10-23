System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AbstractDispatcher, Loop, _crd, TimeSpeed;

  function _reportPossibleCrUseOfIAppTimer(extras) {
    _reporterNs.report("IAppTimer", "../Application/IAppTimer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAppTimerHandler(extras) {
    _reporterNs.report("IAppTimerHandler", "../Application/IAppTimer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbstractDispatcher(extras) {
    _reporterNs.report("AbstractDispatcher", "../Utils/Dispatcher", _context.meta, extras);
  }

  _export("Loop", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AbstractDispatcher = _unresolved_2.AbstractDispatcher;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7600ekLAw1PeL+2P5m60EEh", "Loop", undefined);

      _export("TimeSpeed", TimeSpeed = /*#__PURE__*/function (TimeSpeed) {
        TimeSpeed[TimeSpeed["Pause"] = 0] = "Pause";
        TimeSpeed[TimeSpeed["Play"] = 1] = "Play";
        TimeSpeed[TimeSpeed["SpeedUp"] = 2] = "SpeedUp";
        return TimeSpeed;
      }({}));

      _export("Loop", Loop = class Loop extends (_crd && AbstractDispatcher === void 0 ? (_reportPossibleCrUseOfAbstractDispatcher({
        error: Error()
      }), AbstractDispatcher) : AbstractDispatcher) {
        constructor(timer) {
          super();
          this._speedType = void 0;
          timer.AddHandler(this);
          this._speedType = TimeSpeed.Play;
        }

        Tick() {
          if (this.GetTimeSpeed() === TimeSpeed.Play) {
            this._dispatcher.Post(arg => arg.OnDayChange == null ? void 0 : arg.OnDayChange());
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4f8466c89ca41bf8e0840f285c0f08f7b8d09a1d.js.map