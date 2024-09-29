System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameStats, _crd;

  function _reportPossibleCrUseOfField(extras) {
    _reporterNs.report("Field", "./Field", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIFieldHandler(extras) {
    _reporterNs.report("IFieldHandler", "./Field", _context.meta, extras);
  }

  _export("GameStats", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "afe6auvIYJE/6QxrxV1roPq", "GameStatsInfo", undefined);

      _export("GameStats", GameStats = class GameStats {
        constructor(field, stats) {
          this.field = field;
          this.stats = stats;
          field.AddHandler(this);
        }

        NewGame(name) {}

        EndGame(info) {
          this.stats.push(info);
        }

        GetData() {
          return this.stats;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=daf033c6da77ccd5c60547bd4fa65bcbd26d79b1.js.map