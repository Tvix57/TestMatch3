System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AbstractDispatcher, SaveDispatcher, _crd;

  function _reportPossibleCrUseOfAbstractDispatcher(extras) {
    _reporterNs.report("AbstractDispatcher", "../Utils/Dispatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISaveListener(extras) {
    _reporterNs.report("ISaveListener", "./SaveInterfaces", _context.meta, extras);
  }

  _export("SaveDispatcher", void 0);

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

      _cclegacy._RF.push({}, "e6c57QO0/tBF4ACNp16PfDX", "SaveDispatcher", undefined);
      /**
       * 
       * SaveDispatcher.ts
       * db://assets/Scripts/Save/SaveDispatcher.ts
       *
       */


      _export("SaveDispatcher", SaveDispatcher = class SaveDispatcher extends AbstractDispatcher {
        constructor() {
          super();
          this.blockers = [];
        }

        Save() {
          if (this.blockers.some(blocker => blocker.IsBlock())) {
            return;
          }

          this._dispatcher.Post(h => h.WillSave());

          this._dispatcher.Post(h => h.DoSave == null ? void 0 : h.DoSave());
        }

        SetSaveBlocker(executor) {
          this.blockers.push(executor);
        }

        Clear() {
          this.blockers.length = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8d029dac42efc189782dfc4e1203945050ab3179.js.map