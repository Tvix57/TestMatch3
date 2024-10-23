System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, FieldConfig, _crd;

  _export("FieldConfig", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "34f24hRnDJIHLspIyy0xEqZ", "FieldConfig", undefined);

      _export("FieldConfig", FieldConfig = class FieldConfig {
        constructor() {
          this.minCombinationLength = 3;
          this.garanteedStartCombinations = 4;
          this.fieldSize = 20;
        }

        static get getConfig() {
          if (this.config == null) {
            this.config = new FieldConfig();
          }

          return this.config;
        }

      });

      FieldConfig.config = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ae5bd35d9475f7326a21984a07a6895010861304.js.map