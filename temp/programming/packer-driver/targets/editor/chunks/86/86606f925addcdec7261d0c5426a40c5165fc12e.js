System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, JsonAsset, sys, ScenePoolManagerComponent, LocationType, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, uniquelyReferenced, GameManagerComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfISceneManager(extras) {
    _reporterNs.report("ISceneManager", "./Scene/ISceneManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScenePoolManagerComponent(extras) {
    _reporterNs.report("ScenePoolManagerComponent", "./Scene/ScenePoolManagerComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocationType(extras) {
    _reporterNs.report("LocationType", "./Enums/LocationType", _context.meta, extras);
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
      director = _cc.director;
      JsonAsset = _cc.JsonAsset;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      ScenePoolManagerComponent = _unresolved_2.ScenePoolManagerComponent;
    }, function (_unresolved_3) {
      LocationType = _unresolved_3.LocationType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c1362UsvV9E4LqM0J6IEX+3", "GameManagerComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'JsonAsset', 'sys']);

      // import { AnimationsManagerComponent } from '../Scene/AnimationsManagerComponent';
      // import { AudioManagerComponent } from '../Scene/AudioManagerComponent';
      // import { DialogManagerComponent } from '../Scene/DialogManagerComponent';
      // import { LoaderComponent } from '../Scene/LoaderComponent';
      // import { ScenePoolManagerComponent } from '../Scene/ScenePoolManagerComponent';
      // import { LocalizationComponent } from '../Text/LocalizationComponent';
      // import { TutorialLauncherComponent } from '../TutorialScene/TutorialLauncherComponent';
      // import { ISceneManager } from '../Scene/ISceneManager';
      // import { AppRoot } from './AppRoot';
      // import { Platform } from './ApplicationConfig';
      // import { LocationType } from "../Cocos/CCEnums";
      // import { BankSceneFactory } from '../BankScene/BankSceneFactory';
      // import { BusinessSceneFactory } from '../BusinessScene/BusinessSceneFactory';
      // import { CharInfoSceneFactory } from '../CharInfoScene/CharInfoSceneFactory';
      // import { CollectionSceneFactory } from '../CollectionScene/CollectionSceneFactory';
      // import { CreateCharacterSceneFactory } from '../CreateCharacterScene/CreateCharacterSceneFactory';
      // import { DeathSceneFactory } from '../DeathScene/DeathSceneFactory';
      // import { ItemsLayerFactory } from '../ItemsScene/ItemsLayerFactory';
      // import { JobLayerFactory } from '../ItemsScene/JobLayerFactory';
      // import { MetaSceneLayerFactory } from '../MetaScene/MetaSceneLayerFactory';
      // import { CardsSceneFactory } from '../MiniGames/Cards/CardsScene/CardsSceneFactory';
      // import { SlotSceneFactory } from '../MiniGames/Slots/SlotsScene/SlotSceneFactory';
      // import { X2MoneySceneFactory } from '../MiniGames/X2Money/X2MoneySceneFactory';
      // import { OffersLayerFactory } from '../OffersScene/OffersLayerFactory';
      // import { QuestsSceneFactory } from '../QuestScene/QuestsSceneFactory';
      // import { StoreLayerFactory } from '../StoreScene/StoreLayerFactory';
      // import { WelfareLayerFactory } from '../WelfareScene/WelfareLayerFactory';
      // import { NameConfig, SettingsConfig } from '../Settings/SettingsConfig';
      // import { StoreJsonConfig } from '../Store/StoreConfig';
      // import { OfflineTimer } from './Timers';
      // import { BackgroundManagerComponent } from '../Scene/BackgroundManagerComponent';
      ({
        ccclass,
        property,
        uniquelyReferenced
      } = _decorator);

      _export("GameManagerComponent", GameManagerComponent = (_dec = ccclass('GameManagerComponent'), _dec2 = property(JsonAsset), _dec3 = property(JsonAsset), _dec4 = property(JsonAsset), _dec(_class = uniquelyReferenced(_class = (_class2 = class GameManagerComponent extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "settingsFile", _descriptor, this);

          _initializerDefineProperty(this, "storeFile", _descriptor2, this);

          _initializerDefineProperty(this, "namesFile", _descriptor3, this);

          this._scene = void 0;
        }

        // private _dialog!:DialogManagerComponent
        // private _animations!:AnimationsManagerComponent
        // private _backgroundManager!:BackgroundManagerComponent
        // private _soundManager!:AudioManagerComponent
        // private _loader!:LoaderComponent
        // private _localizationComponent!:LocalizationComponent
        // private _tutorLauncher!:TutorialLauncherComponent
        onLoad() {
          director.addPersistRootNode(this.node);
          this._animations = this.getComponent(AnimationsManagerComponent);
          let scene = this.getComponent(_crd && ScenePoolManagerComponent === void 0 ? (_reportPossibleCrUseOfScenePoolManagerComponent({
            error: Error()
          }), ScenePoolManagerComponent) : ScenePoolManagerComponent);
          this._scene = scene;
          this._soundManager = this.getComponent(AudioManagerComponent);
          AppRoot.getInstance.Init(sys.os == sys.OS.IOS ? Platform.Ios : sys.os == sys.OS.ANDROID ? Platform.Android : Platform.Editor, this._scene, this._animations, this._soundManager, timer, this.settingsFile.json, this.storeFile.json, this.namesFile.json);
          AppRoot.getInstance.onLoad();
          scene.AddLocation((_crd && LocationType === void 0 ? (_reportPossibleCrUseOfLocationType({
            error: Error()
          }), LocationType) : LocationType).LoadingScene, "Prefabs/LoadingScene", 0);
          scene.AddLocation((_crd && LocationType === void 0 ? (_reportPossibleCrUseOfLocationType({
            error: Error()
          }), LocationType) : LocationType).StartScene, "Prefabs/StartScene", 0);
          scene.AddLocation((_crd && LocationType === void 0 ? (_reportPossibleCrUseOfLocationType({
            error: Error()
          }), LocationType) : LocationType).GameScene, "Prefabs/MainScene/MainScene", 1);
          scene.AddLocation((_crd && LocationType === void 0 ? (_reportPossibleCrUseOfLocationType({
            error: Error()
          }), LocationType) : LocationType).ScoreScene, "Prefabs/IntroOutro/IntroLayer", 2);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "settingsFile", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "storeFile", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "namesFile", [_dec4], {
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
//# sourceMappingURL=86606f925addcdec7261d0c5426a40c5165fc12e.js.map