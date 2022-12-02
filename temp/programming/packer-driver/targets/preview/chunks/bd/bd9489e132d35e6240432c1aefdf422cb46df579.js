System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, SpriteFrame, math, Sprite, UITransform, Vec3, tween, AudioSource, SingletonClass, ResourceUtils, SoundManager, _dec, _class, _crd, ccclass, property, photoSlice2;

  function _reportPossibleCrUseOfSingletonClass(extras) {
    _reporterNs.report("SingletonClass", "./SingleTon", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourceUtils(extras) {
    _reporterNs.report("ResourceUtils", "./Managers/ResourceUtils", _context.meta, extras);
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
      SpriteFrame = _cc.SpriteFrame;
      math = _cc.math;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      AudioSource = _cc.AudioSource;
    }, function (_unresolved_2) {
      SingletonClass = _unresolved_2.SingletonClass;
    }, function (_unresolved_3) {
      ResourceUtils = _unresolved_3.ResourceUtils;
    }, function (_unresolved_4) {
      SoundManager = _unresolved_4.SoundManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b3504SXUeFLRIHVzTDwN6jM", "photoSlice2", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'SpriteFrame', 'Texture2D', 'math', 'Sprite', 'ImageAsset', 'Label', 'EventTouch', 'UITransform', 'Vec3', 'EventMouse', 'Prefab', 'instantiate', 'JsonAsset', 'Intersection2D', 'tween', 'assetManager', 'AudioSource', 'AudioClip']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("photoSlice2", photoSlice2 = (_dec = ccclass('photoSlice2'), _dec(_class = class photoSlice2 extends Component {
        constructor() {
          super(...arguments);
          this.MouseposX = 0;
          this.MouseposY = 0;
          this.imageSprite = null;
          this.rect = null;
          this.flag = true;
          this.puzzleResult = false;
          this.GnumOfSlice = 0;
          this.imageCallback = null;
          this.selectImgPos = null;
          this.pos = null;
          this.NegativePoint = 0;
          this.audio = null;
          this.soundsObj = null;
          this.soundManager = null;
        }

        start() {
          this.audio = this.node.getComponent(AudioSource).clip;
          this.soundsObj = (_crd && SingletonClass === void 0 ? (_reportPossibleCrUseOfSingletonClass({
            error: Error()
          }), SingletonClass) : SingletonClass).getInstance();
          this.soundManager = (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).getInstance();
        }
        /**
         * asdasdasdad
         * @param splitCount ad
         * @param Index 
         * @param imageAsset 
         */


        setSlice(splitCount, Index, imageAsset, callback) {
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
          var json;
        }

        touchStart(event) {
          this.rect = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(event.getUILocation().x, event.getUILocation().y, 0));
          this.pos = this.node.getPosition();
          console.log(this.pos);
          this.rect.x = this.rect.x - this.pos.x;
          this.rect.y = this.rect.y - this.pos.y;
          this.selectImgPos = this.node.getPosition();
        }

        onTouchMove(event) {
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
        }

        checkOrder2(event) {
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
                  }).call(() => {
                    if (!this.soundsObj.boolSound) {
                      this.audio.play();
                    }

                    this.checkPuzzle();
                  }).start();
                } else {
                  tween(AnotherNode).to(0.07, {
                    position: new Vec3(newPos.x, newPos.y, newPos.z)
                  }).call(() => {
                    if (!this.soundsObj.boolSound) {
                      this.audio.play();
                    }

                    this.checkPuzzle();
                  }).start();
                }

                break;
              }
            }
          }
        }

        checkPuzzle() {
          var FirstNode = this.node.parent.getChildByName('0');
          var secNode = this.node.parent.getChildByName('1');
          var FirstNodePos = FirstNode.getPosition();
          var check = 0;

          if (FirstNode.getPosition().y > secNode.getPosition().y) {
            check = 1;

            for (var i = 1; i < this.GnumOfSlice; i++) {
              var remaingNode = this.node.parent.getChildByName("" + i);
              var distance = Vec3.distance(remaingNode.getPosition(), FirstNodePos);

              if (distance + 30 >= i * (this.imageSprite.height / this.GnumOfSlice) && distance - 30 <= i * (this.imageSprite.height / this.GnumOfSlice)) {} else {
                check = 0;
              }
            }
          }

          if (check) {
            if (!this.soundsObj.boolSound) {
              this.soundManager.setWinMusicVolume(1);
              this.soundManager.playWinSoundEffect((_crd && ResourceUtils === void 0 ? (_reportPossibleCrUseOfResourceUtils({
                error: Error()
              }), ResourceUtils) : ResourceUtils).getInstance().getMusicFile("Sky-Puzzle"), false);
              console.log("win sound");
            }

            var mid = Math.floor(this.GnumOfSlice / 2);
            var c = this.node.parent.getChildByName("" + mid);
            this.puzzleResult = true;
            this.imageCallback(this.puzzleResult, c.getPosition());
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bd9489e132d35e6240432c1aefdf422cb46df579.js.map