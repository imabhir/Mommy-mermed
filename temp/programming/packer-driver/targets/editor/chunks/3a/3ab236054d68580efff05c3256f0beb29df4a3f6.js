System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Sprite, AudioSource, ResourceUtils, SingletonClass, SoundManager, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, glowing;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfResourceUtils(extras) {
    _reporterNs.report("ResourceUtils", "./Managers/ResourceUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingletonClass(extras) {
    _reporterNs.report("SingletonClass", "./SingleTon", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "./Managers/SoundManager", _context.meta, extras);
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
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      AudioSource = _cc.AudioSource;
    }, function (_unresolved_2) {
      ResourceUtils = _unresolved_2.ResourceUtils;
    }, function (_unresolved_3) {
      SingletonClass = _unresolved_3.SingletonClass;
    }, function (_unresolved_4) {
      SoundManager = _unresolved_4.SoundManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6bc1c3bymFI/bbYnwX17wFt", "glowing", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Animation', 'Node', 'SpriteFrame', 'Sprite', 'UITransform', 'Vec3', 'Prefab', 'instantiate', 'spriteAssembler', 'animation', 'AudioSource', 'AudioClip']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("glowing", glowing = (_dec = ccclass('glowing'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = class glowing extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "getMask", _descriptor, this);

          this.audio = null;
          this.soundsObj = null;
          this.check = true;
          this.soundManager = null;

          this.blink = img => {
            this.getMask.getComponent(Sprite).spriteFrame = img;
            this.node.getChildByName('Item_cat').getComponent(Sprite).spriteFrame = img;
            this.soundsObj = (_crd && SingletonClass === void 0 ? (_reportPossibleCrUseOfSingletonClass({
              error: Error()
            }), SingletonClass) : SingletonClass).getInstance();
            console.log(this.soundsObj.boolSound);
            this.audio = this.node.getComponent(AudioSource).clip;

            if (!this.soundsObj.boolSound) {
              this.soundManager.playSoundEffect((_crd && ResourceUtils === void 0 ? (_reportPossibleCrUseOfResourceUtils({
                error: Error()
              }), ResourceUtils) : ResourceUtils).getInstance().getMusicFile("sound"), false);
            }
          };
        }

        start() {
          // this.soundsObj=SingletonClass.getInstance();
          // console.log(this.soundsObj.boolSound)
          // this.audio = this.node.getComponent(AudioSource).clip;
          // if(!this.soundsObj.boolSound){
          //     this.audio.play(); 
          // }
          this.soundManager = (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).getInstance();
        }

        update() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "getMask", [_dec2], {
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
//# sourceMappingURL=3ab236054d68580efff05c3256f0beb29df4a3f6.js.map