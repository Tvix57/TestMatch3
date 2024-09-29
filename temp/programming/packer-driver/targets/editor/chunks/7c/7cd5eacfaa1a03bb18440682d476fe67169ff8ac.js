System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Enum, Node, UITransform, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, requireComponent, executeInEditMode, property, ResizeType, ResizeWay, RawResize;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Enum = _cc.Enum;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1990cm7j2VMLq8Air3AA5Co", "RawResize", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Enum', 'Node', 'UITransform']);

      ({
        ccclass,
        requireComponent,
        executeInEditMode,
        property
      } = _decorator);

      _export("ResizeType", ResizeType = /*#__PURE__*/function (ResizeType) {
        ResizeType[ResizeType["FIT"] = 0] = "FIT";
        ResizeType[ResizeType["FILL"] = 1] = "FILL";
        return ResizeType;
      }({}));

      Enum(ResizeType);

      _export("ResizeWay", ResizeWay = /*#__PURE__*/function (ResizeWay) {
        ResizeWay[ResizeWay["ByScale"] = 0] = "ByScale";
        ResizeWay[ResizeWay["ByContentSize"] = 1] = "ByContentSize";
        return ResizeWay;
      }({}));

      Enum(ResizeWay);

      _export("RawResize", RawResize = (_dec = ccclass('RawResize'), _dec2 = requireComponent(UITransform), _dec3 = property({
        type: ResizeType
      }), _dec4 = property({
        type: ResizeWay
      }), _dec5 = property({
        type: UITransform,
        tooltip: 'Target node to resize. Parent or DeepParen ONLY'
      }), _dec(_class = executeInEditMode(_class = _dec2(_class = (_class2 = class RawResize extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "resizeType", _descriptor, this);

          _initializerDefineProperty(this, "resizeWay", _descriptor2, this);

          _initializerDefineProperty(this, "target", _descriptor3, this);

          this._nodeUITransform = void 0;
          this._parentUITransform = void 0;
        }

        onLoad() {
          var _this$node$parent;

          this._nodeUITransform = this.getComponent(UITransform);

          if (this.target && this.node.isChildOf(this.target.node)) {
            this._parentUITransform = this.target;
          } else {
            this._parentUITransform = this.node.parent.getComponent(UITransform);
          }

          this.node.on(Node.EventType.SIZE_CHANGED, this.Update, this);
          (_this$node$parent = this.node.parent) == null ? void 0 : _this$node$parent.on(Node.EventType.SIZE_CHANGED, this.Update, this);
          this.Update();
        }

        onDisable() {
          var _this$node$parent2;

          (_this$node$parent2 = this.node.parent) == null ? void 0 : _this$node$parent2.off(Node.EventType.SIZE_CHANGED);
          this.node.off(Node.EventType.SIZE_CHANGED);
        }

        ForceUpdate() {
          this.Update();
        }

        Update() {
          if (this.checkSize()) {
            const scale = this.getNewScale();

            if (this.resizeWay == ResizeWay.ByScale) {
              this.node.setScale(scale, scale);
            } else {
              this._nodeUITransform.setContentSize(this._nodeUITransform.width * scale, this._nodeUITransform.height * scale);
            }
          }
        }

        checkSize() {
          let result = false;

          if (this.resizeType == ResizeType.FILL) {
            result = this._nodeUITransform.width < this._parentUITransform.width || this._nodeUITransform.height < this._parentUITransform.height;
          } else {
            result = this._nodeUITransform.width > this._parentUITransform.width || this._nodeUITransform.width < this._parentUITransform.width || this._nodeUITransform.height < this._parentUITransform.height || this._nodeUITransform.height > this._parentUITransform.height;
          }

          return result;
        }

        getNewScale() {
          if (this.resizeType == ResizeType.FILL) {
            return Math.max(this._parentUITransform.height / this._nodeUITransform.height, this._parentUITransform.width / this._nodeUITransform.width);
          } else {
            return Math.min(this._parentUITransform.height / this._nodeUITransform.height, this._parentUITransform.width / this._nodeUITransform.width);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "resizeType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return ResizeType.FIT;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "resizeWay", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return ResizeWay.ByScale;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7cd5eacfaa1a03bb18440682d476fe67169ff8ac.js.map