System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, native, ApplicationState, AndroidSaveState, _crd;

  function _reportPossibleCrUseOfIState(extras) {
    _reporterNs.report("IState", "../SaveInterfaces", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIStateSaver(extras) {
    _reporterNs.report("IStateSaver", "../SaveInterfaces", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApplicationState(extras) {
    _reporterNs.report("ApplicationState", "../State", _context.meta, extras);
  }

  _export("AndroidSaveState", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      native = _cc.native;
    }, function (_unresolved_2) {
      ApplicationState = _unresolved_2.ApplicationState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f479aeSSVhLNrM4gXqqS48g", "AndroidSaveState", undefined);
      /**
       * 
       * AndroidSaveState.ts
       * db://assets/Scripts/Save/Android/AndroidSaveState.ts
       *
       */


      __checkObsolete__(['native']);

      _export("AndroidSaveState", AndroidSaveState = class AndroidSaveState {
        constructor(prefferedLang) {
          this.prefferedLang = prefferedLang;
        }

        LoadState() {
          return (_crd && ApplicationState === void 0 ? (_reportPossibleCrUseOfApplicationState({
            error: Error()
          }), ApplicationState) : ApplicationState).Load(this.getFile(), this.prefferedLang);
        }

        SaveState(state) {
          this.setFile(state.Save());
        }

        getFile() {
          return native.reflection.callStaticMethod("com/grit/fftc/utils/FileUtils", "getFile", "()Ljava/lang/String;");
        }

        setFile(input) {
          native.reflection.callStaticMethod("com/grit/fftc/utils/FileUtils", "writeFile", "(Ljava/lang/String;)V", input);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7a9b28c0ef24d03ac16e1fd7884d9e5ae9b2df28.js.map