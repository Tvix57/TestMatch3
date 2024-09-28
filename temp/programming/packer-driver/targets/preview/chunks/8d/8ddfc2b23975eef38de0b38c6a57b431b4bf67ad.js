System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioClip, AudioSource, Component, Node, AudioType, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _dec4, _dec5, _dec6, _dec7, _class4, _class5, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, AudioItem, AudioManagerComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudio(extras) {
    _reporterNs.report("Audio", "../Application/ApplicationInterfaces", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAudioManager(extras) {
    _reporterNs.report("IAudioManager", "../Application/ApplicationInterfaces", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioType(extras) {
    _reporterNs.report("AudioType", "../Enums/CCEnums", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      AudioType = _unresolved_2.AudioType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "40be8Urs2xIm7JC7DMFxSvL", "AudioManagerComponent", undefined);

      __checkObsolete__(['_decorator', 'Enum', 'AudioClip', 'AudioSource', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AudioItem", AudioItem = (_dec = ccclass('AudioItem'), _dec2 = property({
        type: _crd && AudioType === void 0 ? (_reportPossibleCrUseOfAudioType({
          error: Error()
        }), AudioType) : AudioType
      }), _dec3 = property(AudioClip), _dec(_class = (_class2 = class AudioItem {
        constructor() {
          _initializerDefineProperty(this, "type", _descriptor, this);

          _initializerDefineProperty(this, "clip", _descriptor2, this);

          this.useCount = 0;
        }

        set name(value) {
          this.clip ? this.clip.name = value : null;
        }

        get name() {
          var _this$clip$name, _this$clip;

          return (_this$clip$name = (_this$clip = this.clip) == null ? void 0 : _this$clip.name) != null ? _this$clip$name : "";
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && AudioType === void 0 ? (_reportPossibleCrUseOfAudioType({
            error: Error()
          }), AudioType) : AudioType).SOUND;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "clip", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "name", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "name"), _class2.prototype)), _class2)) || _class));

      _export("AudioManagerComponent", AudioManagerComponent = (_dec4 = ccclass('AudioManagerComponent'), _dec5 = property(AudioSource), _dec6 = property(Node), _dec7 = property({
        type: [AudioItem]
      }), _dec4(_class4 = (_class5 = class AudioManagerComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "musicLayer", _descriptor3, this);

          _initializerDefineProperty(this, "soundLayer", _descriptor4, this);

          _initializerDefineProperty(this, "audios", _descriptor5, this);
        }

        GetAudios() {
          return this.audios.map(value => {
            return {
              type: value.type,
              name: value.name,
              useCount: value.useCount
            };
          });
        }

        SetMusicLvl(val) {
          this.musicLayer.volume = val;
        }

        ActivateMusic(isActive) {}

        SetSoundLvl(val) {
          this.soundLayer.children.forEach(node => {
            node.getComponent(AudioSource).volume = val;
          });
        }

        ActivateSound(isActive) {}

        InitAudio(name, volume) {
          if (volume === void 0) {
            volume = 1.0;
          }

          var item = this.audios.find(item => item.name === name);

          if (item && item.type == (_crd && AudioType === void 0 ? (_reportPossibleCrUseOfAudioType({
            error: Error()
          }), AudioType) : AudioType).MUSIC) {
            this.addMusic(item, volume);
          } else if (item && item.type == (_crd && AudioType === void 0 ? (_reportPossibleCrUseOfAudioType({
            error: Error()
          }), AudioType) : AudioType).SOUND) {
            this.addSound(item, volume);
          }
        }

        RemoveAudio(name) {
          var item = this.audios.find(item => item.name === name);

          if (item && item.type == (_crd && AudioType === void 0 ? (_reportPossibleCrUseOfAudioType({
            error: Error()
          }), AudioType) : AudioType).MUSIC) {
            this.removeMusic(item);
          } else if (item && item.type == (_crd && AudioType === void 0 ? (_reportPossibleCrUseOfAudioType({
            error: Error()
          }), AudioType) : AudioType).SOUND) {
            this.removeSound(item);
          }
        }

        PlaySound(name) {
          var _this$soundLayer$getC;

          (_this$soundLayer$getC = this.soundLayer.getComponentsInChildren(AudioSource).find(cmp => {
            var _cmp$clip;

            return ((_cmp$clip = cmp.clip) == null ? void 0 : _cmp$clip.name) === name;
          })) == null ? void 0 : _this$soundLayer$getC.play();
        }

        BreakeSound(name) {
          var _this$soundLayer$getC2;

          (_this$soundLayer$getC2 = this.soundLayer.getComponentsInChildren(AudioSource).find(cmp => {
            var _cmp$clip2;

            return ((_cmp$clip2 = cmp.clip) == null ? void 0 : _cmp$clip2.name) === name;
          })) == null ? void 0 : _this$soundLayer$getC2.stop();
        }

        SetLoop(name, loop) {
          var item = this.soundLayer.getComponentsInChildren(AudioSource).find(cmp => {
            var _cmp$clip3;

            return ((_cmp$clip3 = cmp.clip) == null ? void 0 : _cmp$clip3.name) === name;
          });

          if (item) {
            item.loop = loop;
          }
        }

        addSound(item, volume) {
          if (volume === void 0) {
            volume = 1;
          }

          if (this.soundLayer.getComponentsInChildren(AudioSource).find(cmp => {
            var _cmp$clip4;

            return ((_cmp$clip4 = cmp.clip) == null ? void 0 : _cmp$clip4.name) === item.name;
          })) {
            item.useCount++;
            return;
          }

          var soundNode = new Node();
          var newCmp = soundNode.addComponent(AudioSource);
          newCmp.loop = newCmp.playOnAwake = false;
          newCmp.clip = item.clip;
          newCmp.volume = volume;
          this.soundLayer.addChild(soundNode);
        }

        addMusic(item, volume) {
          if (volume === void 0) {
            volume = 1;
          }

          if (item.clip !== this.musicLayer.clip) {
            this.setMusic(item, volume);
          }
        }

        removeSound(item) {
          var cmp = this.soundLayer.getComponentsInChildren(AudioSource).find(cmp => {
            var _cmp$clip5;

            return ((_cmp$clip5 = cmp.clip) == null ? void 0 : _cmp$clip5.name) === item.name;
          });

          if (cmp && item.useCount >= 1) {
            item.useCount--;

            if (item.useCount > 0) {
              return;
            }

            cmp.node.once(AudioSource.EventType.ENDED, () => {
              var _cmp$node$parent;

              (_cmp$node$parent = cmp.node.parent) == null ? void 0 : _cmp$node$parent.removeChild(cmp.node);
            });
          }
        }

        removeMusic(item) {// this.musicLayer.stop()
        }

        setMusic(item, volume) {
          if (volume === void 0) {
            volume = 1;
          }

          this.musicLayer.stop();
          this.musicLayer.volume = volume;
          this.musicLayer.clip = item.clip;
          this.musicLayer.play();
        }

      }, (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "musicLayer", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "soundLayer", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "audios", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class5)) || _class4));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8ddfc2b23975eef38de0b38c6a57b431b4bf67ad.js.map