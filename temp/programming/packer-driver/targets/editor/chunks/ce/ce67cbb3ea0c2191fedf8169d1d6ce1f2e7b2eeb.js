System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, AnimationComponent, Component, Node, Dispatcher, DialogEntry, _dec, _dec2, _class2, _class3, _descriptor, _crd, ccclass, property, DialogManagerComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDispatcher(extras) {
    _reporterNs.report("Dispatcher", "../Utils/Dispatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIDialogManager(extras) {
    _reporterNs.report("IDialogManager", "./IDialogManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIDialogHandler(extras) {
    _reporterNs.report("IDialogHandler", "./IDialogManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      AnimationComponent = _cc.AnimationComponent;
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      Dispatcher = _unresolved_2.Dispatcher;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3b64bKvxnNLJJTZwwdYmZF+", "DialogManagerComponent", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'AnimationComponent', 'AnimationState', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      DialogEntry = class DialogEntry {
        constructor(node, priority, dialogName) {
          this.node = void 0;
          this.priority = void 0;
          this.dialogName = void 0;
          this.node = node;
          this.priority = priority;
          this.dialogName = dialogName;
        }

      };

      _export("DialogManagerComponent", DialogManagerComponent = (_dec = ccclass('DialogManagerComponent'), _dec2 = property(Node), _dec(_class2 = (_class3 = class DialogManagerComponent extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "dialogNode", _descriptor, this);

          this._dispatcher = new (_crd && Dispatcher === void 0 ? (_reportPossibleCrUseOfDispatcher({
            error: Error()
          }), Dispatcher) : Dispatcher)();
          this._dialogStack = [];
          this._isShow = false;
        }

        OpenDialog(node, dialogName, priority = 0) {
          let newEntry = new DialogEntry(node, priority, dialogName);

          let index = this._dialogStack.findIndex(h => h.priority < priority);

          if (index != -1) {
            this._dialogStack.splice(index + (this._isShow ? 1 : 0), 0, newEntry);
          } else {
            this._dialogStack.push(newEntry);

            this._dispatcher.Post(h => h.WillDialogShow == null ? void 0 : h.WillDialogShow());
          }
        }

        CloseDialog() {
          if (!this._isShow || this._dialogStack.length == 0) return false;

          const component = this._dialogStack[0].node.getComponent(AnimationComponent);

          component == null ? void 0 : component.play("Close");
          component == null ? void 0 : component.on(Animation.EventType.FINISHED, this.onAnimationEvent, this);
          return true;
        }

        GetTopDialogName() {
          return this._dialogStack.length > 0 ? this._dialogStack[0].dialogName : "";
        }

        CloseAllDialogs() {
          this.dialogNode.removeAllChildren();
          this._dialogStack.length = 0;
          this._isShow = false;
        }

        onAnimationEvent(type, state) {
          this.dialogNode.removeAllChildren();

          this._dialogStack.shift();

          this._isShow = false;
        }

        update(dt) {
          if (!this._isShow && this._dialogStack.length > 0) {
            var _this$_dialogStack$0$;

            this._isShow = true;
            this.dialogNode.addChild(this._dialogStack[0].node);
            (_this$_dialogStack$0$ = this._dialogStack[0].node.getComponent(AnimationComponent)) == null ? void 0 : _this$_dialogStack$0$.play("Open");

            this._dispatcher.Post(h => h.OnDialogShow == null ? void 0 : h.OnDialogShow());
          }
        }

        AddHandler(arg) {
          this._dispatcher.AddObserver(arg);
        }

        RemoveHandler(arg) {
          this._dispatcher.RemoveObserver(arg);
        }

        RemoveAll() {
          this._dispatcher.RemoveAll();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "dialogNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class3)) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ce67cbb3ea0c2191fedf8169d1d6ce1f2e7b2eeb.js.map