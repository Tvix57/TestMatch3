System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, find, log, UITransform, warn, _dec, _dec2, _class, _crd, ccclass, requireComponent, DeviceAreaSizeComponent;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      find = _cc.find;
      log = _cc.log;
      UITransform = _cc.UITransform;
      warn = _cc.warn;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "327bactCtNBto8uUgs1oRV0", "DeviceAreaSizeComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'find', 'log', 'Node', 'UITransform', 'warn']);

      ({
        ccclass,
        requireComponent
      } = _decorator);

      _export("DeviceAreaSizeComponent", DeviceAreaSizeComponent = (_dec = ccclass('DeviceAreaSizeComponent'), _dec2 = requireComponent(UITransform), _dec(_class = _dec2(_class = class DeviceAreaSizeComponent extends Component {
        constructor(...args) {
          super(...args);
          this._deviceAreaNode = void 0;
        }

        onLoad() {
          let area = find("Canvas/DeviceArea");

          if (area == null) {
            warn("Canvas/DeviceArea not found");
            log("Canvas/DeviceArea not found");
          } else {
            this._deviceAreaNode = area;
          }
        }

        start() {
          let transfom = this.getComponent(UITransform);
          transfom.setContentSize(this._deviceAreaNode.getComponent(UITransform).contentSize);
        }

      }) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cdb49557004fb5735bfcb8f3571f28f6aa6b7bb8.js.map