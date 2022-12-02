System.register(["cc"], function (_export, _context) {
  "use strict";

  var __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, assetManager, SpriteFrame, Texture2D, UITransform, Sprite, Size, _dec, _class, _crd, ccclass, FitSprite;

  return {
    setters: [function (_cc) {
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      assetManager = _cc.assetManager;
      SpriteFrame = _cc.SpriteFrame;
      Texture2D = _cc.Texture2D;
      UITransform = _cc.UITransform;
      Sprite = _cc.Sprite;
      Size = _cc.Size;
    }],
    execute: function () {
      _crd = true;

      __checkObsolete__(['_decorator', 'Component', 'Node', 'assetManager', 'ImageAsset', 'SpriteFrame', 'Texture2D', 'UITransform', 'Sprite', 'Size']);

      ({
        ccclass
      } = _decorator);

      _export("FitSprite", FitSprite = (_dec = ccclass("FitSprite"), _dec(_class = class FitSprite extends Component {
        start() {}

        fitRemoteImage(remoteUrl) {
          assetManager.loadRemote(remoteUrl, (err, imageAsset) => {
            if (err) {} else {
              var spriteFrame = new SpriteFrame();
              var texture = new Texture2D();
              texture.image = imageAsset;
              spriteFrame.texture = texture;
              this.fitImage(spriteFrame);
            }
          });
        }

        fitImage(newSpriteFrame) {
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
        }

      }) || _class));

      _crd = false;
    }
  };
});
//# sourceMappingURL=a24371108126307d66fb1d2ee141913c84ca529b.js.map