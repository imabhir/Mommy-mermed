System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ImageAsset, Prefab, instantiate, CCInteger, UITransform, Vec3, photoSlice2, SingletonClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, GamePlay;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfphotoSlice(extras) {
    _reporterNs.report("photoSlice2", "./photoSlice2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingletonClass(extras) {
    _reporterNs.report("SingletonClass", "./SingleTon", _context.meta, extras);
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
      ImageAsset = _cc.ImageAsset;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      CCInteger = _cc.CCInteger;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      photoSlice2 = _unresolved_2.photoSlice2;
    }, function (_unresolved_3) {
      SingletonClass = _unresolved_3.SingletonClass;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fcf2fMZHQJA17ZOoAX4VlDg", "GamePlay", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'ImageAsset', 'SpriteFrame', 'Texture2D', 'math', 'Sprite', 'macro', 'Prefab', 'instantiate', 'Label', 'Enum', 'CCInteger', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GamePlay", GamePlay = (_dec = ccclass('GamePlay'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: ImageAsset
      }), _dec4 = property({
        type: Prefab
      }), _dec5 = property({
        type: Prefab
      }), _dec6 = property({
        type: CCInteger
      }), _dec7 = property({
        type: CCInteger
      }), _dec(_class = (_class2 = class GamePlay extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "settingMenu", _descriptor, this);

          _initializerDefineProperty(this, "imageAssert", _descriptor2, this);

          _initializerDefineProperty(this, "slicePrefab", _descriptor3, this);

          _initializerDefineProperty(this, "imageGlow", _descriptor4, this);

          _initializerDefineProperty(this, "spilt", _descriptor5, this);

          _initializerDefineProperty(this, "sliceNumber", _descriptor6, this);

          this.imgCallback = null;
          this.smallSlice = null;
          this.selectedImage = null;
          this.soundsObj = null;
          this.puzzleResult = false;
          this.frameCh = null;

          this.imageComplete = (result, pos) => {
            if (result) {
              this.frameCh.removeAllChildren();
            }

            this.puzzleResult = result;
            this.imgCallback(this.puzzleResult, pos);
          };
        }

        start() {
          this.soundsObj = (_crd && SingletonClass === void 0 ? (_reportPossibleCrUseOfSingletonClass({
            error: Error()
          }), SingletonClass) : SingletonClass).getInstance();
          this.soundsObj.currentlvl = this.spilt;
        }

        handleStartButtonClick() {
          var setting = instantiate(this.settingMenu);
          this.node.addChild(setting);
        }

        setImageforSlice(imageAsset, inc, callback) {
          this.imgCallback = callback;
          var a = new Array();
          var loopNum = 0;
          var frame = this.node.getChildByName('Frame');
          this.frameCh = frame.getChildByName('frameChild');
          this.frameCh.removeAllChildren();
          console.log(inc, "Index");

          if (inc % 4 == 0) {
            this.soundsObj.currentlvl++;
            this.spilt = this.soundsObj.currentlvl;
          }

          for (var i = 0; i < this.spilt; i++) {
            this.smallSlice = instantiate(this.slicePrefab);
            this.smallSlice.getComponent(_crd && photoSlice2 === void 0 ? (_reportPossibleCrUseOfphotoSlice({
              error: Error()
            }), photoSlice2) : photoSlice2).setSlice(this.spilt, i, imageAsset, this.imageComplete);
            this.smallSlice.setPosition(new Vec3(0, i * this.smallSlice.getComponent(UITransform).height, 0));
            this.frameCh.addChild(this.smallSlice);
            var pos = this.smallSlice.getPosition();
            var radomH = this.fgetRandom(a, 0, this.spilt);
            this.smallSlice.setSiblingIndex(radomH);

            if (a[radomH] != undefined) {
              for (var _i = 0; _i < this.spilt; _i++) {
                if (a[_i] == undefined) {
                  radomH = _i;
                  a[_i] = 1;
                  break;
                }
              }
            } else {
              a[radomH] = 1;
            }

            pos.y = imageAsset.height / 2 - imageAsset.height / this.spilt - radomH * (imageAsset.height / this.spilt);
            pos.y += imageAsset.height / this.spilt / 2;
            this.smallSlice.setPosition(pos);
            loopNum++;
          }
        }

        fgetRandom(a, min, max) {
          var flag = true;
          var value = Math.floor(Math.random() * (max - min) + min);
          return value;
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "settingMenu", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "imageAssert", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "slicePrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "imageGlow", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spilt", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sliceNumber", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=322e4dd3cad66cd51dd89755c4acd044d2cd861e.js.map