System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, resources, Prefab, instantiate, SpriteFrame, ImageAsset, UITransform, GamePlay, glowing, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, resourceLoader;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGamePlay(extras) {
    _reporterNs.report("GamePlay", "./GamePlay", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglowing(extras) {
    _reporterNs.report("glowing", "./glowing", _context.meta, extras);
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
      resources = _cc.resources;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      SpriteFrame = _cc.SpriteFrame;
      ImageAsset = _cc.ImageAsset;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      GamePlay = _unresolved_2.GamePlay;
    }, function (_unresolved_3) {
      glowing = _unresolved_3.glowing;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "86341eSp01NFrskQUGySOGZ", "resourceLoader", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'resources', 'Prefab', 'instantiate', 'director', 'SpriteFrame', 'Sprite', 'Texture2D', 'ImageAsset', 'SystemEvent', 'Input', 'Scene', 'SceneAsset', 'Vec3', 'UITransform', 'JsonAsset']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("resourceLoader", resourceLoader = (_dec = ccclass("resourceLoader"), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Prefab
      }), _dec5 = property({
        type: Prefab
      }), _dec(_class = (_class2 = class resourceLoader extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "imageSlicer", _descriptor, this);

          _initializerDefineProperty(this, "settingMenu", _descriptor2, this);

          _initializerDefineProperty(this, "imageArray", _descriptor3, this);

          this.inc = 0;

          _initializerDefineProperty(this, "glowPrefab", _descriptor4, this);

          this.img = null;
          this.ImageSlide = null;
          this.result = false;
          this.glowInstantiate = null;
          this.child = null;

          this.settingOpen = () => {
            var setting = instantiate(this.settingMenu);
            this.node.addChild(setting);
          };

          this.prevImage = () => {
            this.ImageSlide.destroy();
            this.child.active = true;
            this.inc = 0;
          };

          this.resetImage = () => {
            this.glowInstantiate.destroy();
            this.ImageSlide.getComponent(_crd && GamePlay === void 0 ? (_reportPossibleCrUseOfGamePlay({
              error: Error()
            }), GamePlay) : GamePlay).setImageforSlice(this.imageArray[this.inc], this.inc, this.addGlow);
          };

          this.nextImage = () => {
            console.log("Next Image button");

            if (this.result) {
              if (this.inc < this.imageArray.length) {
                ++this.inc;
                this.ImageSlide.destroy();
                this.addSlider();
              }
            } else {
              console.log("END OF ARRAY");
            }
          };

          this.addGlow = (result, pos) => {
            this.result = result;
            this.glowInstantiate = instantiate(this.glowPrefab);
            this.img = SpriteFrame.createWithImage(this.imageArray[this.inc]);
            this.glowInstantiate.getComponent(_crd && glowing === void 0 ? (_reportPossibleCrUseOfglowing({
              error: Error()
            }), glowing) : glowing).blink(this.img);
            var sprite = this.glowInstantiate.getChildByName('Item_cat');
            var maskContent = this.glowInstantiate.getChildByName('Mask');
            this.ImageSlide.addChild(this.glowInstantiate);
            this.glowInstantiate.setPosition(0, pos.y, 0);
            var imageRect = this.img._rect;
            sprite.getComponent(UITransform).height = imageRect.height;
            sprite.getComponent(UITransform).width = imageRect.width;
            maskContent.getComponent(UITransform).height = imageRect.height;
            maskContent.getComponent(UITransform).width = imageRect.width;
          };
        }

        start() {}

        handleStartButtonClick() {
          console.log("hello");
          this.child = this.node.getChildByName("Node");
          this.addSlider();
        }

        addSlider() {
          this.result = false;
          this.child.active = false;
          this.ImageSlide = instantiate(this.imageSlicer);
          this.node.addChild(this.ImageSlide);
          this.getImages();
        }

        getImages() {
          resources.loadDir('Images', ImageAsset, (err, item) => {
            if (err) {
              console.log("ERROR IN LOADING");
            } else {
              this.imageArray = item;
              console.log('Array length', item.length);
              this.setSelectedImage();
            }
          });
        }

        setSelectedImage() {
          var nextBtn = this.ImageSlide.getChildByName('nextImage');
          var resetBtn = this.ImageSlide.getChildByName('resetImage');
          var prevImage = this.ImageSlide.getChildByName('prevImage');
          var setting = this.ImageSlide.getChildByName('settings');
          setting.on('click', this.settingOpen, this);
          prevImage.on('click', this.prevImage, this);
          resetBtn.on('click', this.resetImage, this);
          nextBtn.on('click', this.nextImage, this);
          var imageI = SpriteFrame.createWithImage(this.imageArray[this.inc]);
          console.log(imageI);
          this.ImageSlide.getComponent(_crd && GamePlay === void 0 ? (_reportPossibleCrUseOfGamePlay({
            error: Error()
          }), GamePlay) : GamePlay).setImageforSlice(this.imageArray[this.inc], this.inc, this.addGlow);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "imageSlicer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "settingMenu", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "imageArray", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "glowPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=374b3f179ae9fdca214ca203d733ab353b283313.js.map