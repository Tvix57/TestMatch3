System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ManagerTypes, SessionDeviceListener, _crd;

  function _reportPossibleCrUseOfAppDevice(extras) {
    _reporterNs.report("AppDevice", "../Application/AppDevice", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIApplicationHandler(extras) {
    _reporterNs.report("IApplicationHandler", "../Application/AppDevice", _context.meta, extras);
  }

  function _reportPossibleCrUseOfManagerTypes(extras) {
    _reporterNs.report("ManagerTypes", "../BusinessScene/ManagerTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameLogic(extras) {
    _reporterNs.report("GameLogic", "../Game/GameLogic", _context.meta, extras);
  }

  _export("SessionDeviceListener", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ManagerTypes = _unresolved_2.ManagerTypes;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a1ae0We6vFObp915QlUcBpT", "SessionDeviceListener", undefined);

      _export("SessionDeviceListener", SessionDeviceListener = class SessionDeviceListener {
        constructor(device, logic) {
          this.device = device;
          this.logic = logic;
          device.AddHandler(this);
        }

        RemoveHandler() {
          this.device.RemoveHandler(this);
        }

        OnPauseApplication() {
          this.UpdateSchedulers();
        }

        OnResumeApplication() {}

        UpdateSchedulers() {
          var count = 0;
          var _dailyBonusTimer = true;

          if (_dailyBonusTimer) {
            this.device.ResolveScheduler().ScheduleDMS("DailyBonus", "PushNotification.Title", "PushNotification.RewardedNotification", 9, 0, 0);
            count++;
          }

          if (count < 2) {
            var _confirm$length;

            var confirm = this.logic.ResolveDepositsContext().GetAll().filter(value => this.logic.ResolveDepositsContext().IsTimeComming(value));

            if (((_confirm$length = confirm.length) != null ? _confirm$length : 0) > 0) {
              this.device.ResolveScheduler().ScheduleDMS("DepositContext", "PushNotification.Title", "PushNotification.LongAwayNotification", 12, 30, 0);
              count++;
            }
          }

          if (count < 2) {
            var _filter$length;

            var filter = this.logic.ResolveBusiness().GetAll().filter(value => value.manager == (_crd && ManagerTypes === void 0 ? (_reportPossibleCrUseOfManagerTypes({
              error: Error()
            }), ManagerTypes) : ManagerTypes).NONE || value.manager == (_crd && ManagerTypes === void 0 ? (_reportPossibleCrUseOfManagerTypes({
              error: Error()
            }), ManagerTypes) : ManagerTypes).CASUAL);

            if (((_filter$length = filter == null ? void 0 : filter.length) != null ? _filter$length : 0) > 0) {
              this.device.ResolveScheduler().ScheduleDMS("BusinessContext", "PushNotification.Title", "PushNotification.LongAwayNotification", 12, 30, 0);
              count++;
            }
          }

          if (count < 2) {
            this.device.ResolveScheduler().ScheduleDMS("Reminder", "PushNotification.Title", "PushNotification.DailyNotification", 9, 0, 0);
            count++;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=643169aa23096feaac7cb01e33215cf88c373abf.js.map