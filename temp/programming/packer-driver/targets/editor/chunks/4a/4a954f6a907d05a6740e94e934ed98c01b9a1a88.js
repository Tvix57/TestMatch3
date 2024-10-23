System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ApplicationState, WebSaveState, _crd;

  function _reportPossibleCrUseOfIState(extras) {
    _reporterNs.report("IState", "../SaveInterfaces", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIStateSaver(extras) {
    _reporterNs.report("IStateSaver", "../SaveInterfaces", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApplicationState(extras) {
    _reporterNs.report("ApplicationState", "../State", _context.meta, extras);
  }

  _export("WebSaveState", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      ApplicationState = _unresolved_2.ApplicationState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7ee885HHKBDWaZn+fj3gexo", "WebSaveState", undefined);

      __checkObsolete__(['native']);

      _export("WebSaveState", WebSaveState = class WebSaveState {
        constructor(prefferedLang) {
          this.prefferedLang = prefferedLang;
        }

        LoadState() {
          return (_crd && ApplicationState === void 0 ? (_reportPossibleCrUseOfApplicationState({
            error: Error()
          }), ApplicationState) : ApplicationState).Load(this.getFile());
        }

        SaveState(state) {
          this.setFile(state.Save());
        }

        getFile() {
          // return native.reflection.callStaticMethod("com/grit/fftc/utils/FileUtils","getFile","()Ljava/lang/String;")
          return "load fileFromserver";
        }

        setFile(input) {///sendfile to server
          // native.reflection.callStaticMethod("com/grit/fftc/utils/FileUtils","writeFile","(Ljava/lang/String;)V",input)
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4a954f6a907d05a6740e94e934ed98c01b9a1a88.js.map