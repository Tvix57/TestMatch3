System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, FieldConfig, FieldManager, _crd;

  function _reportPossibleCrUseOfBallColor(extras) {
    _reporterNs.report("BallColor", "../Enums/BallColor", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFieldConfig(extras) {
    _reporterNs.report("FieldConfig", "./FieldConfig", _context.meta, extras);
  }

  _export("FieldManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      FieldConfig = _unresolved_2.FieldConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e3b1hfb85KKYQYQlx6CJHU", "FieldManager", undefined);

      _export("FieldManager", FieldManager = class FieldManager extends (_crd && FieldConfig === void 0 ? (_reportPossibleCrUseOfFieldConfig({
        error: Error()
      }), FieldConfig) : FieldConfig) {
        constructor(field) {
          super();
          this.field = field;
        }

        CheckFromCoord(coord) {
          return [...this.checkVerticalFromCoord(coord), ...this.checkHorizontalFromCoord(coord)];
        }

        checkVerticalFromCoord(coord) {
          const result = [];
          let startY = coord.y;

          for (; this.field[coord.x][startY] && this.field[coord.x][startY] === this.field[coord.x][coord.y]; --startY) {
            result.push({
              x: coord.x,
              y: startY
            });
          }

          startY = coord.y + 1;

          for (; this.field[coord.x][startY] && this.field[coord.x][startY] === this.field[coord.x][coord.y]; ++startY) {
            result.push({
              x: coord.x,
              y: startY
            });
          }

          if (result.length >= this.minCombinationLength) return result;
          return [];
        }

        checkHorizontalFromCoord(coord) {
          const result = [];
          let startX = coord.x;

          for (; this.field[startX] && this.field[startX][coord.y] && this.field[startX][coord.y] === this.field[coord.x][coord.y]; --startX) {
            result.push({
              x: startX,
              y: coord.y
            });
          }

          startX = coord.x + 1;

          for (; this.field[startX] && this.field[startX][coord.y] && this.field[startX][coord.y] === this.field[coord.x][coord.y]; ++startX) {
            result.push({
              x: startX,
              y: coord.y
            });
          }

          if (result.length >= this.minCombinationLength) return result;
          return [];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f0ff9a4b33d3ff8204caf2921d3aa472c217e2f3.js.map