System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, director, EditBox, LocationType, AppRoot, GameFactory, DialogFactory, AnsverDialogComponent, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, StartSceneComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLocationType(extras) {
    _reporterNs.report("LocationType", "../../Enums/LocationType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISceneManager(extras) {
    _reporterNs.report("ISceneManager", "../ISceneManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppRoot(extras) {
    _reporterNs.report("AppRoot", "../../Application/AppRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameFactory(extras) {
    _reporterNs.report("GameFactory", "../../Session/GameFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDialogFactory(extras) {
    _reporterNs.report("DialogFactory", "../../Dialog/DialogFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnsverDialogComponent(extras) {
    _reporterNs.report("AnsverDialogComponent", "../../Dialog/AnsverDialogComponent", _context.meta, extras);
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
      director = _cc.director;
      EditBox = _cc.EditBox;
    }, function (_unresolved_2) {
      LocationType = _unresolved_2.LocationType;
    }, function (_unresolved_3) {
      AppRoot = _unresolved_3.AppRoot;
    }, function (_unresolved_4) {
      GameFactory = _unresolved_4.GameFactory;
    }, function (_unresolved_5) {
      DialogFactory = _unresolved_5.DialogFactory;
    }, function (_unresolved_6) {
      AnsverDialogComponent = _unresolved_6.AnsverDialogComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e8b1d7oWFlMmLb4SuxuL5cV", "StartSceneComponent", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'director', 'EditBox']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StartSceneComponent", StartSceneComponent = (_dec = ccclass('StartSceneComponent'), _dec2 = property(Button), _dec3 = property(Button), _dec(_class = (_class2 = class StartSceneComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "continueBtn", _descriptor, this);

          _initializerDefineProperty(this, "leaderboardBtn", _descriptor2, this);

          this._sceneManager = void 0;
          this.dialogFactory = new (_crd && DialogFactory === void 0 ? (_reportPossibleCrUseOfDialogFactory({
            error: Error()
          }), DialogFactory) : DialogFactory)("Prefabs/Dialog/NewGameDialog");
        }

        onEnable() {
          this._sceneManager = (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).getInstance.ResolveSceneManager();
          this.continueBtn.interactable = !(_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).getInstance.ResovleSaveState().ResolveSaveContext().IsGameFinished();

          if ((_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).getInstance.ResovleSaveState().ResolveSaveContext().HasGame()) {
            new (_crd && GameFactory === void 0 ? (_reportPossibleCrUseOfGameFactory({
              error: Error()
            }), GameFactory) : GameFactory)((_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
              error: Error()
            }), AppRoot) : AppRoot).getInstance.ResovleSaveState()).LoadGame();
          }

          if ((_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).getInstance.ResovleSaveState().ResolveSaveContext().GetCurrentSaveState().gameState != undefined) {
            var _getInstance$ResovleS;

            this.leaderboardBtn.interactable = ((_getInstance$ResovleS = (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
              error: Error()
            }), AppRoot) : AppRoot).getInstance.ResovleSaveState().ResolveSaveContext().GetCurrentSaveState().gameState) == null ? void 0 : _getInstance$ResovleS.gameStats) != undefined;
          }
        }

        onContinueClick() {
          this._sceneManager.Transfer((_crd && LocationType === void 0 ? (_reportPossibleCrUseOfLocationType({
            error: Error()
          }), LocationType) : LocationType).GameScene);
        }

        onNewGameClick() {
          this.dialogFactory.CreateDialog().then(dialog => {
            dialog.getComponent(_crd && AnsverDialogComponent === void 0 ? (_reportPossibleCrUseOfAnsverDialogComponent({
              error: Error()
            }), AnsverDialogComponent) : AnsverDialogComponent).SetHandler(isAccept => {
              if (isAccept) {
                var name = dialog.getComponentInChildren(EditBox).string;
                new (_crd && GameFactory === void 0 ? (_reportPossibleCrUseOfGameFactory({
                  error: Error()
                }), GameFactory) : GameFactory)((_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
                  error: Error()
                }), AppRoot) : AppRoot).getInstance.ResovleSaveState()).CreateGame(name);

                this._sceneManager.Transfer((_crd && LocationType === void 0 ? (_reportPossibleCrUseOfLocationType({
                  error: Error()
                }), LocationType) : LocationType).GameScene);
              }
            });
          });
        }

        onLeaderBoardClick() {
          this._sceneManager.Transfer((_crd && LocationType === void 0 ? (_reportPossibleCrUseOfLocationType({
            error: Error()
          }), LocationType) : LocationType).ScoreScene);
        }

        onExitClick() {
          director.end();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "continueBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "leaderboardBtn", [_dec3], {
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
//# sourceMappingURL=caeffe86d428c7687b0029d928acae8a99521d24.js.map