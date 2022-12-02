System.register(["cc"], function (_export, _context) {
  "use strict";

  var __checkObsolete__, __checkObsoleteInNamespace__, SingletonClass, _crd;

  _export("SingletonClass", void 0);

  return {
    setters: [function (_cc) {
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      __checkObsolete__(['JsonAsset', 'resources']);

      _export("SingletonClass", SingletonClass = class SingletonClass {
        constructor() {
          this.currentlvl = 0;
          this.boolMusic = true;
          this.boolSound = false;
          this.value = void 0;
        }

        static getInstance() {
          return SingletonClass._instance;
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
      _crd = false;
    }
  };
});
//# sourceMappingURL=984a3f8e9f76336ad8584a8ccb85364bc0b44b83.js.map