System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AppRoot, Types, GameoverListener, _crd;

  function _reportPossibleCrUseOfAdsContext(extras) {
    _reporterNs.report("AdsContext", "../Ads/AdsContext", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppRoot(extras) {
    _reporterNs.report("AppRoot", "../Application/AppRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfILifeHandler(extras) {
    _reporterNs.report("ILifeHandler", "../Game/Lifetime", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLifetime(extras) {
    _reporterNs.report("Lifetime", "../Game/Lifetime", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTypes(extras) {
    _reporterNs.report("Types", "../Game/Types", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIWelfareHandler(extras) {
    _reporterNs.report("IWelfareHandler", "../Game/Welfare", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIWelfare(extras) {
    _reporterNs.report("IWelfare", "../Game/Welfare", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDialogFactory(extras) {
    _reporterNs.report("DialogFactory", "../Scene/DialogFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIDialogLauncher(extras) {
    _reporterNs.report("IDialogLauncher", "./TransferHandlers", _context.meta, extras);
  }

  _export("GameoverListener", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AppRoot = _unresolved_2.AppRoot;
    }, function (_unresolved_3) {
      Types = _unresolved_3.Types;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cd607awZJNBIah3/fR8Jr90", "GameoverListener", undefined);
      /**
       *
       * GameoverListener.ts
       * db://assets/Scripts/Game/GameoverListener.ts
       *
       */


      _export("GameoverListener", GameoverListener = class GameoverListener {
        constructor(_welfare, _lifeTime, _adsContext, _dialogFactory, _restoreConfig) {
          this.endGameDialog = void 0;
          this._isShow = false;
          this._welfare = _welfare;
          this._lifeTime = _lifeTime;
          this._adsContext = _adsContext;
          this._dialogFactory = _dialogFactory;
          this._restoreConfig = _restoreConfig;

          _welfare.AddHandler(this);

          _lifeTime.AddHandler(this);
        }

        OnAgeChanged() {
          this.OnLife();
        }

        OnLifeChanged() {
          this.OnLife();
        }

        OnParameterChanged(type) {
          if (this._welfare.Get(type) <= 0) {
            this.MakePauseAndShowDialog(type);
          }
        }

        OnLife() {
          if (this._lifeTime.GetLife() <= this._lifeTime.GetAge()) {
            this.MakePauseAndShowDialog((_crd && Types === void 0 ? (_reportPossibleCrUseOfTypes({
              error: Error()
            }), Types) : Types).Age);
          }
        }

        AddDialogLauncher(launcher) {
          this.endGameDialog = launcher;
        }

        MakePauseAndShowDialog(type) {
          if (this._isShow) return;
          this._isShow = true;

          this._dialogFactory.CreateDialog(isOk => {
            this._isShow = false;
            (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
              error: Error()
            }), AppRoot) : AppRoot).getInstance.ResolveStatistic().ResolveStatistic().ResolveGameReporter().ReportLastChance(isOk);

            if (!isOk) {
              var _this$endGameDialog;

              if (type === (_crd && Types === void 0 ? (_reportPossibleCrUseOfTypes({
                error: Error()
              }), Types) : Types).Age || type === (_crd && Types === void 0 ? (_reportPossibleCrUseOfTypes({
                error: Error()
              }), Types) : Types).Happiness || type === (_crd && Types === void 0 ? (_reportPossibleCrUseOfTypes({
                error: Error()
              }), Types) : Types).Health) {
                (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
                  error: Error()
                }), AppRoot) : AppRoot).getInstance.ResolveStatistic().ResolveStatistic().ResolveGameReporter().ReportGameOver(this._lifeTime.GetAge(), type.toString()); ///// fixme can be error
              } else {
                (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
                  error: Error()
                }), AppRoot) : AppRoot).getInstance.ResolveStatistic().ResolveStatistic().ResolveGameReporter().ReportGameOver(this._lifeTime.GetAge(), "Restart");
              }

              (_this$endGameDialog = this.endGameDialog) == null ? void 0 : _this$endGameDialog.Show();
            } else {
              this.ShowAds(type);
            }
          });
        }

        ShowAds(type) {
          this._adsContext.ResolveVideoreward().Show(isReward => {
            if (type === (_crd && Types === void 0 ? (_reportPossibleCrUseOfTypes({
              error: Error()
            }), Types) : Types).Age) {
              this._lifeTime.AddLifeMonth(this._restoreConfig.lifeExtendBy);
            } else {
              this._welfare.Add((_crd && Types === void 0 ? (_reportPossibleCrUseOfTypes({
                error: Error()
              }), Types) : Types).Happiness, this._restoreConfig.welfareIncreaseBy);

              this._welfare.Add((_crd && Types === void 0 ? (_reportPossibleCrUseOfTypes({
                error: Error()
              }), Types) : Types).Health, this._restoreConfig.welfareIncreaseBy);
            }
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=76cb67036cc5edaaf7aec909fff4334c7395c74b.js.map