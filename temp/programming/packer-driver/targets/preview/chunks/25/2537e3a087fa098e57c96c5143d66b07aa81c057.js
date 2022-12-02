System.register(["cc"], function (_export, _context) {
  "use strict";

  var __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, resources, error, _dec, _class, _class2, _crd, ccclass, ResourceUtils;

  return {
    setters: [function (_cc) {
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      resources = _cc.resources;
      error = _cc.error;
    }],
    execute: function () {
      _crd = true;

      __checkObsolete__(['_decorator', 'Component', 'resources', 'Asset', 'Prefab', 'AudioClip', 'error', 'VideoClip', 'SpriteFrame']);

      ({
        ccclass
      } = _decorator);

      _export("ResourceUtils", ResourceUtils = (_dec = ccclass("ResourceUtils"), _dec(_class = (_class2 = class ResourceUtils extends Component {
        constructor() {
          super(...arguments);
          this._musicFiles = [];
          this._gameResource = {};
        }

        start() {}

        static getInstance() {
          if (!ResourceUtils._instance) {
            ResourceUtils._instance = new ResourceUtils();
          }

          return ResourceUtils._instance;
        }

        musicFiles() {
          return new Promise((resolve, reject) => {
            if (this._musicFiles.length > 0) {
              resolve(this._musicFiles);
            } else {
              resources.loadDir("audio", (err, data) => {
                if (err) {
                  console.log("ERROR");
                  reject(err);
                  error("load audio files :" + err);
                } else {
                  console.log("LOADED: ", data);
                  this._musicFiles = data;
                }

                resolve(this._musicFiles);
              });
            }
          });
        }

        getMusicFile(name) {
          if (this._musicFiles) {
            var clip = this._musicFiles.find(clip => clip.name == name);

            return clip || null;
          }
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _crd = false;
    }
  };
});
//# sourceMappingURL=2537e3a087fa098e57c96c5143d66b07aa81c057.js.map