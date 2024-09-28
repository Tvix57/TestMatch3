System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCFloat, Component, _decorator, AppRoot, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, AudioComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAppRoot(extras) {
    _reporterNs.report("AppRoot", "../Application/AppRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAudioManager(extras) {
    _reporterNs.report("IAudioManager", "../Application/ApplicationInterfaces", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      CCFloat = _cc.CCFloat;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AppRoot = _unresolved_2.AppRoot;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9abfeNOTzRGWouOvdzbm9aT", "AudioComponent", undefined);

      __checkObsolete__(['CCFloat', 'Component', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AudioComponent", AudioComponent = (_dec = ccclass('AudioComponent'), _dec2 = property(CCFloat), _dec(_class = (_class2 = class AudioComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "fileName", _descriptor, this);

          _initializerDefineProperty(this, "volume", _descriptor2, this);

          this._mngr = void 0;
        }

        onEnable() {
          this._mngr = (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).getInstance.ResolveSound().ResolveAudioManager();

          this._mngr.InitAudio(this.fileName, this.volume);
        }

        onDisable() {
          var _this$_mngr;

          (_this$_mngr = this._mngr) == null ? void 0 : _this$_mngr.RemoveAudio(this.fileName);
        }

        SetLoop(loop) {
          this._mngr.SetLoop(this.fileName, loop);
        }

        Play() {
          this._mngr.PlaySound(this.fileName);
        }

        BreakeSound() {
          this._mngr.BreakeSound(this.fileName);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fileName", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "volume", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9c9f3a2e153d104da5c788b8c91a093e54d32d4a.js.map