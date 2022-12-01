System.register("chunks:///_virtual/Audio.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, AudioSource, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioSource = module.AudioSource;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "6a8f4CjsTtOUapWzILt+BgW", "Audio", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Audio = exports('Audio', (_dec = ccclass('Audio'), _dec2 = property(AudioSource), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Audio, _Component);

        function Audio() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "_audioSource", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Audio.prototype;

        _proto.start = function start() {};

        _proto.Audiostart = function Audiostart() {
          this._audioSource.play();
        };

        _proto.update = function update(deltaTime) {};

        return Audio;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_audioSource", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FitSprite.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, assetManager, SpriteFrame, Texture2D, UITransform, Size, Sprite, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      assetManager = module.assetManager;
      SpriteFrame = module.SpriteFrame;
      Texture2D = module.Texture2D;
      UITransform = module.UITransform;
      Size = module.Size;
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "50548JcXTBJG6aMlcbqV0BE", "FitSprite", undefined);

      var ccclass = _decorator.ccclass;
      var FitSprite = exports('FitSprite', (_dec = ccclass("FitSprite"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FitSprite, _Component);

        function FitSprite() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = FitSprite.prototype;

        _proto.start = function start() {};

        _proto.fitRemoteImage = function fitRemoteImage(remoteUrl) {
          var _this = this;

          assetManager.loadRemote(remoteUrl, function (err, imageAsset) {
            if (err) ;else {
              var spriteFrame = new SpriteFrame();
              var texture = new Texture2D();
              texture.image = imageAsset;
              spriteFrame.texture = texture;

              _this.fitImage(spriteFrame);
            }
          });
        };

        _proto.fitImage = function fitImage(newSpriteFrame) {
          var uiTransform = this.node.getComponent(UITransform);
          var oldSize = new Size(uiTransform.width, uiTransform.height);
          console.log("1", oldSize.height, uiTransform.height);
          this.node.getComponent(Sprite).spriteFrame = newSpriteFrame;
          var scale = 0.1;
          var scale2 = "";

          if (uiTransform.width < uiTransform.height) {
            scale2 += "" + oldSize.height / uiTransform.height;
            scale = Number(scale2);
            console.log("2", oldSize.height, uiTransform.height, scale);
          } else {
            scale2 += "" + oldSize.height / uiTransform.height;
            scale = Number(scale2);
            console.log("2", oldSize.height, uiTransform.height, scale);
          }

          uiTransform.width = uiTransform.width * scale;
          uiTransform.height = uiTransform.height * scale;
        };

        return FitSprite;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GamePlay.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './photoSlice2.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, ImageAsset, CCInteger, instantiate, Vec3, UITransform, Component, photoSlice2;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      ImageAsset = module.ImageAsset;
      CCInteger = module.CCInteger;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      photoSlice2 = module.photoSlice2;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

      cclegacy._RF.push({}, "fcf2fMZHQJA17ZOoAX4VlDg", "GamePlay", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GamePlay = exports('GamePlay', (_dec = ccclass('GamePlay'), _dec2 = property({
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
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GamePlay, _Component);

        function GamePlay() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "settingMenu", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "imageAssert", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "slicePrefab", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "imageGlow", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "spilt", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "sliceNumber", _descriptor6, _assertThisInitialized(_this));

          _this.imgCallback = null;
          _this.smallSlice = null;
          _this.selectedImage = null;
          _this.puzzleResult = false;
          _this.frameCh = null;

          _this.imageComplete = function (result, pos) {
            if (result) {
              _this.frameCh.removeAllChildren();
            }

            _this.puzzleResult = result;

            _this.imgCallback(_this.puzzleResult, pos);
          };

          return _this;
        }

        var _proto = GamePlay.prototype;

        _proto.start = function start() {};

        _proto.handleStartButtonClick = function handleStartButtonClick() {
          var setting = instantiate(this.settingMenu);
          this.node.addChild(setting);
        };

        _proto.setImageforSlice = function setImageforSlice(imageAsset, inc, callback) {
          this.imgCallback = callback;
          var a = new Array();
          var frame = this.node.getChildByName('Frame');
          this.frameCh = frame.getChildByName('frameChild');
          this.frameCh.removeAllChildren();

          for (var i = 0; i < this.spilt; i++) {
            this.smallSlice = instantiate(this.slicePrefab);
            this.smallSlice.getComponent(photoSlice2).setSlice(this.spilt, i, imageAsset, this.imageComplete);
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
          }
        };

        _proto.fgetRandom = function fgetRandom(a, min, max) {
          var value = Math.floor(Math.random() * (max - min) + min);
          return value;
        };

        _proto.update = function update(deltaTime) {};

        return GamePlay;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "settingMenu", [_dec2], {
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

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/glowing.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Sprite, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "6bc1c3bymFI/bbYnwX17wFt", "glowing", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var glowing = exports('glowing', (_dec = ccclass('glowing'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(glowing, _Component);

        function glowing() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "getMask", _descriptor, _assertThisInitialized(_this));

          _this.audio = null;

          _this.blink = function (img) {
            _this.getMask.getComponent(Sprite).spriteFrame = img;
            _this.node.getChildByName('Item_cat').getComponent(Sprite).spriteFrame = img;
          };

          return _this;
        }

        var _proto = glowing.prototype;

        _proto.start = function start() {};

        _proto.update = function update() {};

        return glowing;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "getMask", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/imageLoad.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FitSprite.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, instantiate, SpriteFrame, UITransform, Component, FitSprite;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      instantiate = module.instantiate;
      SpriteFrame = module.SpriteFrame;
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      FitSprite = module.FitSprite;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "43e55gS43lM0YtdEuFTp19e", "imageLoad", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var imageLoad = exports('imageLoad', (_dec = ccclass("imageLoad"), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(imageLoad, _Component);

        function imageLoad() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "image", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "contentNode", _descriptor2, _assertThisInitialized(_this));

          _this._flag = false;
          _this._image = null;
          _this.selectedCallback = null;
          _this.sliceImages = [];
          return _this;
        }

        var _proto = imageLoad.prototype;

        _proto.start = function start() {};

        _proto.show = function show(items, callback) {
          var _this2 = this;

          this.selectedCallback = callback;
          this.sliceImages = items;
          items.forEach(function (item, Index) {
            var itemInstantiate = instantiate(_this2.image);
            var sprite = SpriteFrame.createWithImage(item);
            console.log(itemInstantiate.getComponent(UITransform).height);
            itemInstantiate.getComponent(FitSprite).fitImage(sprite);
            itemInstantiate.name = "" + Index;
            itemInstantiate.on(Node.EventType.TOUCH_END, _this2.getSelected, _this2);

            _this2.contentNode.addChild(itemInstantiate);
          });
        };

        _proto.getSelected = function getSelected(event) {
          var asset = this.sliceImages[event.target.name];
          this.selectedCallback(asset);
        };

        _proto.update = function update(deltaTime) {};

        return imageLoad;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "image", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./Audio.ts', './FitSprite.ts', './GamePlay.ts', './ResourceUtils.ts', './SoundManager.ts', './SettingMenu.ts', './SingleTon.ts', './glowing.ts', './imageLoad.ts', './photoSlice2.ts', './resourceLoader.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/photoSlice2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, AudioSource, SpriteFrame, math, Node, Sprite, UITransform, Vec3, tween, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioSource = module.AudioSource;
      SpriteFrame = module.SpriteFrame;
      math = module.math;
      Node = module.Node;
      Sprite = module.Sprite;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "b3504SXUeFLRIHVzTDwN6jM", "photoSlice2", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var photoSlice2 = exports('photoSlice2', (_dec = ccclass('photoSlice2'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(photoSlice2, _Component);

        function photoSlice2() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.MouseposX = 0;
          _this.MouseposY = 0;
          _this.imageSprite = null;
          _this.rect = null;
          _this.flag = true;
          _this.puzzleResult = false;
          _this.GnumOfSlice = 0;
          _this.imageCallback = null;
          _this.selectImgPos = null;
          _this.pos = null;
          _this.NegativePoint = 0;
          _this.audio = null;
          return _this;
        }

        var _proto = photoSlice2.prototype;

        _proto.start = function start() {
          this.audio = this.node.getComponent(AudioSource).clip;
        }
        /**
         * asdasdasdad
         * @param splitCount ad
         * @param Index 
         * @param imageAsset 
         */
        ;

        _proto.setSlice = function setSlice(splitCount, Index, imageAsset, callback) {
          this.GnumOfSlice = splitCount;
          this.imageCallback = callback;
          var sprite = SpriteFrame.createWithImage(imageAsset);
          console.log(sprite.height);

          if (this.flag = true) {
            this.imageSprite = sprite;
            this.flag = false;
          }

          this.NegativePoint = imageAsset.height / 2 - imageAsset.height / this.GnumOfSlice - (this.GnumOfSlice - 1) * (imageAsset.height / this.GnumOfSlice) + imageAsset.height / this.GnumOfSlice / 2;
          var rect = math.rect(0, Index * (sprite.height / splitCount), sprite.width, sprite.height / splitCount);
          this.node.on(Node.EventType.TOUCH_START, this.touchStart, this, true);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this, true);
          this.node.on(Node.EventType.TOUCH_END, this.checkOrder2, this, true);
          sprite.setRect(rect);
          this.node.getComponent(Sprite).spriteFrame = sprite;
          this.node.name = "" + Index;
        };

        _proto.touchStart = function touchStart(event) {
          this.rect = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(event.getUILocation().x, event.getUILocation().y, 0));
          this.pos = this.node.getPosition();
          console.log(this.pos);
          this.rect.x = this.rect.x - this.pos.x;
          this.rect.y = this.rect.y - this.pos.y;
          this.selectImgPos = this.node.getPosition();
        };

        _proto.onTouchMove = function onTouchMove(event) {
          if (this.rect.x < 0 && this.rect.y < 0) {
            event.target.position = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(event.getUILocation().x - this.rect.x, event.getUILocation().y - this.rect.y, 0));
          } else if (this.rect.x >= 0 && this.rect.y < 0) {
            event.target.position = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(event.getUILocation().x - this.rect.x, event.getUILocation().y - this.rect.y, 0));
          } else if (this.rect.x < 0 && this.rect.y > 0) {
            event.target.position = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(event.getUILocation().x - this.rect.x, event.getUILocation().y + this.rect.y, 0));
          } else {
            event.target.position = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(event.getUILocation().x - this.rect.x, event.getUILocation().y - this.rect.y, 0));
          }

          var pos = this.node.getPosition();
          pos.z = 0;
          this.node.setPosition(pos);
          pos.x = 0;
          this.node.setPosition(pos);
        };

        _proto.checkOrder2 = function checkOrder2(event) {
          var _this2 = this;

          var Nodepos = this.node.getPosition();
          this.node.setPosition(Nodepos);
          var nodeName = parseInt(this.node.name);

          if (Nodepos.y >= this.imageSprite.height / 2 - this.imageSprite.height / this.GnumOfSlice) {
            this.node.setPosition(this.selectImgPos);
            console.log("out of bound + ", Nodepos.y);
          } else if (Nodepos.y < this.NegativePoint) {
            console.log("work");
            this.node.setPosition(this.selectImgPos);
            console.log("out of bound", Nodepos.y);
          }

          for (var i = 0; i < this.GnumOfSlice; i++) {
            var AnotherNode = this.node.parent.getChildByName("" + i);

            if (nodeName != i) {
              var lowerDistance = Vec3.distance(AnotherNode.getPosition(), Nodepos);

              if (lowerDistance < this.imageSprite.height / this.GnumOfSlice) {
                var newPos = AnotherNode.getPosition();
                var pos = newPos;
                this.node.setPosition(pos);
                newPos.y = this.selectImgPos.y;
                newPos.z = 0;

                if (this.selectImgPos.y < newPos.y) {
                  tween(AnotherNode).to(0.07, {
                    position: new Vec3(newPos.x, -newPos.y, newPos.z)
                  }).call(function () {
                    _this2.audio.play();

                    _this2.checkPuzzle();
                  }).start();
                } else {
                  tween(AnotherNode).to(0.07, {
                    position: new Vec3(newPos.x, newPos.y, newPos.z)
                  }).call(function () {
                    _this2.audio.play();

                    _this2.checkPuzzle();
                  }).start();
                }

                break;
              }
            }
          }
        };

        _proto.checkPuzzle = function checkPuzzle() {
          var FirstNode = this.node.parent.getChildByName('0');
          var secNode = this.node.parent.getChildByName('1');
          var FirstNodePos = FirstNode.getPosition();
          var check = 0;

          if (FirstNode.getPosition().y > secNode.getPosition().y) {
            check = 1;

            for (var i = 1; i < this.GnumOfSlice; i++) {
              var remaingNode = this.node.parent.getChildByName("" + i);
              var distance = Vec3.distance(remaingNode.getPosition(), FirstNodePos);
              if (distance + 30 >= i * (this.imageSprite.height / this.GnumOfSlice) && distance - 30 <= i * (this.imageSprite.height / this.GnumOfSlice)) ;else {
                check = 0;
              }
            }
          }

          if (check) {
            var mid = Math.floor(this.GnumOfSlice / 2);
            var c = this.node.parent.getChildByName("" + mid);
            this.puzzleResult = true;
            this.imageCallback(this.puzzleResult, c.getPosition());
          }
        };

        _proto.update = function update(deltaTime) {};

        return photoSlice2;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/resourceLoader.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GamePlay.ts', './glowing.ts', './SoundManager.ts', './SingleTon.ts', './ResourceUtils.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, instantiate, SpriteFrame, UITransform, AudioSource, resources, ImageAsset, Component, GamePlay, glowing, SoundManager, SingletonClass, ResourceUtils;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      instantiate = module.instantiate;
      SpriteFrame = module.SpriteFrame;
      UITransform = module.UITransform;
      AudioSource = module.AudioSource;
      resources = module.resources;
      ImageAsset = module.ImageAsset;
      Component = module.Component;
    }, function (module) {
      GamePlay = module.GamePlay;
    }, function (module) {
      glowing = module.glowing;
    }, function (module) {
      SoundManager = module.SoundManager;
    }, function (module) {
      SingletonClass = module.SingletonClass;
    }, function (module) {
      ResourceUtils = module.ResourceUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

      cclegacy._RF.push({}, "86341eSp01NFrskQUGySOGZ", "resourceLoader", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var resourceLoader = exports('resourceLoader', (_dec = ccclass("resourceLoader"), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Prefab
      }), _dec5 = property({
        type: Prefab
      }), _dec6 = property({
        type: Prefab
      }), _dec7 = property(Node), _dec8 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(resourceLoader, _Component);

        function resourceLoader() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "imageSlicer", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "endPrefab", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "settingMenu", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "imageArray", _descriptor4, _assertThisInitialized(_this));

          _this.inc = 0;

          _initializerDefineProperty(_this, "glowPrefab", _descriptor5, _assertThisInitialized(_this));

          _this.img = null;
          _this.ImageSlide = null;
          _this.result = false;
          _this.glowInstantiate = null;
          _this.child = null;
          _this.soundsObj = null;
          _this.soundManager = null;

          _initializerDefineProperty(_this, "musicAudioSource", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "soundAudioSource", _descriptor7, _assertThisInitialized(_this));

          _this.prevImage = function () {
            if (!_this.soundsObj.boolSound) {
              _this.soundManager.playSoundEffect(ResourceUtils.getInstance().getMusicFile("sound"), false);
            }

            _this.ImageSlide.destroy();

            _this.child.active = true;
            _this.inc = 0;
          };

          _this.resetImage = function () {
            if (!_this.soundsObj.boolSound) {
              _this.soundManager.playSoundEffect(ResourceUtils.getInstance().getMusicFile("sound"), false);
            }

            if (_this.result) {
              _this.glowInstantiate.destroy();
            }

            _this.ImageSlide.getComponent(GamePlay).setImageforSlice(_this.imageArray[_this.inc], _this.inc, _this.addGlow);
          };

          _this.nextImage = function () {
            console.log("Next Image button");

            if (_this.inc < _this.imageArray.length - 1) {
              if (_this.result) {
                ++_this.inc;

                _this.ImageSlide.destroy();

                _this.addSlider();
              }
            } else {
              console.log("END OF ARRAY");

              _this.ImageSlide.destroy();

              var end = instantiate(_this.endPrefab);

              var bg = _this.node.getChildByName('Node');

              bg.active = true;
              bg.addChild(end);
            }
          };

          _this.addGlow = function (result, pos) {
            _this.result = result;
            _this.glowInstantiate = instantiate(_this.glowPrefab);
            _this.img = SpriteFrame.createWithImage(_this.imageArray[_this.inc]);

            _this.glowInstantiate.getComponent(glowing).blink(_this.img);

            var sprite = _this.glowInstantiate.getChildByName('Item_cat');

            var maskContent = _this.glowInstantiate.getChildByName('Mask');

            _this.ImageSlide.addChild(_this.glowInstantiate);

            _this.glowInstantiate.setPosition(0, pos.y, 0);

            var imageRect = _this.img._rect;
            sprite.getComponent(UITransform).height = imageRect.height;
            sprite.getComponent(UITransform).width = imageRect.width;
            maskContent.getComponent(UITransform).height = imageRect.height;
            maskContent.getComponent(UITransform).width = imageRect.width;
          };

          return _this;
        }

        var _proto = resourceLoader.prototype;

        _proto.start = function start() {
          this.initAudioSource();
          this.soundsObj = SingletonClass.getInstance();
          this.soundManager = SoundManager.getInstance();
          ResourceUtils.getInstance().musicFiles();
        };

        _proto.initAudioSource = function initAudioSource() {
          SoundManager.getInstance().init(this.musicAudioSource.getComponent(AudioSource));
          SoundManager.getInstance().initSoundEffectAS(this.soundAudioSource.getComponent(AudioSource));
        };

        _proto.handleStartButtonClick = function handleStartButtonClick() {
          if (!this.soundsObj.boolSound) {
            this.soundManager.playSoundEffect(ResourceUtils.getInstance().getMusicFile("sound"), false);
          }

          console.log("hello");
          this.child = this.node.getChildByName("Node");
          this.addSlider();
        };

        _proto.addSlider = function addSlider() {
          this.result = false;
          this.child.active = false;
          this.ImageSlide = instantiate(this.imageSlicer);
          this.node.addChild(this.ImageSlide);
          this.getImages();
        };

        _proto.getImages = function getImages() {
          var _this2 = this;

          resources.loadDir('Images', ImageAsset, function (err, item) {
            if (err) {
              console.log("ERROR IN LOADING");
            } else {
              _this2.imageArray = item;
              console.log('Array length', item.length);

              _this2.setSelectedImage();
            }
          });
        };

        _proto.setSelectedImage = function setSelectedImage() {
          var nextBtn = this.ImageSlide.getChildByName('nextImage');
          var resetBtn = this.ImageSlide.getChildByName('resetImage');
          var prevImage = this.ImageSlide.getChildByName('prevImage');
          prevImage.on('click', this.prevImage, this);
          resetBtn.on('click', this.resetImage, this);
          nextBtn.on('click', this.nextImage, this);
          var imageI = SpriteFrame.createWithImage(this.imageArray[this.inc]);
          console.log(imageI);
          this.ImageSlide.getComponent(GamePlay).setImageforSlice(this.imageArray[this.inc], this.inc, this.addGlow);
        };

        return resourceLoader;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "imageSlicer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "endPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "settingMenu", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "imageArray", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "glowPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "musicAudioSource", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "soundAudioSource", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResourceUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, resources, error, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      resources = module.resources;
      error = module.error;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2;

      cclegacy._RF.push({}, "e0c1asVSgxKnoKZCFRfEs4t", "ResourceUtils", undefined);

      var ccclass = _decorator.ccclass;
      var ResourceUtils = exports('ResourceUtils', (_dec = ccclass("ResourceUtils"), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ResourceUtils, _Component);

        function ResourceUtils() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._musicFiles = [];
          _this._gameResource = {};
          return _this;
        }

        var _proto = ResourceUtils.prototype;

        _proto.start = function start() {};

        ResourceUtils.getInstance = function getInstance() {
          if (!ResourceUtils._instance) {
            ResourceUtils._instance = new ResourceUtils();
          }

          return ResourceUtils._instance;
        };

        _proto.musicFiles = function musicFiles() {
          var _this2 = this;

          return new Promise(function (resolve, reject) {
            if (_this2._musicFiles.length > 0) {
              resolve(_this2._musicFiles);
            } else {
              resources.loadDir("audio", function (err, data) {
                if (err) {
                  console.log("ERROR");
                  reject(err);
                  error("load audio files :" + err);
                } else {
                  console.log("LOADED: ", data);
                  _this2._musicFiles = data;
                }

                resolve(_this2._musicFiles);
              });
            }
          });
        };

        _proto.getMusicFile = function getMusicFile(name) {
          if (this._musicFiles) {
            var clip = this._musicFiles.find(function (clip) {
              return clip.name == name;
            });

            return clip || null;
          }
        };

        return ResourceUtils;
      }(Component), _class2._instance = void 0, _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SettingMenu.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SingleTon.ts', './SoundManager.ts', './ResourceUtils.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, AudioClip, Sprite, SpriteFrame, Component, SingletonClass, SoundManager, ResourceUtils;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioClip = module.AudioClip;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }, function (module) {
      SingletonClass = module.SingletonClass;
    }, function (module) {
      SoundManager = module.SoundManager;
    }, function (module) {
      ResourceUtils = module.ResourceUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

      cclegacy._RF.push({}, "ec805QOf5BJD4ZG67ndnfSq", "SettingMenu", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SetiningMenu = exports('SetiningMenu', (_dec = ccclass('SetiningMenu'), _dec2 = property({
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
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SetiningMenu, _Component);

        function SetiningMenu() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "audio", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Sound", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "musicButoon", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "SoundButoon", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "ButtonOn", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "ButtonOff", _descriptor6, _assertThisInitialized(_this));

          _this.soundsObj = null;
          _this.soundManager = null;
          return _this;
        }

        var _proto = SetiningMenu.prototype;

        _proto.start = function start() {
          this.soundsObj = SingletonClass.getInstance();
          this.soundManager = SoundManager.getInstance();

          if (!this.soundsObj.boolSound) {
            this.SoundButoon.spriteFrame = this.ButtonOn;
          }

          if (!this.soundsObj.boolMusic) {
            this.musicButoon.spriteFrame = this.ButtonOn;
          }
        };

        _proto.handleStartButtonClick = function handleStartButtonClick() {
          console.log("function call");

          if (!this.soundsObj.boolSound) {
            this.soundManager.playSoundEffect(ResourceUtils.getInstance().getMusicFile("sound"), false);
          }

          if (this.soundsObj.boolSound) {
            this.soundManager.canPlaySound = this.soundsObj.boolSound;
            this.soundsObj.offsound();
            this.SoundButoon.spriteFrame = this.ButtonOn;
            this.soundManager.playSoundEffect(ResourceUtils.getInstance().getMusicFile("sound"), false);
          } else {
            this.soundManager.canPlaySound = false;
            this.soundsObj.onSound();
            this.SoundButoon.spriteFrame = this.ButtonOff;
            this.soundManager.stopSoundEffect();
          }
        };

        _proto.handleStartButtonClick2 = function handleStartButtonClick2() {
          if (this.soundsObj.boolMusic) {
            this.soundManager.canPlayMusic = this.soundsObj.boolMusic;
            this.soundsObj.offMusic();
            this.musicButoon.spriteFrame = this.ButtonOn;
            this.soundManager.playMusicClip(ResourceUtils.getInstance().getMusicFile("Music"), true);
          } else {
            this.soundManager.canPlayMusic = false;
            this.soundsObj.onMusic();
            this.musicButoon.spriteFrame = this.ButtonOff;
            this.soundManager.stopMusic();
          }
        };

        _proto.close = function close() {
          if (!this.soundsObj.boolSound) {
            this.soundManager.playSoundEffect(ResourceUtils.getInstance().getMusicFile("sound"), false);
          }

          this.node.parent.active = false;
        };

        _proto.update = function update(deltaTime) {};

        return SetiningMenu;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "audio", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Sound", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "musicButoon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "SoundButoon", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ButtonOn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "ButtonOff", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SingleTon.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7ab67ZhnhFDBpSfrSkQut86", "SingleTon", undefined);

      var SingletonClass = exports('SingletonClass', /*#__PURE__*/function () {
        function SingletonClass() {
          this.currentlvl = 0;
          this.boolMusic = true;
          this.boolSound = false;
          this.value = void 0;
        }

        SingletonClass.getInstance = function getInstance() {
          return SingletonClass._instance;
        } //     constructor(){
        //         resources.loadDir("Json",JsonAsset, (err , item)=>{
        //         if (err) {
        //             console.log("ERROR IN LOADING");
        //         }else{
        //             console.log(item);
        //             this.value=item;
        //         } 
        //         return item;
        //     });
        // }
        ;

        var _proto = SingletonClass.prototype;

        _proto.onSound = function onSound() {
          this.boolSound = true;
        };

        _proto.offsound = function offsound() {
          this.boolSound = false;
        };

        _proto.onMusic = function onMusic() {
          this.boolMusic = true;
        };

        _proto.offMusic = function offMusic() {
          this.boolMusic = false;
        };

        return SingletonClass;
      }());
      SingletonClass._instance = new SingletonClass();

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SoundManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _createClass, cclegacy;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "123031AeZNL2ou/M72qWtLs", "SoundManager", undefined);

      var SoundManager = exports('SoundManager', /*#__PURE__*/function () {
        function SoundManager() {
          this._audioSource = null;
          this._SoundEffectAudioSource = null;
          this.volume = 1;
          this.canPlayMusic = true;
          this.canPlaySound = true;
        }

        SoundManager.getInstance = function getInstance() {
          if (!SoundManager._instance) {
            SoundManager._instance = new SoundManager();
          }

          return SoundManager._instance;
        };

        var _proto = SoundManager.prototype;

        _proto.init = function init(audioSource) {
          this._audioSource = audioSource;
        };

        _proto.initSoundEffectAS = function initSoundEffectAS(audioSource) {
          this._SoundEffectAudioSource = audioSource;
        };

        _proto.playOneShotSoundEffect = function playOneShotSoundEffect(clip) {
          if (!this.canPlayMusic) {
            return;
          }

          if (clip) {
            this._audioSource.playOneShot(clip, 1);
          } else {
            console.log(clip, "Invalid audio clip format");
          }
        };

        _proto.playSoundEffect = function playSoundEffect(clip, loop) {
          if (loop === void 0) {
            loop = false;
          }

          if (!this.canPlaySound) {
            return;
          }

          if (clip) {
            this.stopSoundEffect();
            this._SoundEffectAudioSource.clip = clip;
            this._SoundEffectAudioSource.loop = loop;

            this._SoundEffectAudioSource.play();
          } else {
            console.log(clip, "Invalid audio clip format");
          }
        };

        _proto.stopSoundEffect = function stopSoundEffect() {
          this._SoundEffectAudioSource.stop();
        };

        _proto.playMusic = function playMusic(loop) {
          if (!this.canPlayMusic) {
            return;
          }

          this._audioSource.loop = loop;

          if (!this._audioSource.playing) {
            this._audioSource.play();
          }
        };

        _proto.playMusicClip = function playMusicClip(clip, loop) {
          if (!this.canPlayMusic) {
            return;
          }

          if (clip) {
            this.stopMusic();
            this._audioSource.clip = clip;
            this._audioSource.loop = loop;

            this._audioSource.play();
          } else {
            console.log(clip, "Invalid audio clip format");
          }
        };

        _proto.stopMusic = function stopMusic() {
          this._audioSource.stop();
        };

        _proto.setMusicVolume = function setMusicVolume(flag) {
          flag = Math.round(flag * 10) / 10;
          this._audioSource.volume = flag;
          localStorage.setItem("MusicVolume", flag.toString());
        };

        _proto.setEffectsVolume = function setEffectsVolume(flag) {
          flag = Math.round(flag * 10) / 10;
          this._SoundEffectAudioSource.volume = flag;
          localStorage.setItem("EffectVolume", flag.toString());
        };

        _proto.setVolumePrefFromLocal = function setVolumePrefFromLocal() {
          var MusicVolume = localStorage.getItem("MusicVolume");
          var EffectVolume = localStorage.getItem("EffectVolume");
          var CanPlayMusic = localStorage.getItem("CanPlayMusic");
          var CanPlayEffects = localStorage.getItem("CanPlayEffects");

          if (MusicVolume) {
            this.setMusicVolume(parseFloat(MusicVolume));
            console.log("MusicVolume: ", parseFloat(MusicVolume));
          }

          if (EffectVolume) {
            this.setEffectsVolume(parseFloat(EffectVolume));
            console.log("EffectVolume: ", parseFloat(EffectVolume));
          }

          if (CanPlayMusic) {
            this.CanPlayMusic = CanPlayMusic === "true";
            console.log("CanPlayMusic: ", this.CanPlayMusic);
          }

          if (CanPlayEffects) {
            this.CanPlaySound = CanPlayEffects === "true";
            console.log("CanPlayEffects: ", this.CanPlaySound);
          }
        };

        _createClass(SoundManager, [{
          key: "MusicVolume",
          get: function get() {
            return this._audioSource.volume;
          }
        }, {
          key: "EffectsVolume",
          get: function get() {
            return this._SoundEffectAudioSource.volume;
          }
        }, {
          key: "CanPlayMusic",
          get: function get() {
            return this.canPlayMusic;
          },
          set: function set(value) {
            if (value) {
              this._audioSource.play();
            } else {
              this._audioSource.pause();
            }

            localStorage.setItem("CanPlayMusic", value.toString());
            this.canPlayMusic = value;
          }
        }, {
          key: "CanPlaySound",
          get: function get() {
            return this.canPlaySound;
          },
          set: function set(value) {
            if (value) ;else {
              this._SoundEffectAudioSource.stop();
            }
            localStorage.setItem("CanPlayEffects", value.toString());
            this.canPlaySound = value;
          }
        }]);

        return SoundManager;
      }());
      SoundManager._instance = null;

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});