System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, JsonAsset, resources, SingletonClass, _crd;

  _export("SingletonClass", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      JsonAsset = _cc.JsonAsset;
      resources = _cc.resources;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7ab67ZhnhFDBpSfrSkQut86", "SingleTon", undefined);

      __checkObsolete__(['JsonAsset', 'resources']);

      _export("SingletonClass", SingletonClass = class SingletonClass {
        static getInstance() {
          return SingletonClass._instance;
        }

        constructor() {
          this.currentlvl = 0;
          this.boolMusic = true;
          this.boolSound = false;
          this.value = void 0;
          resources.loadDir("Json", JsonAsset, (err, item) => {
            if (err) {
              console.log("ERROR IN LOADING");
            } else {
              console.log(item);
              this.value = item;
            }

            return item;
          });
        }

        onSound() {
          this.boolSound = true;
        }

        offsound() {
          this.boolSound = false;
        }

        onMusic() {
          this.boolMusic = true;
        }

        offMusic() {
          this.boolMusic = false;
        }

      });

      SingletonClass._instance = new SingletonClass();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ec81ae203e44cf960b58965c1657a66d4f5623b2.js.map