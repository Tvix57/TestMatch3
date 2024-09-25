System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, log, Node, error, assert, tween, UIOpacity, LocationType, Dispatcher, PrefabLoader, EmptyFactory, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, ScenePoolManagerComponent;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLocationType(extras) {
    _reporterNs.report("LocationType", "../Enums/LocationType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDispatcher(extras) {
    _reporterNs.report("Dispatcher", "../Utils/Dispatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISceneManager(extras) {
    _reporterNs.report("ISceneManager", "./ISceneManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfITransferHandler(extras) {
    _reporterNs.report("ITransferHandler", "./ISceneManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabLoader(extras) {
    _reporterNs.report("PrefabLoader", "../Utils/PrefabLoader", _context.meta, extras);
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
      log = _cc.log;
      Node = _cc.Node;
      error = _cc.error;
      assert = _cc.assert;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
    }, function (_unresolved_2) {
      LocationType = _unresolved_2.LocationType;
    }, function (_unresolved_3) {
      Dispatcher = _unresolved_3.Dispatcher;
    }, function (_unresolved_4) {
      PrefabLoader = _unresolved_4.PrefabLoader;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ae573BcBSlHsbUU6I7pEnRN", "ScenePoolManagerComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'log', 'Node', 'error', 'assert', '__private', 'tween', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);
      EmptyFactory = class EmptyFactory {
        Create(node) {}

      };

      _export("ScenePoolManagerComponent", ScenePoolManagerComponent = (_dec = ccclass("ScenePoolManagerComponent"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property({
        type: _crd && LocationType === void 0 ? (_reportPossibleCrUseOfLocationType({
          error: Error()
        }), LocationType) : LocationType
      }), _dec7 = property({
        type: _crd && LocationType === void 0 ? (_reportPossibleCrUseOfLocationType({
          error: Error()
        }), LocationType) : LocationType
      }), _dec(_class = (_class2 = class ScenePoolManagerComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "sceneNode", _descriptor, this);

          _initializerDefineProperty(this, "currentNode", _descriptor2, this);

          _initializerDefineProperty(this, "forwardNode", _descriptor3, this);

          _initializerDefineProperty(this, "blockerNode", _descriptor4, this);

          _initializerDefineProperty(this, "loadingScene", _descriptor5, this);

          _initializerDefineProperty(this, "startScene", _descriptor6, this);

          this._locationMap = new Map();
          this._dispatcher = new (_crd && Dispatcher === void 0 ? (_reportPossibleCrUseOfDispatcher({
            error: Error()
          }), Dispatcher) : Dispatcher)();
          this._sceneStack = [];
          this._pool = new Map();
          this._isBlockTransfer = false;
          this.loadedIndex = 0;
          this._isStart = true;
          this._currentSceneShow = (_crd && LocationType === void 0 ? (_reportPossibleCrUseOfLocationType({
            error: Error()
          }), LocationType) : LocationType).End;
        }

        start() {
          this.Init();
        }

        Init() {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (!_this._pool.has(_this.loadingScene)) {
              var loadScene = yield _this.CreateScene(_this._locationMap.get(_this.loadingScene).scenePath);

              _this._pool.set(_this.loadingScene, loadScene);

              _this.Transfer(_this.loadingScene);

              _this._isStart = false;
            }
          })();
        }

        Preload() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var _loop = function* _loop(name, entry) {
              _this2.CreateScene(entry.scenePath).then(value => {
                value.active = false;

                _this2._pool.set(name, value);
              }).catch(err => {
                log(entry.scenePath + " " + err);
              }).finally(() => {
                _this2.loadedIndex++;

                _this2._dispatcher.Post(arg => arg.OnLoadedScene == null ? void 0 : arg.OnLoadedScene(_this2.loadedIndex, _this2._locationMap.size));

                if (_this2.loadedIndex === _this2._locationMap.size) {
                  _this2.Transfer(_this2.startScene);
                }
              });
            };

            for (var [name, entry] of _this2._locationMap) {
              yield* _loop(name, entry);
            }
          })();
        }

        AddLocation(location, scenePath, priority, factory) {
          this._locationMap.set(location, {
            factory: factory ? factory : new EmptyFactory(),
            scenePath,
            priority
          });
        }

        Transfer(location, parameter) {
          if (this._isBlockTransfer) return;
          this._isBlockTransfer = true;
          this.blockerNode.active = true;

          var entry = this._locationMap.get(location);

          if (entry === undefined) {
            error("ERROR: NoScene " + (_crd && LocationType === void 0 ? (_reportPossibleCrUseOfLocationType({
              error: Error()
            }), LocationType) : LocationType)[location]);
            return;
          }

          this._dispatcher.Post(arg => arg.WillTransfer(location));

          var scene = this._pool.get(location);

          entry.factory.Create(scene, parameter);
          this.PopToPriority(entry.priority);

          this._sceneStack.push(location);

          this.OpenScene(location);
        }

        CreateScene(name) {
          return _asyncToGenerator(function* () {
            return new (_crd && PrefabLoader === void 0 ? (_reportPossibleCrUseOfPrefabLoader({
              error: Error()
            }), PrefabLoader) : PrefabLoader)(name).Create();
          })();
        }

        PopToPriority(priority) {
          while (priority <= this._sceneStack.length - 1) this._sceneStack.pop();
        }

        OpenScene(location) {
          if (!this._pool.has(location)) {
            log("ScenePoolManagerComponent: " + (_crd && LocationType === void 0 ? (_reportPossibleCrUseOfLocationType({
              error: Error()
            }), LocationType) : LocationType)[location] + " not exist");
            return;
          }

          this.forwardNode.addChild(this._pool.get(location));
          this._pool.get(location).active = true;
          tween(this.forwardNode.getComponent(UIOpacity)).call(() => this.forwardNode.getComponent(UIOpacity).opacity = 0).to(0.2, {
            opacity: 255
          }).call(() => {
            this.forwardNode.getComponent(UIOpacity).opacity = 255;
            this.CloseScene();
            this.currentNode.addChild(this.forwardNode.children[0]);
            this._currentSceneShow = this._sceneStack.slice(-1)[0];

            this._dispatcher.Post(arg => arg.OnTransfer(location));

            this._isBlockTransfer = false;
            this.blockerNode.active = false;
          }).start();
        }

        CloseScene() {
          if (this.currentNode.children.length > 0) {
            var scene = this.currentNode.children[0];
            this.currentNode.removeAllChildren();
            scene.active = false;
          }
        }

        update(dt) {
          if (!this._isStart) {
            this._isStart = true; // this.Preload()
          }
        }

        PopToStart() {
          this.Transfer((_crd && LocationType === void 0 ? (_reportPossibleCrUseOfLocationType({
            error: Error()
          }), LocationType) : LocationType).StartScene);
        }

        AddHandler(arg) {
          this._dispatcher.AddObserver(arg);
        }

        RemoveHandler(arg) {
          this._dispatcher.RemoveObserver(arg);
        }

        RemoveAll() {
          this._dispatcher.RemoveAll();
        }

        TransferBack() {
          if (this._sceneStack.length <= 1) {
            assert(false, "TransferBack with empty scene stack");
            return;
          }

          this._sceneStack.pop();

          this.Transfer(this._sceneStack.pop());
        }

        GetCurrentLocation() {
          return this._currentSceneShow;
        }

        GetCurrentScene(classConstructor) {
          if (this.currentNode.children.length) return this.currentNode.children[0].getComponent(classConstructor);
          return null;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sceneNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "currentNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "forwardNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "blockerNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "loadingScene", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && LocationType === void 0 ? (_reportPossibleCrUseOfLocationType({
            error: Error()
          }), LocationType) : LocationType).End;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "startScene", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && LocationType === void 0 ? (_reportPossibleCrUseOfLocationType({
            error: Error()
          }), LocationType) : LocationType).End;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c7e6696988c18f94b3b6894e2276cc88b665df5a.js.map