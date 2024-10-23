System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, FieldConfig, FieldListener, _crd;

  function _reportPossibleCrUseOfBallColor(extras) {
    _reporterNs.report("BallColor", "../Enums/BallColor", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFieldConfig(extras) {
    _reporterNs.report("FieldConfig", "./FieldConfig", _context.meta, extras);
  }

  _export("FieldListener", void 0);

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

      _cclegacy._RF.push({}, "2c538I5DztJi7Qx2uoPs1hN", "FieldListener", undefined); //// отслеживание кликов на ячейки и оставщиеся ходы


      _export("FieldListener", FieldListener = class FieldListener extends (_crd && FieldConfig === void 0 ? (_reportPossibleCrUseOfFieldConfig({
        error: Error()
      }), FieldConfig) : FieldConfig) {
        constructor(field) {
          super();
          this.field = field;
        }

        CheckAvailableOption() {
          return this.checkAllVerticalOption() || this.checkAllHorizontalOption();
        }

        checkAllVerticalOption() {
          for (var j = 0; j < this.field[0].length; j++) {
            var consecutiveSameColorCount = 1;
            var currentColor = this.field[0][j];

            for (var i = 1; i < this.field.length; i++) {
              if (this.field[i][j] === currentColor) {
                consecutiveSameColorCount++;
              } else {
                currentColor = this.field[i][j];
                consecutiveSameColorCount = 1;
              }

              if (consecutiveSameColorCount === this.minCombinationLength) {
                return true;
              }
            }
          }
        }

        checkAllHorizontalOption() {
          for (var i = 0; i < this.field.length; i++) {
            var consecutiveSameColorCount = 1;
            var currentColor = this.field[i][0];

            for (var j = 1; j < this.field[i].length; j++) {
              if (this.field[i][j] === currentColor) {
                consecutiveSameColorCount++;
              } else {
                currentColor = this.field[i][j];
                consecutiveSameColorCount = 1;
              }

              if (consecutiveSameColorCount === this.minCombinationLength) {
                return true;
              }
            }
          }

          return false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=16cf5302d1067416c0ba71cfb000fcaa28e6919a.js.map