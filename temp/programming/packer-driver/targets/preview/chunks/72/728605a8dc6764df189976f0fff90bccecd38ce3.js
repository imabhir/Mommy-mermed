System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, resources, Prefab, instantiate, SpriteFrame, ImageAsset, UITransform, AudioSource, GamePlay, glowing, SoundManager, SingletonClass, ResourceUtils, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, resourceLoader;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGamePlay(extras) {
    _reporterNs.report("GamePlay", "./GamePlay", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglowing(extras) {
    _reporterNs.report("glowing", "./glowing", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "./Managers/SoundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingletonClass(extras) {
    _reporterNs.report("SingletonClass", "./SingleTon", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourceUtils(extras) {
    _reporterNs.report("ResourceUtils", "./Managers/ResourceUtils", _context.meta, extras);
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
      resources = _cc.resources;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      SpriteFrame = _cc.SpriteFrame;
      ImageAsset = _cc.ImageAsset;
      UITransform = _cc.UITransform;
      AudioSource = _cc.AudioSource;
    }, function (_unresolved_2) {
      GamePlay = _unresolved_2.GamePlay;
    }, function (_unresolved_3) {
      glowing = _unresolved_3.glowing;
    }, function (_unresolved_4) {
      SoundManager = _unresolved_4.SoundManager;
    }, function (_unresolved_5) {
      SingletonClass = _unresolved_5.SingletonClass;
    }, function (_unresolved_6) {
      ResourceUtils = _unresolved_6.ResourceUtils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "86341eSp01NFrskQUGySOGZ", "resourceLoader", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'resources', 'Prefab', 'instantiate', 'director', 'SpriteFrame', 'Sprite', 'Texture2D', 'ImageAsset', 'SystemEvent', 'Input', 'Scene', 'SceneAsset', 'Vec3', 'UITransform', 'JsonAsset', 'AudioClip', 'AudioSource']);

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
      }), _dec6 = property({
        type: Prefab
      }), _dec7 = property({
        type: Prefab
      }), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec(_class = (_class2 = class resourceLoader extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "imageSlicer", _descriptor, this);

          _initializerDefineProperty(this, "loading", _descriptor2, this);

          _initializerDefineProperty(this, "endPrefab", _descriptor3, this);

          _initializerDefineProperty(this, "settingMenu", _descriptor4, this);

          _initializerDefineProperty(this, "imageArray", _descriptor5, this);

          this.inc = 0;

          _initializerDefineProperty(this, "glowPrefab", _descriptor6, this);

          this.btn = null;
          this.img = null;
          this.ImageSlide = null;
          this.result = false;
          this.glowInstantiate = null;
          this.child = null;
          this.soundsObj = null;
          this.soundManager = null;
          this.load = null;

          _initializerDefineProperty(this, "musicAudioSource", _descriptor7, this);

          _initializerDefineProperty(this, "soundAudioSource", _descriptor8, this);

          _initializerDefineProperty(this, "winSound", _descriptor9, this);

          this.prevImage = () => {
            if (!this.soundsObj.boolSound) {
              this.soundManager.playSoundEffect((_crd && ResourceUtils === void 0 ? (_reportPossibleCrUseOfResourceUtils({
                error: Error()
              }), ResourceUtils) : ResourceUtils).getInstance().getMusicFile("sound"), false);
            }

            this.btn.active = true;
            this.load.destroy();
            this.ImageSlide.destroy();
            this.child.active = true;
            this.inc = 0;
          };

          this.resetImage = () => {
            if (!this.soundsObj.boolSound) {
              this.soundManager.playSoundEffect((_crd && ResourceUtils === void 0 ? (_reportPossibleCrUseOfResourceUtils({
                error: Error()
              }), ResourceUtils) : ResourceUtils).getInstance().getMusicFile("sound"), false);
            }

            if (this.result) {
              this.glowInstantiate.destroy();
            }

            this.ImageSlide.getComponent(_crd && GamePlay === void 0 ? (_reportPossibleCrUseOfGamePlay({
              error: Error()
            }), GamePlay) : GamePlay).setImageforSlice(this.imageArray[this.inc], this.inc, this.addGlow);
          };

          this.nextImage = () => {
            this.soundManager.stopWinMusic;
            console.log("Next Image button");

            if (this.inc < this.imageArray.length - 1) {
              if (this.result) {
                ++this.inc;
                this.ImageSlide.destroy();
                this.addSlider();
              }
            } else {
              console.log("END OF ARRAY");
              this.ImageSlide.destroy();
              var end = instantiate(this.endPrefab);
              var bg = this.node.getChildByName('Node');
              bg.active = true;
              bg.addChild(end);
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

        start() {
          this.initAudioSource();
          this.soundsObj = (_crd && SingletonClass === void 0 ? (_reportPossibleCrUseOfSingletonClass({
            error: Error()
          }), SingletonClass) : SingletonClass).getInstance();
          this.soundManager = (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).getInstance();
          (_crd && ResourceUtils === void 0 ? (_reportPossibleCrUseOfResourceUtils({
            error: Error()
          }), ResourceUtils) : ResourceUtils).getInstance().musicFiles();
        }

        initAudioSource() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).getInstance().init(this.musicAudioSource.getComponent(AudioSource));
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).getInstance().initSoundEffectAS(this.soundAudioSource.getComponent(AudioSource));
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).getInstance().initWinSound(this.winSound.getComponent(AudioSource));
        }

        handleStartButtonClick() {
          if (!this.soundsObj.boolSound) {
            this.soundManager.playSoundEffect((_crd && ResourceUtils === void 0 ? (_reportPossibleCrUseOfResourceUtils({
              error: Error()
            }), ResourceUtils) : ResourceUtils).getInstance().getMusicFile("sound"), false);
          }

          console.log("hello");
          this.child = this.node.getChildByName("Node");
          this.btn = this.child.getChildByName('Button');
          this.btn.active = false;
          this.load = instantiate(this.loading);
          this.node.addChild(this.load);
          this.getImages();
        }

        addSlider() {
          this.result = false;
          this.child.active = false;
          this.ImageSlide = instantiate(this.imageSlicer);
          this.node.addChild(this.ImageSlide);
          this.setSelectedImage();
        }

        getImages() {
          resources.loadDir('Images', ImageAsset, (err, item) => {
            if (err) {
              console.log("ERROR IN LOADING");
            } else {
              this.imageArray = item;
              console.log('Array length', item.length);
              this.addSlider();
            }
          });
        }

        setSelectedImage() {
          var nextBtn = this.ImageSlide.getChildByName('nextImage');
          var resetBtn = this.ImageSlide.getChildByName('resetImage');
          var prevImage = this.ImageSlide.getChildByName('prevImage');
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
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "loading", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "endPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "settingMenu", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "imageArray", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "glowPrefab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "musicAudioSource", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "soundAudioSource", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "winSound", [_dec10], {
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
//# sourceMappingURL=728605a8dc6764df189976f0fff90bccecd38ce3.js.map