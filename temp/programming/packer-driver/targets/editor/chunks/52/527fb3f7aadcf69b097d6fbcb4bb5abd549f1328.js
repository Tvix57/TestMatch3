System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, Sprite, BallColor, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, requireComponent, BallComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBallColor(extras) {
    _reporterNs.report("BallColor", "../../Enums/CCEnums", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      BallColor = _unresolved_2.BallColor;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bc71f0unFlIX6RnJbEhm2zw", "BallComponent", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Sprite']);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      _export("BallComponent", BallComponent = (_dec = ccclass('BallComponent'), _dec2 = requireComponent(Sprite), _dec3 = property({
        type: _crd && BallColor === void 0 ? (_reportPossibleCrUseOfBallColor({
          error: Error()
        }), BallColor) : BallColor
      }), _dec4 = property(Sprite), _dec(_class = _dec2(_class = (_class2 = class BallComponent extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "color", _descriptor, this);

          _initializerDefineProperty(this, "sprite", _descriptor2, this);
        }

        onLoad() {
          this.cangeColor(this.color);
        }

        SetColor(color) {
          this.color = color;
          this.cangeColor(color);
        }

        OnBallClick() {}

        activateDestroyAnimation() {}

        cangeColor(color) {
          switch (color) {
            case (_crd && BallColor === void 0 ? (_reportPossibleCrUseOfBallColor({
              error: Error()
            }), BallColor) : BallColor).White:
              this.sprite.color = new Color(255, 255, 255, 255);
              break;

            case (_crd && BallColor === void 0 ? (_reportPossibleCrUseOfBallColor({
              error: Error()
            }), BallColor) : BallColor).Red:
              this.sprite.color = new Color(255, 0, 0, 255);
              break;

            case (_crd && BallColor === void 0 ? (_reportPossibleCrUseOfBallColor({
              error: Error()
            }), BallColor) : BallColor).Green:
              this.sprite.color = new Color(0, 255, 0, 255);
              break;

            case (_crd && BallColor === void 0 ? (_reportPossibleCrUseOfBallColor({
              error: Error()
            }), BallColor) : BallColor).Blue:
              this.sprite.color = new Color(0, 0, 255, 255);
              break;

            case (_crd && BallColor === void 0 ? (_reportPossibleCrUseOfBallColor({
              error: Error()
            }), BallColor) : BallColor).Yellow:
              this.sprite.color = new Color(255, 255, 0, 255);
              break;

            case (_crd && BallColor === void 0 ? (_reportPossibleCrUseOfBallColor({
              error: Error()
            }), BallColor) : BallColor).Black:
              this.sprite.color = new Color(0, 0, 0, 255);
              break;

            case (_crd && BallColor === void 0 ? (_reportPossibleCrUseOfBallColor({
              error: Error()
            }), BallColor) : BallColor).NONE:
              break;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "color", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && BallColor === void 0 ? (_reportPossibleCrUseOfBallColor({
            error: Error()
          }), BallColor) : BallColor).White;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sprite", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=527fb3f7aadcf69b097d6fbcb4bb5abd549f1328.js.map