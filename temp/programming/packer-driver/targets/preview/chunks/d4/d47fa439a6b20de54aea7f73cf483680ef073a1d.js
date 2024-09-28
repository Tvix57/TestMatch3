System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, CCString, Component, LocationType, AppRoot, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, requireComponent, TransferComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLocationType(extras) {
    _reporterNs.report("LocationType", "./LocationType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppRoot(extras) {
    _reporterNs.report("AppRoot", "../Application/AppRoot", _context.meta, extras);
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
      CCString = _cc.CCString;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      LocationType = _unresolved_2.LocationType;
    }, function (_unresolved_3) {
      AppRoot = _unresolved_3.AppRoot;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a615fF2NEVFiYY47oIu8pG/", "TransferComponent%20copy", undefined);

      __checkObsolete__(['_decorator', 'Button', 'CCString', 'Component']);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      _export("TransferComponent", TransferComponent = (_dec = ccclass('TransferComponent'), _dec2 = requireComponent(Button), _dec3 = property({
        type: _crd && LocationType === void 0 ? (_reportPossibleCrUseOfLocationType({
          error: Error()
        }), LocationType) : LocationType
      }), _dec4 = property(CCString), _dec(_class = _dec2(_class = (_class2 = class TransferComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "toLocation", _descriptor, this);

          _initializerDefineProperty(this, "param", _descriptor2, this);
        }

        start() {
          this.node.on(Button.EventType.CLICK, () => {
            var transfer = (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
              error: Error()
            }), AppRoot) : AppRoot).getInstance.ResolveSceneManager();
            transfer == null ? void 0 : transfer.Transfer(this.toLocation, this.param);
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toLocation", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && LocationType === void 0 ? (_reportPossibleCrUseOfLocationType({
            error: Error()
          }), LocationType) : LocationType).End;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "param", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d47fa439a6b20de54aea7f73cf483680ef073a1d.js.map