System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, Platform;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8a35bmaTjVM14EHVXiMclE6", "ApplicationConfig", undefined);

      _export("Platform", Platform = /*#__PURE__*/function (Platform) {
        Platform[Platform["Editor"] = 0] = "Editor";
        Platform[Platform["Ios"] = 1] = "Ios";
        Platform[Platform["Android"] = 2] = "Android";
        return Platform;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d955999ca3937cf282cc1e66844f8175b9523e73.js.map