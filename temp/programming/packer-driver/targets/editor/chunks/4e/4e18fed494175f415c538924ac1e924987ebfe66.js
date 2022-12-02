System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, AudioClip, SpriteFrame, Sprite, SingletonClass, SoundManager, ResourceUtils, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, SetiningMenu;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSingletonClass(extras) {
    _reporterNs.report("SingletonClass", "./singleTon", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "./managers/soundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourceUtils(extras) {
    _reporterNs.report("ResourceUtils", "./managers/resourceUtils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      AudioClip = _cc.AudioClip;
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      SingletonClass = _unresolved_2.SingletonClass;
    }, function (_unresolved_3) {
      SoundManager = _unresolved_3.SoundManager;
    }, function (_unresolved_4) {
      ResourceUtils = _unresolved_4.ResourceUtils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ec805QOf5BJD4ZG67ndnfSq", "settingMenu", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'AudioSource', 'AudioClip', 'Prefab', 'Button', 'SpriteFrame', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SetiningMenu", SetiningMenu = (_dec = ccclass('SetiningMenu'), _dec2 = property({
        type: AudioClip
      }), _dec3 = property({
        type: AudioClip
      }), _dec4 = property({
        type: Sprite
      }), _dec5 = property({
        type: Sprite
      }), _dec6 = property({
        type: SpriteFrame
      }), _dec7 = property({
        type: SpriteFrame
      }), _dec(_class = (_class2 = class SetiningMenu extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "audio", _descriptor, this);

          _initializerDefineProperty(this, "Sound", _descriptor2, this);

          _initializerDefineProperty(this, "musicButoon", _descriptor3, this);

          _initializerDefineProperty(this, "SoundButoon", _descriptor4, this);

          _initializerDefineProperty(this, "ButtonOn", _descriptor5, this);

          _initializerDefineProperty(this, "ButtonOff", _descriptor6, this);

          this.soundsObj = null;
          this.soundManager = null;
        }

        start() {
          this.soundsObj = (_crd && SingletonClass === void 0 ? (_reportPossibleCrUseOfSingletonClass({
            error: Error()
          }), SingletonClass) : SingletonClass).getInstance();
          this.soundManager = (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).getInstance();

          if (!this.soundsObj.boolSound) {
            this.SoundButoon.spriteFrame = this.ButtonOn;
          }

          if (!this.soundsObj.boolMusic) {
            this.musicButoon.spriteFrame = this.ButtonOn;
          }
        }

        handleStartButtonClick() {
          console.log("function call");

          if (!this.soundsObj.boolSound) {
            this.soundManager.playSoundEffect((_crd && ResourceUtils === void 0 ? (_reportPossibleCrUseOfResourceUtils({
              error: Error()
            }), ResourceUtils) : ResourceUtils).getInstance().getMusicFile("sound"), false);
          }

          if (this.soundsObj.boolSound) {
            this.soundManager.canPlaySound = this.soundsObj.boolSound;
            this.soundsObj.offsound();
            this.SoundButoon.spriteFrame = this.ButtonOn;
            this.soundManager.playSoundEffect((_crd && ResourceUtils === void 0 ? (_reportPossibleCrUseOfResourceUtils({
              error: Error()
            }), ResourceUtils) : ResourceUtils).getInstance().getMusicFile("sound"), false);
          } else {
            this.soundManager.canPlaySound = false;
            this.soundsObj.onSound();
            this.SoundButoon.spriteFrame = this.ButtonOff;
            this.soundManager.stopSoundEffect();
          }
        }

        handleStartButtonClick2() {
          if (this.soundsObj.boolMusic) {
            this.soundManager.canPlayMusic = this.soundsObj.boolMusic;
            this.soundsObj.offMusic();
            this.musicButoon.spriteFrame = this.ButtonOn;
            this.soundManager.playMusicClip((_crd && ResourceUtils === void 0 ? (_reportPossibleCrUseOfResourceUtils({
              error: Error()
            }), ResourceUtils) : ResourceUtils).getInstance().getMusicFile("Music"), true);
          } else {
            this.soundManager.canPlayMusic = false;
            this.soundsObj.onMusic();
            this.musicButoon.spriteFrame = this.ButtonOff;
            this.soundManager.stopMusic();
          }
        }

        close() {
          if (!this.soundsObj.boolSound) {
            this.soundManager.playSoundEffect((_crd && ResourceUtils === void 0 ? (_reportPossibleCrUseOfResourceUtils({
              error: Error()
            }), ResourceUtils) : ResourceUtils).getInstance().getMusicFile("sound"), false);
          }

          this.node.parent.active = false;
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "audio", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Sound", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "musicButoon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "SoundButoon", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ButtonOn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "ButtonOff", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4e18fed494175f415c538924ac1e924987ebfe66.js.map