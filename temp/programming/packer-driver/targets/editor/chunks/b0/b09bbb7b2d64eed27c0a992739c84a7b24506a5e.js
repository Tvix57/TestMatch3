System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Dialog, _crd;

  function _reportPossibleCrUseOfIDialogManager(extras) {
    _reporterNs.report("IDialogManager", "./IDialogManager", _context.meta, extras);
  }

  _export("Dialog", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c9201PlyQNEEJmdfM8PCUnp", "Dialog", undefined);
      /**
       * 
       * Dialog.ts
       * db://assets/Scripts/Scene/Dialog.ts
       *
       */


      _export("Dialog", Dialog = class Dialog {
        constructor(_dialogComponent) {
          this._dialogComponent = _dialogComponent;
        }

        CloseDialog() {
          this._dialogComponent.CloseDialog();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b09bbb7b2d64eed27c0a992739c84a7b24506a5e.js.map