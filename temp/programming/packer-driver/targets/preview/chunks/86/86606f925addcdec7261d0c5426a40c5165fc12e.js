System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, sys, ScenePoolManagerComponent, LocationType, AppRoot, Platform, AudioManagerComponent, OfflineTimer, DialogManagerComponent, _dec, _class, _crd, ccclass, uniquelyReferenced, GameManagerComponent;

  function _reportPossibleCrUseOfISceneManager(extras) {
    _reporterNs.report("ISceneManager", "./Scene/ISceneManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScenePoolManagerComponent(extras) {
    _reporterNs.report("ScenePoolManagerComponent", "./Scene/ScenePoolManagerComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocationType(extras) {
    _reporterNs.report("LocationType", "./Enums/LocationType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppRoot(extras) {
    _reporterNs.report("AppRoot", "./Application/AppRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlatform(extras) {
    _reporterNs.report("Platform", "./Enums/ApplicationConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManagerComponent(extras) {
    _reporterNs.report("AudioManagerComponent", "./Scene/AudioManagerComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOfflineTimer(extras) {
    _reporterNs.report("OfflineTimer", "./Application/Timers", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDialogManagerComponent(extras) {
    _reporterNs.report("DialogManagerComponent", "./Dialog/DialogManagerComponent", _context.meta, extras);
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
      sys = _cc.sys;
    }, function (_unresolved_2) {
      ScenePoolManagerComponent = _unresolved_2.ScenePoolManagerComponent;
    }, function (_unresolved_3) {
      LocationType = _unresolved_3.LocationType;
    }, function (_unresolved_4) {
      AppRoot = _unresolved_4.AppRoot;
    }, function (_unresolved_5) {
      Platform = _unresolved_5.Platform;
    }, function (_unresolved_6) {
      AudioManagerComponent = _unresolved_6.AudioManagerComponent;
    }, function (_unresolved_7) {
      OfflineTimer = _unresolved_7.OfflineTimer;
    }, function (_unresolved_8) {
      DialogManagerComponent = _unresolved_8.DialogManagerComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c1362UsvV9E4LqM0J6IEX+3", "GameManagerComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'sys']);

      ({
        ccclass,
        uniquelyReferenced
      } = _decorator);

      _export("GameManagerComponent", GameManagerComponent = (_dec = ccclass('GameManagerComponent'), _dec(_class = uniquelyReferenced(_class = class GameManagerComponent extends Component {
        constructor() {
          super(...arguments);
          this._scene = void 0;
          this._soundManager = void 0;
          this._dialog = void 0;
        }

        onLoad() {
          director.addPersistRootNode(this.node);
          var scene = this.getComponent(_crd && ScenePoolManagerComponent === void 0 ? (_reportPossibleCrUseOfScenePoolManagerComponent({
            error: Error()
          }), ScenePoolManagerComponent) : ScenePoolManagerComponent);
          this._dialog = this.getComponent(_crd && DialogManagerComponent === void 0 ? (_reportPossibleCrUseOfDialogManagerComponent({
            error: Error()
          }), DialogManagerComponent) : DialogManagerComponent);
          this._scene = scene;
          this._soundManager = this.getComponent(_crd && AudioManagerComponent === void 0 ? (_reportPossibleCrUseOfAudioManagerComponent({
            error: Error()
          }), AudioManagerComponent) : AudioManagerComponent);
          var timer = this.node.getComponent(_crd && OfflineTimer === void 0 ? (_reportPossibleCrUseOfOfflineTimer({
            error: Error()
          }), OfflineTimer) : OfflineTimer);
          (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).getInstance.Init(this.getOS(), this._scene, this._soundManager, timer, this._dialog);
          (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).getInstance.onLoad();
          scene.AddLocation((_crd && LocationType === void 0 ? (_reportPossibleCrUseOfLocationType({
            error: Error()
          }), LocationType) : LocationType).LoadingScene, "Prefabs/LoadingScene", 0);
          scene.AddLocation((_crd && LocationType === void 0 ? (_reportPossibleCrUseOfLocationType({
            error: Error()
          }), LocationType) : LocationType).StartScene, "Prefabs/StartScene", 0);
          scene.AddLocation((_crd && LocationType === void 0 ? (_reportPossibleCrUseOfLocationType({
            error: Error()
          }), LocationType) : LocationType).GameScene, "Prefabs/GameScene", 1);
          scene.AddLocation((_crd && LocationType === void 0 ? (_reportPossibleCrUseOfLocationType({
            error: Error()
          }), LocationType) : LocationType).ScoreScene, "Prefabs/ScoreScene", 2);
        }

        getOS() {
          switch (sys.os) {
            case sys.OS.IOS:
              return (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                error: Error()
              }), Platform) : Platform).Ios;

            case sys.OS.ANDROID:
              return (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                error: Error()
              }), Platform) : Platform).Android;

            case sys.OS.WINDOWS:
              return (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                error: Error()
              }), Platform) : Platform).Editor;

            default:
              return (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                error: Error()
              }), Platform) : Platform).Editor;
          }
        }

      }) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=86606f925addcdec7261d0c5426a40c5165fc12e.js.map