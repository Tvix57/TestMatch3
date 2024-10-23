System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BallColor, FieldConfig, FieldGenerator, _crd;

  function _reportPossibleCrUseOfBallColor(extras) {
    _reporterNs.report("BallColor", "../Enums/BallColor", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFieldConfig(extras) {
    _reporterNs.report("FieldConfig", "./FieldConfig", _context.meta, extras);
  }

  _export("FieldGenerator", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BallColor = _unresolved_2.BallColor;
    }, function (_unresolved_3) {
      FieldConfig = _unresolved_3.FieldConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1d718nii8pIfqY70Octz8Wp", "FieldGenerator", undefined);

      _export("FieldGenerator", FieldGenerator = class FieldGenerator extends (_crd && FieldConfig === void 0 ? (_reportPossibleCrUseOfFieldConfig({
        error: Error()
      }), FieldConfig) : FieldConfig) {
        constructor(field) {
          super();
          this.field = field;
        }

        GenerateNewField() {
          this.field.length = this.fieldSize;

          for (var i = 0; i < this.fieldSize; ++i) {
            this.field[i] = new Array(this.fieldSize);
          }

          this.generateGaranteedStartCombinations();
          this.fillEmptyCellsRandom();
        }

        ShuffuleField() {}

        generateGaranteedStartCombinations() {
          for (var i = 0; i < this.garanteedStartCombinations; ++i) {
            var combinationValue = Object.values(_crd && BallColor === void 0 ? (_reportPossibleCrUseOfBallColor({
              error: Error()
            }), BallColor) : BallColor)[Math.floor(Math.random() * Object.values(_crd && BallColor === void 0 ? (_reportPossibleCrUseOfBallColor({
              error: Error()
            }), BallColor) : BallColor).length - 2)];
            var direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
            var startPosition = {
              x: Math.floor(Math.random() * (this.fieldSize - this.minCombinationLength)),
              y: Math.floor(Math.random() * (this.fieldSize - this.minCombinationLength))
            };

            if (direction === 'horizontal') {
              for (var j = 0; j < this.minCombinationLength; ++j) {
                this.field[startPosition.y][startPosition.x + j] = combinationValue;
              }
            } else {
              for (var _j = 0; _j < this.minCombinationLength; ++_j) {
                this.field[startPosition.y + _j][startPosition.x] = combinationValue;
              }
            }
          }
        }

        fillEmptyCellsRandom() {
          for (var i = 0; i < this.fieldSize; ++i) {
            for (var j = 0; j < this.fieldSize; ++j) {
              while (!((_this$field$i$j = this.field[i][j]) != null ? _this$field$i$j : null) || this.field[i][j] === undefined) {
                var _this$field$i$j;

                this.field[i][j] = Object.values(_crd && BallColor === void 0 ? (_reportPossibleCrUseOfBallColor({
                  error: Error()
                }), BallColor) : BallColor)[Math.floor(Math.random() * Object.values(_crd && BallColor === void 0 ? (_reportPossibleCrUseOfBallColor({
                  error: Error()
                }), BallColor) : BallColor).length - 2)];
              }
            }
          }

          ;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9029d29da768d0d61c9131e467b03357d6166eb6.js.map