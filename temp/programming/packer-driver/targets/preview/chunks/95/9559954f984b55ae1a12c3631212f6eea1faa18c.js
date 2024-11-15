System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Node, Prefab, ScoreItemComponent, ScoreScenePresenter, AppRoot, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, ScoreSceneComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfScoreItemComponent(extras) {
    _reporterNs.report("ScoreItemComponent", "./ScoreItemComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScoreScenePresenter(extras) {
    _reporterNs.report("ScoreScenePresenter", "./ScoreScenePresenter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppRoot(extras) {
    _reporterNs.report("AppRoot", "../../Application/AppRoot", _context.meta, extras);
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
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      ScoreItemComponent = _unresolved_2.ScoreItemComponent;
    }, function (_unresolved_3) {
      ScoreScenePresenter = _unresolved_3.ScoreScenePresenter;
    }, function (_unresolved_4) {
      AppRoot = _unresolved_4.AppRoot;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4a9d8XnUhtE3IDPnzyk2F0Z", "ScoreSceneComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ScoreSceneComponent", ScoreSceneComponent = (_dec = ccclass('ScoreSceneComponent'), _dec2 = property(Node), _dec3 = property(Prefab), _dec(_class = (_class2 = class ScoreSceneComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "contentnode", _descriptor, this);

          _initializerDefineProperty(this, "scoreItemPrefab", _descriptor2, this);

          this.presenter = void 0;
        }

        onEnable() {
          this.presenter = new (_crd && ScoreScenePresenter === void 0 ? (_reportPossibleCrUseOfScoreScenePresenter({
            error: Error()
          }), ScoreScenePresenter) : ScoreScenePresenter)(this, (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).getInstance.ResolveGameContext().ResolveGame().ResolveGameStats());
          this.presenter.LoadScores();
        }

        onDisable() {
          this.contentnode.removeAllChildren();
        }

        AddScore(name, score) {
          var node = instantiate(this.scoreItemPrefab);
          var itemCmp = node.getComponent(_crd && ScoreItemComponent === void 0 ? (_reportPossibleCrUseOfScoreItemComponent({
            error: Error()
          }), ScoreItemComponent) : ScoreItemComponent);
          itemCmp.nameLabel.string = name;
          itemCmp.scoreLabel.string = score.toString();
          this.contentnode.addChild(node);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentnode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scoreItemPrefab", [_dec3], {
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
//# sourceMappingURL=9559954f984b55ae1a12c3631212f6eea1faa18c.js.map