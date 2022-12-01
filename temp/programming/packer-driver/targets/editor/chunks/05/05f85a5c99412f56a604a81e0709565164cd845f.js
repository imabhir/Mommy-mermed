System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Sprite, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, glowing;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6bc1c3bymFI/bbYnwX17wFt", "glowing", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Animation', 'Node', 'SpriteFrame', 'Sprite', 'UITransform', 'Vec3', 'Prefab', 'instantiate', 'spriteAssembler', 'animation', 'AudioSource']);

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

          this.blink = img => {
            this.getMask.getComponent(Sprite).spriteFrame = img;
            this.node.getChildByName('Item_cat').getComponent(Sprite).spriteFrame = img;
          };
        }

        start() {}

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
//# sourceMappingURL=05f85a5c99412f56a604a81e0709565164cd845f.js.map