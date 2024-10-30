System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Label, Prefab, tween, UITransform, Vec3, GameScenePresenter, AppRoot, BallColor, BallComponent, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, GameSceneComponent;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
      Prefab = _cc.Prefab;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GameScenePresenter = _unresolved_2.GameScenePresenter;
    }, function (_unresolved_3) {
      AppRoot = _unresolved_3.AppRoot;
    }, function (_unresolved_4) {
      BallColor = _unresolved_4.BallColor;
    }, function (_unresolved_5) {
      BallComponent = _unresolved_5.BallComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7f5210L+WFG7IbxqjYNIp52", "GameSceneComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'tween', 'Tween', 'TweenSystem', 'TweenAction', 'TweenEasing', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameSceneComponent", GameSceneComponent = (_dec = ccclass('GameSceneComponent'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(UITransform), _dec5 = property(Prefab), _dec(_class = (_class2 = class GameSceneComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "nameLabel", _descriptor, this);

          _initializerDefineProperty(this, "scoreLabel", _descriptor2, this);

          _initializerDefineProperty(this, "field", _descriptor3, this);

          _initializerDefineProperty(this, "ballPrefab", _descriptor4, this);

          this._presenter = void 0;
          this._balls = [];
        }

        // private animationPromise: Promise<void> = new Promise<void>(() => {})
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

        onDisable() {
          var _this$_presenter;

          (_this$_presenter = this._presenter) == null ? void 0 : _this$_presenter.SaveCurrentGame();
        }

        SetName(newName) {
          this.nameLabel.string = newName;
        }

        UpdateScore(newScore) {
          this.scoreLabel.string = newScore;
        }

        ShowNewField(data, callback) {
          if (!this._balls.length) {
            this._balls = new Array(data.length).fill(null).map(() => new Array(data.length).fill(null));
            data.forEach((row, i) => {
              row.forEach((color, j) => {
                this._balls[i][j] = instantiate(this.ballPrefab);
                this.field.node.addChild(this._balls[i][j]);
              });
            });
          }

          data.forEach((row, i) => {
            row.forEach((color, j) => {
              var cmpBall = this._balls[i][j].getComponent(_crd && BallComponent === void 0 ? (_reportPossibleCrUseOfBallComponent({
                error: Error()
              }), BallComponent) : BallComponent);

              cmpBall.SetColor(color);
              cmpBall.SetClick(() => {
                this._presenter.OnBallClick({
                  x: i,
                  y: j
                });
              });

              var cmpUI = this._balls[i][j].getComponent(UITransform);

              this.addBallTween(this._balls[i][j], {
                x: cmpUI.width / 2 + cmpUI.width * i,
                y: cmpUI.height / 2 + cmpUI.height * j
              }, {
                x: cmpUI.width / 2 + cmpUI.width * i,
                y: this.field.height + (cmpUI.height / 2 + cmpUI.height * j)
              }).start();
            });
          });
        }

        RemoveBalls(data, callback) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var tweens = Array();
            data.forEach((row, i) => {
              row.forEach((color, j) => {
                if (color === (_crd && BallColor === void 0 ? (_reportPossibleCrUseOfBallColor({
                  error: Error()
                }), BallColor) : BallColor).NONE) {
                  /// add burn animation
                  var cmpUI = _this._balls[i][j].getComponent(UITransform);

                  tweens.push(_this.hideBall(_this._balls[i][j], {
                    x: cmpUI.width / 2 + cmpUI.width * i,
                    y: _this.field.height + (cmpUI.height / 2 + cmpUI.height * j)
                  }));
                }
              });
            });

            _this.animationAwait(tweens).then(() => {
              callback == null ? void 0 : callback();
            });
          })();
        }

        DropDownBalls(data, callback) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var tweens = Array();
            data.forEach((row, i) => {
              row.forEach((color, j) => {
                var cmpUI = _this2._balls[i][j].getComponent(UITransform);

                if (_this2._balls[i][j].position.x !== cmpUI.width / 2 + cmpUI.width * i || _this2._balls[i][j].position.y !== cmpUI.height / 2 + cmpUI.height * j) {
                  if (_this2._balls[i][j].position.y > _this2.field.height) {
                    _this2._balls[i][j].getComponent(_crd && BallComponent === void 0 ? (_reportPossibleCrUseOfBallComponent({
                      error: Error()
                    }), BallComponent) : BallComponent).SetColor(color);
                  }

                  tweens.push(_this2.addBallTween(_this2._balls[i][j], {
                    x: cmpUI.width / 2 + cmpUI.width * i,
                    y: cmpUI.height / 2 + cmpUI.height * j
                  }));
                }
              });
            });

            _this2.animationAwait(tweens).then(() => {
              callback == null ? void 0 : callback();
            });
          })();
        }

        animationAwait(tweens) {
          var callPromise = new Promise(resolve => {
            var count = 0;
            tweens.forEach(tween => {
              tween.start();
              ++count;

              if (count === tweens.length) {
                resolve();
              }
            });
          });
          return callPromise;
        }

        addBallTween(node, to, from) {
          if (from) {
            node.setPosition(from.x, from.y, 0);
          }

          return tween(node).to(0.5, {
            position: new Vec3(to.x, to.y, 0)
          });
        }

        hideBall(node, to) {
          return tween(node).set({
            position: new Vec3(to.x, to.y, 0)
          });
        }

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