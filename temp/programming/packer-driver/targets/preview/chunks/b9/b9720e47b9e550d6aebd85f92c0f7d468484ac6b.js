System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, instantiate, SpriteFrame, UITransform, FitSprite, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, imageLoad;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfFitSprite(extras) {
    _reporterNs.report("FitSprite", "./FitSprite", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      FitSprite = _unresolved_2.FitSprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "43e55gS43lM0YtdEuFTp19e", "imageLoad", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'instantiate', 'SpriteFrame', 'Sprite', 'UITransform', 'EventMouse', 'ImageAsset', 'Texture2D', 'assetManager']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("imageLoad", imageLoad = (_dec = ccclass("imageLoad"), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = class imageLoad extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "image", _descriptor, this);

          _initializerDefineProperty(this, "contentNode", _descriptor2, this);

          this._flag = false;
          this._image = null;
          this.selectedCallback = null;
          this.sliceImages = [];
        }

        start() {}

        show(items, callback) {
          this.selectedCallback = callback;
          this.sliceImages = items;
          items.forEach((item, Index) => {
            var itemInstantiate = instantiate(this.image);
            var sprite = SpriteFrame.createWithImage(item);
            console.log(itemInstantiate.getComponent(UITransform).height);
            itemInstantiate.getComponent(_crd && FitSprite === void 0 ? (_reportPossibleCrUseOfFitSprite({
              error: Error()
            }), FitSprite) : FitSprite).fitImage(sprite);
            itemInstantiate.name = "" + Index;
            itemInstantiate.on(Node.EventType.TOUCH_END, this.getSelected, this);
            this.contentNode.addChild(itemInstantiate);
          });
        }

        getSelected(event) {
          var asset = this.sliceImages[event.target.name];
          this.selectedCallback(asset);
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "image", [_dec2], {
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

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b9720e47b9e550d6aebd85f92c0f7d468484ac6b.js.map