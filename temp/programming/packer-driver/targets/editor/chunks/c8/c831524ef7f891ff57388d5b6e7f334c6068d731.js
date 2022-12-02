System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Label, Animation, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, LoaderType, CircularLoader;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  _export("LoaderType", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Label = _cc.Label;
      Animation = _cc.Animation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "32bfcN/Z/ROt5TOTgRQDUWE", "CircularLoader", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'Animation', 'Vec3', 'Widget']);

      ({
        ccclass,
        property
      } = _decorator);

      (function (LoaderType) {
        LoaderType["FULL_SCREEN"] = "Full_Screen";
        LoaderType["ONLY_MESSAGE"] = "ONLY_MESSAGE";
      })(LoaderType || _export("LoaderType", LoaderType = {}));

      /**
       * @title PopUp class
       * @author harpinder_singh
       * @notice this class manages the popUps.
       */
      _export("CircularLoader", CircularLoader = (_dec = ccclass("CircularLoader"), _dec2 = property(Label), _dec3 = property(Node), _dec(_class = (_class2 = class CircularLoader extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "message", _descriptor, this);

          _initializerDefineProperty(this, "circle", _descriptor2, this);

          this.callbackFromParent = () => {};
        }

        start() {}

        onLoad() {// this.node.active = false;
        }
        /**
         * @en
         * Use startTimer to start the timer,
         * It will end automatically and calls callback function on time over
         * @param msgString  Message to be displayed on the PopUp
         * @param func  The callback function which will be called on cross buttons callback.
         */


        showLoader(type = LoaderType.FULL_SCREEN, msgString) {
          switch (type) {
            case LoaderType.FULL_SCREEN:
              {
                this.circle.active = true;
                break;
              }

            case LoaderType.ONLY_MESSAGE:
              {
                this.circle.active = false;
                break;
              }
          }

          this.node.active = true;
          this.message.string = msgString;
          this.circle.active && this.circle.getComponent(Animation).play();
        }

        stopLoader(func) {
          this.node.active = false;
          this.circle.getComponent(Animation).stop();
          this.callbackFromParent = func;
          this.callbackFromParent && this.callbackFromParent();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "message", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "circle", [_dec3], {
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
//# sourceMappingURL=c831524ef7f891ff57388d5b6e7f334c6068d731.js.map