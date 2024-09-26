System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, macro, Dispatcher, _dec, _class, _crd, ccclass, OfflineTimer;

  function _reportPossibleCrUseOfDispatcher(extras) {
    _reporterNs.report("Dispatcher", "../Utils/Dispatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAppTimer(extras) {
    _reporterNs.report("IAppTimer", "./IAppTimer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAppTimerHandler(extras) {
    _reporterNs.report("IAppTimerHandler", "./IAppTimer", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      macro = _cc.macro;
    }, function (_unresolved_2) {
      Dispatcher = _unresolved_2.Dispatcher;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd91bn7JF5Jpo60Ny8KUYB4", "Timers", undefined);

      __checkObsolete__(['_decorator', 'Component', 'macro', 'Node']);

      ({
        ccclass
      } = _decorator);

      _export("OfflineTimer", OfflineTimer = (_dec = ccclass('OfflineTimer'), _dec(_class = class OfflineTimer extends Component {
        constructor() {
          super(...arguments);
          this._dispatcher = new (_crd && Dispatcher === void 0 ? (_reportPossibleCrUseOfDispatcher({
            error: Error()
          }), Dispatcher) : Dispatcher)();
        }

        start() {
          this.schedule(dt => this.SchedulerCallback(), 1, macro.REPEAT_FOREVER);
        }

        SchedulerCallback() {
          this._dispatcher.Post(h => h.Tick());
        }

        IsActive() {
          return true;
        }

        GetTime() {
          return new Date();
        }

        AddHandler(arg) {
          this._dispatcher.AddObserver(arg);
        }

        RemoveHandler(arg) {
          this._dispatcher.RemoveObserver(arg);
        }

        RemoveAll() {
          this._dispatcher.RemoveAll();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f75fe1e43a46f1fb85753999636958208ba09367.js.map