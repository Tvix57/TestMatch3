System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AudioType, AbstrastAudio, Sound, Music, AppAudio, _crd, SoundLvl;

  function _reportPossibleCrUseOfAudioType(extras) {
    _reporterNs.report("AudioType", "../Scene/AudioManagerComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSettingsState(extras) {
    _reporterNs.report("SettingsState", "../Settings/SettingsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudio(extras) {
    _reporterNs.report("Audio", "./ApplicationInterfaces", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAudioManager(extras) {
    _reporterNs.report("IAudioManager", "./ApplicationInterfaces", _context.meta, extras);
  }

  _export("AppAudio", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AudioType = _unresolved_2.AudioType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ffb83EQUC1CvLG5F2j5oM0+", "AppAudio", undefined);

      SoundLvl = /*#__PURE__*/function (SoundLvl) {
        SoundLvl[SoundLvl["OFF"] = 0] = "OFF";
        SoundLvl[SoundLvl["ON"] = 0.3] = "ON";
        return SoundLvl;
      }(SoundLvl || {});

      AbstrastAudio = class AbstrastAudio {
        constructor(mngr, items) {
          this._items = [];
          this._mngr = void 0;
          this.isActive = true;
          this._mngr = mngr;
          this._items = items;
        }

      };
      Sound = class Sound extends AbstrastAudio {
        constructor(mng) {
          super(mng, mng.GetAudios().filter(item => item.type == 0));
        }

        Activate() {
          this._mngr.SetSoundLvl(SoundLvl.ON);
        }

        Deactivate() {
          this._mngr.SetSoundLvl(SoundLvl.OFF);
        }

      };
      Music = class Music extends AbstrastAudio {
        constructor(mng) {
          super(mng, mng.GetAudios().filter(item => item.type == 1));
        }

        Activate() {
          this._mngr.SetMusicLvl(SoundLvl.ON);
        }

        Deactivate() {
          this._mngr.SetMusicLvl(SoundLvl.OFF);
        }

      };

      _export("AppAudio", AppAudio = class AppAudio {
        constructor(manager, setting) {
          this._sound = void 0;
          this._music = void 0;
          this._mng = void 0;
          this._mng = manager;
          this._sound = new Sound(manager);
          this._music = new Music(manager);
          setting.musicState ? this._music.Activate() : this._music.Deactivate();
          setting.soundState ? this._sound.Activate() : this._sound.Deactivate();
        }

        ResolveAudio(type) {
          if (type == (_crd && AudioType === void 0 ? (_reportPossibleCrUseOfAudioType({
            error: Error()
          }), AudioType) : AudioType).SOUND) return this._sound;
          if (type == (_crd && AudioType === void 0 ? (_reportPossibleCrUseOfAudioType({
            error: Error()
          }), AudioType) : AudioType).MUSIC) return this._music;
          return null;
        }

        ResolveSound() {
          return this._sound;
        }

        ResolveMusic() {
          return this._music;
        }

        ResolveAudioManager() {
          return this._mng;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6fb63abd3ee4062e6e5725fd794ec010fe77cd13.js.map