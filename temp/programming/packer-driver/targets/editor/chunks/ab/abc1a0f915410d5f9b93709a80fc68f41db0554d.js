System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BallColor, AbstractDispatcher, Field, _crd;

  function _reportPossibleCrUseOfBallColor(extras) {
    _reporterNs.report("BallColor", "../Enums/BallColor", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbstractDispatcher(extras) {
    _reporterNs.report("AbstractDispatcher", "../Utils/Dispatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatsInfo(extras) {
    _reporterNs.report("GameStatsInfo", "./GameStatsInfo", _context.meta, extras);
  }

  _export("Field", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BallColor = _unresolved_2.BallColor;
    }, function (_unresolved_3) {
      AbstractDispatcher = _unresolved_3.AbstractDispatcher;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6521eNbYMNPc5xb3oMLLJMi", "Field", undefined);

      _export("Field", Field = class Field extends (_crd && AbstractDispatcher === void 0 ? (_reportPossibleCrUseOfAbstractDispatcher({
        error: Error()
      }), AbstractDispatcher) : AbstractDispatcher) {
        constructor(isFinished, field) {
          super();
          this.minCombinationLength = 3;
          this.garanteedStartCombinations = 4;
          this.fieldSize = 20;
          this.name = "name";
          this.currentScore = 0;
          this.field = field;
          if (this.field.length === 0 || isFinished) this.generateNewField();
        }

        GetField() {
          return this.field;
        }

        StartNewGame(name) {
          this.name = name;
          this.currentScore = 0;
          this.generateNewField();
        }

        OnBallClick(coord) {
          const addScore = this.checkFromCoord(coord);

          if (addScore.length != 0) {
            this.addScore(addScore.length);
            this.removeFromCoord(addScore); /// await animation

            this.dropDownBalls(); /// await animation

            this.fillEmptyCellsRandom();

            this._dispatcher.Post(h => h.UpdateField == null ? void 0 : h.UpdateField(this.field, true));
          }

          if (!this.checkAllOption()) {
            this._dispatcher.Post(h => h.EndGame({
              name: this.name,
              score: this.currentScore
            }));
          }
        }

        addScore(score) {
          this.currentScore += score;

          this._dispatcher.Post(h => h.NewScore == null ? void 0 : h.NewScore(this.currentScore));
        }

        checkFromCoord(coord) {
          const addScore = [];
          addScore.concat(this.checkVerticalFromCoord(coord)).concat(this.checkHorizontalFromCoord(coord)).concat(this.checkDiagonalFromCoord(coord));
          return addScore;
        }

        checkVerticalFromCoord(coord) {
          const result = [];
          let startY = coord.y;

          for (; this.field[startY] && this.field[startY][coord.x] === this.field[coord.y][coord.x]; --startY) {
            result.push({
              x: coord.x,
              y: startY
            });
          }

          startY = coord.y + 1;

          for (; this.field[startY] && this.field[startY][coord.x] === this.field[coord.y][coord.x]; ++startY) {
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

          for (; this.field[coord.y][startX] && this.field[coord.y][startX] === this.field[coord.y][coord.x]; --startX) {
            result.push({
              x: startX,
              y: coord.y
            });
          }

          startX = coord.x + 1;

          for (; this.field[coord.y][startX] && this.field[coord.y][startX] === this.field[coord.y][coord.x]; ++startX) {
            result.push({
              x: startX,
              y: coord.y
            });
          }

          if (result.length >= this.minCombinationLength) return result;
          return [];
        }

        checkDiagonalFromCoord(coord) {
          const result = [];
          let startX = coord.x;
          let startY = coord.y;

          for (; this.field[startY][startX] && this.field[startY][startX] === this.field[coord.y][coord.x];) {
            result.push({
              x: startX,
              y: startY
            });
            --startY;
            --startX;
          }

          startX = coord.x + 1;
          startY = coord.y + 1;

          for (; this.field[coord.y][startX] && this.field[startY][startX] === this.field[coord.y][coord.x];) {
            result.push({
              x: startX,
              y: startY
            });
            ++startX;
            ++startY;
          }

          if (result.length >= this.minCombinationLength) return result;
          return [];
        }

        removeFromCoord(coord) {
          for (const ball of coord) {
            this.field[ball.y][ball.x] = (_crd && BallColor === void 0 ? (_reportPossibleCrUseOfBallColor({
              error: Error()
            }), BallColor) : BallColor).NONE;
          }

          this._dispatcher.Post(h => h.UpdateField == null ? void 0 : h.UpdateField(this.field, false));
        }

        dropDownBalls() {
          for (let y = 0; y < this.fieldSize; ++y) {
            for (let x = 0; x < this.fieldSize; ++x) {
              if (this.field[y][x] === (_crd && BallColor === void 0 ? (_reportPossibleCrUseOfBallColor({
                error: Error()
              }), BallColor) : BallColor).NONE) {
                let yAdditional = 1;

                while (this.field[y + yAdditional] && this.field[y + yAdditional][x] === (_crd && BallColor === void 0 ? (_reportPossibleCrUseOfBallColor({
                  error: Error()
                }), BallColor) : BallColor).NONE) {
                  ++yAdditional;
                }

                this.field[y][x] = this.field[y + yAdditional][x];
                this.field[y + yAdditional][x] = (_crd && BallColor === void 0 ? (_reportPossibleCrUseOfBallColor({
                  error: Error()
                }), BallColor) : BallColor).NONE;
              }
            }
          }

          this._dispatcher.Post(h => h.UpdateField == null ? void 0 : h.UpdateField(this.field, false));
        }

        checkAllOption() {
          if (this.checkAllVerticalOption() || this.checkAllHorizontalOption() || this.checkAllDiagonalOption()) return true;
          return false;
        }

        checkAllVerticalOption() {
          for (let j = 0; j < this.field[0].length; j++) {
            let consecutiveSameColorCount = 1;
            let currentColor = this.field[0][j];

            for (let i = 1; i < this.field.length; i++) {
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
          for (let i = 0; i < this.field.length; i++) {
            let consecutiveSameColorCount = 1;
            let currentColor = this.field[i][0];

            for (let j = 1; j < this.field[i].length; j++) {
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

        checkAllDiagonalOption() {
          for (let i = 0; i < this.field.length - 2; ++i) {
            for (let j = 0; j < this.field[i].length - 2; ++j) {
              let consecutiveSameColorCount = 1;
              let currentColor = this.field[i][j];

              for (let k = 1; k < 3; k++) {
                if (this.field[i + k][j + k] === currentColor) {
                  consecutiveSameColorCount++;
                } else {
                  currentColor = this.field[i + k][j + k];
                  consecutiveSameColorCount = 1;
                }

                if (consecutiveSameColorCount === this.minCombinationLength) {
                  return true;
                }
              }
            }
          }

          return false;
        }

        generateNewField() {
          this.field = new Array(this.fieldSize).fill(null).map(() => new Array(this.fieldSize).fill(null));
          this.generateGaranteedStartCombinations();
          this.fillEmptyCellsRandom();

          this._dispatcher.Post(h => h.UpdateField == null ? void 0 : h.UpdateField(this.field, true));
        }

        generateGaranteedStartCombinations() {
          for (let i = 0; i < this.garanteedStartCombinations; ++i) {
            const combinationValue = Object.values(_crd && BallColor === void 0 ? (_reportPossibleCrUseOfBallColor({
              error: Error()
            }), BallColor) : BallColor)[Math.floor(Math.random() * Object.values(_crd && BallColor === void 0 ? (_reportPossibleCrUseOfBallColor({
              error: Error()
            }), BallColor) : BallColor).length - 1)];
            const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
            const startPosition = {
              x: Math.floor(Math.random() * (this.fieldSize - this.minCombinationLength)),
              y: Math.floor(Math.random() * (this.fieldSize - this.minCombinationLength))
            };

            if (direction === 'horizontal') {
              for (let j = 0; j < this.minCombinationLength; ++j) {
                this.field[startPosition.y][startPosition.x + j] = combinationValue;
              }
            } else {
              for (let j = 0; j < this.minCombinationLength; ++j) {
                this.field[startPosition.y + j][startPosition.x] = combinationValue;
              }
            }
          }
        }

        fillEmptyCellsRandom() {
          for (let i = 0; i < this.fieldSize; ++i) {
            for (let j = 0; j < this.fieldSize; ++j) {
              if (this.field[i][j] === null) {
                this.field[i][j] = Object.values(_crd && BallColor === void 0 ? (_reportPossibleCrUseOfBallColor({
                  error: Error()
                }), BallColor) : BallColor)[Math.floor(Math.random() * Object.values(_crd && BallColor === void 0 ? (_reportPossibleCrUseOfBallColor({
                  error: Error()
                }), BallColor) : BallColor).length - 1)];
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
//# sourceMappingURL=abc1a0f915410d5f9b93709a80fc68f41db0554d.js.map