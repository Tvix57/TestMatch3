System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Label, Node, Prefab, UITransform, GameScenePresenter, AppRoot, BallComponent, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, GameSceneComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameScenePresenter(extras) {
    _reporterNs.report("GameScenePresenter", "./GameScenePresenter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppRoot(extras) {
    _reporterNs.report("AppRoot", "../../Application/AppRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBallColor(extras) {
    _reporterNs.report("BallColor", "../../Enums/BallColor", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBallComponent(extras) {
    _reporterNs.report("BallComponent", "./BallComponent", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      GameScenePresenter = _unresolved_2.GameScenePresenter;
    }, function (_unresolved_3) {
      AppRoot = _unresolved_3.AppRoot;
    }, function (_unresolved_4) {
      BallComponent = _unresolved_4.BallComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7f5210L+WFG7IbxqjYNIp52", "GameSceneComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameSceneComponent", GameSceneComponent = (_dec = ccclass('GameSceneComponent'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Prefab), _dec(_class = (_class2 = class GameSceneComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "nameLabel", _descriptor, this);

          _initializerDefineProperty(this, "scoreLabel", _descriptor2, this);

          _initializerDefineProperty(this, "field", _descriptor3, this);

          _initializerDefineProperty(this, "ballPrefab", _descriptor4, this);

          this._presenter = void 0;
          this._balls = [];
        }

        onEnable() {
          this._presenter = new (_crd && GameScenePresenter === void 0 ? (_reportPossibleCrUseOfGameScenePresenter({
            error: Error()
          }), GameScenePresenter) : GameScenePresenter)(this, (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).getInstance.ResolveGameContext().ResolveGame().ResolveField(), (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).getInstance.ResovleSaveState().ResolveSaveContext().GetCurrentSaveState());

          this._presenter.LoadData();
        }

        SetName(newName) {
          this.nameLabel.string = newName;
        }

        UpdateScore(newScore) {
          this.scoreLabel.string = newScore;
        }

        UpdateField(newfield, fromOutside) {
          if (this._balls.length != newfield.length) {
            this._balls = new Array(newfield.length).fill(null).map(() => new Array(newfield.length).fill(null));
            newfield.forEach((row, i) => {
              row.forEach((color, j) => {
                var _this$_balls$i$j$getC;

                this._balls[i][j] = instantiate(this.ballPrefab);
                (_this$_balls$i$j$getC = this._balls[i][j].getComponent(_crd && BallComponent === void 0 ? (_reportPossibleCrUseOfBallComponent({
                  error: Error()
                }), BallComponent) : BallComponent)) == null ? void 0 : _this$_balls$i$j$getC.SetColor(color);
                this.field.addChild(this._balls[i][j]);
                this.setBallsPosition(this._balls[i][j], i, j);
              });
            });
          } else {
            this._balls.forEach((row, i) => {
              row.forEach((ball, j) => {
                if (fromOutside) {}
              });
            });
          }
        }

        setBallsPosition(node, x, y) {
          var nodeSize = node.getComponent(UITransform);
          node.position.set(nodeSize.width / 2 + x * nodeSize.width, nodeSize.height / 2 + y * nodeSize.height, 0);
        }

        hideBall(node) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "field", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ballPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=28c31814615195a8b8228614752d18f0e5988cbe.js.map