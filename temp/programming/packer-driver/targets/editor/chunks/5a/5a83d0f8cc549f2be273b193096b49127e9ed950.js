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
//# sourceMappingURL=5a83d0f8cc549f2be273b193096b49127e9ed950.js.map