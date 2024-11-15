System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, AppRoot, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, AnsverDialogComponent;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIDialogManager(extras) {
    _reporterNs.report("IDialogManager", "./IDialogManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppRoot(extras) {
    _reporterNs.report("AppRoot", "../Application/AppRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAnsverHandler(extras) {
    _reporterNs.report("IAnsverHandler", "./IAnsverHandler", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      AppRoot = _unresolved_2.AppRoot;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e0a7y+TWxCXLu+ehwC/pkE", "AnsverDialogComponent", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AnsverDialogComponent", AnsverDialogComponent = (_dec = ccclass('AnsverDialogComponent'), _dec2 = property(Button), _dec3 = property(Button), _dec(_class = (_class2 = class AnsverDialogComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "rejectBtn", _descriptor, this);

          _initializerDefineProperty(this, "acceptBtn", _descriptor2, this);

          this._handler = void 0;
          this.dialogManager = void 0;
        }

        onEnable() {
          var _this$rejectBtn, _this$acceptBtn;

          this.dialogManager = (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).getInstance.ResolveDialogManager();
          (_this$rejectBtn = this.rejectBtn) == null ? void 0 : _this$rejectBtn.node.on(Button.EventType.CLICK, this.OnRejectPressed, this);
          (_this$acceptBtn = this.acceptBtn) == null ? void 0 : _this$acceptBtn.node.on(Button.EventType.CLICK, this.OnAcceptPressed, this);
        }

        BackAction() {
          this.dialogManager.CloseDialog();
        }

        SetHandler(cb) {
          this._handler = cb;
        }

        OnAcceptPressed() {
          var _this = this;

          return _asyncToGenerator(function* () {
            yield _this._handler == null ? void 0 : _this._handler(true);

            _this.BackAction();
          })();
        }

        OnRejectPressed() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            yield _this2._handler == null ? void 0 : _this2._handler(false);

            _this2.BackAction();
          })();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rejectBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "acceptBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=53b884bc154663164d4eecc5b65a0cc8043b21a7.js.map