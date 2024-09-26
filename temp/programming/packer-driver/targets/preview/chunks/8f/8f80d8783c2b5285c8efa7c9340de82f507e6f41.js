System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SaveTimerExecutor, _crd;

  function _reportPossibleCrUseOfIAppTimer(extras) {
    _reporterNs.report("IAppTimer", "../Application/IAppTimer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAppTimerHandler(extras) {
    _reporterNs.report("IAppTimerHandler", "../Application/IAppTimer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSaveDispatcher(extras) {
    _reporterNs.report("SaveDispatcher", "./SaveDispatcher", _context.meta, extras);
  }

  _export("SaveTimerExecutor", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6ff9diro3lJG7aeeVIzedBl", "SaveTimerExecutor", undefined);

      _export("SaveTimerExecutor", SaveTimerExecutor = class SaveTimerExecutor {
        constructor(timer, saveDispatcher, period) {
          this._count = void 0;
          this.timer = timer;
          this.saveDispatcher = saveDispatcher;
          this.period = period;
          timer.AddHandler(this);
          this._count = period;
        }

        Tick() {
          this._count -= 1;

          if (this._count <= 0) {
            this.saveDispatcher.Save();
            this._count = this.period;
          }
        }

        OnActivate() {}

        OnDeactivate() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8f80d8783c2b5285c8efa7c9340de82f507e6f41.js.map