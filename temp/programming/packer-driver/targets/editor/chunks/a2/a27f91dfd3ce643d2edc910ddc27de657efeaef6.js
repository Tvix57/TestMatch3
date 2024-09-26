System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Enum, LocationType, BallColor, AudioType, _crd;

  function _reportPossibleCrUseOfLocationType(extras) {
    _reporterNs.report("LocationType", "./LocationType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBallColor(extras) {
    _reporterNs.report("BallColor", "./BallColor", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioType(extras) {
    _reporterNs.report("AudioType", "../Scene/AudioManagerComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Enum = _cc.Enum;
    }, function (_unresolved_2) {
      LocationType = _unresolved_2.LocationType;
    }, function (_unresolved_3) {
      BallColor = _unresolved_3.BallColor;
    }, function (_unresolved_4) {
      AudioType = _unresolved_4.AudioType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c952dvFLc9ArInLcaNMSyWe", "CCEnums", undefined);

      __checkObsolete__(['_decorator', 'Enum']);

      Enum(_crd && LocationType === void 0 ? (_reportPossibleCrUseOfLocationType({
        error: Error()
      }), LocationType) : LocationType);

      _export("LocationType", LocationType);

      Enum(_crd && BallColor === void 0 ? (_reportPossibleCrUseOfBallColor({
        error: Error()
      }), BallColor) : BallColor);

      _export("BallColor", BallColor);

      Enum(_crd && AudioType === void 0 ? (_reportPossibleCrUseOfAudioType({
        error: Error()
      }), AudioType) : AudioType);

      _export("AudioType", AudioType);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a27f91dfd3ce643d2edc910ddc27de657efeaef6.js.map