System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BallColor, FieldConfig, FieldController, _crd;

  function _reportPossibleCrUseOfBallColor(extras) {
    _reporterNs.report("BallColor", "../Enums/BallColor", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFieldConfig(extras) {
    _reporterNs.report("FieldConfig", "./FieldConfig", _context.meta, extras);
  }

  _export("FieldController", void 0);

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

      _cclegacy._RF.push({}, "294f2BV3vxBt5aeTMkpugUz", "FieldController", undefined);

      _export("FieldController", FieldController = class FieldController extends (_crd && FieldConfig === void 0 ? (_reportPossibleCrUseOfFieldConfig({
        error: Error()
      }), FieldConfig) : FieldConfig) {
        constructor(field) {
          super();
          this.field = field;
        }

        RemoveFromCoord(coord) {
          for (var ball of coord) {
            this.field[ball.x][ball.y] = (_crd && BallColor === void 0 ? (_reportPossibleCrUseOfBallColor({
              error: Error()
            }), BallColor) : BallColor).NONE;
          }
        }

        DropDownBalls() {// for(let x = 0; x < this.fieldSize; ++x) {
          //     for(let y = 0; y < this.fieldSize; ++y) {
          //         if (this.field[x][y] === BallColor.NONE) {
          //             let yAdditional = 1;
          //             while (this.field[x] && this.field[x][y] === BallColor.NONE) {
          //                 ++yAdditional;
          //             }
          //             this.field[x][y] = this.field[y + yAdditional][x];
          //             this.field[y + yAdditional][x] = BallColor.NONE;
          //         }
          //     }
          // }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8090426dc0319d7268166956bd50ca0a4c95f73c.js.map