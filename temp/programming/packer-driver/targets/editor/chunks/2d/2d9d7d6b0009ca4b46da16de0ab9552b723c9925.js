System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, SoundManager, _crd;

  _export("SoundManager", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "123031AeZNL2ou/M72qWtLs", "SoundManager", undefined);

      __checkObsolete__(['AudioClip', 'AudioSource', 'Vec3']);

      _export("SoundManager", SoundManager = class SoundManager {
        constructor() {
          this._audioSource = null;
          this._winSound = null;
          this._SoundEffectAudioSource = null;
          this.volume = 1;
          this.canPlayMusic = true;
          this.canPlaySound = true;
          this.canPlayWinsound = true;
        }

        static getInstance() {
          if (!SoundManager._instance) {
            SoundManager._instance = new SoundManager();
          }

          return SoundManager._instance;
        }

        init(audioSource) {
          this._audioSource = audioSource;
        }

        initWinSound(audioSource) {
          this._winSound = audioSource;
        }

        initSoundEffectAS(audioSource) {
          this._SoundEffectAudioSource = audioSource;
        }

        playOneShotSoundEffect(clip) {
          if (!this.canPlayMusic) {
            return;
          }

          if (clip) {
            this._audioSource.playOneShot(clip, 1);
          } else {
            console.log(clip, "Invalid audio clip format");
          }
        }

        playWinSoundEffect(clip, loop = false) {
          if (!this.canPlaySound) {
            return;
          }

          if (clip) {
            this.stopWinMusic();
            this._winSound.clip = clip;
            this._winSound.loop = loop;

            this._winSound.play();
          } else {
            console.log(clip, "Invalid win sound clip format");
          }
        }

        playSoundEffect(clip, loop = false) {
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
        }

        stopSoundEffect() {
          this._SoundEffectAudioSource.stop();
        }

        playMusic(loop) {
          if (!this.canPlayMusic) {
            return;
          }

          this._audioSource.loop = loop;

          if (!this._audioSource.playing) {
            this._audioSource.play();
          }
        }

        playMusicClip(clip, loop) {
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
        }

        stopWinMusic() {
          this._winSound.stop();
        }

        stopMusic() {
          this._audioSource.stop();
        }

        setMusicVolume(flag) {
          flag = Math.round(flag * 10) / 10;
          this._audioSource.volume = flag;
          localStorage.setItem("MusicVolume", flag.toString());
        }

        setEffectsVolume(flag) {
          flag = Math.round(flag * 10) / 10;
          this._SoundEffectAudioSource.volume = flag;
          localStorage.setItem("EffectVolume", flag.toString());
        }

        get MusicVolume() {
          return this._audioSource.volume;
        }

        get EffectsVolume() {
          return this._SoundEffectAudioSource.volume;
        }

        get CanPlayMusic() {
          return this.canPlayMusic;
        }

        set CanPlayMusic(value) {
          if (value) {
            this._audioSource.play();
          } else {
            this._audioSource.pause();
          }

          localStorage.setItem("CanPlayMusic", value.toString());
          this.canPlayMusic = value;
        }

        set CanPlayWinSound(value) {
          if (value) {
            this._winSound.play();
          } else {
            this._winSound.stop();
          }

          localStorage.setItem("CanPlayEffects", value.toString());
          this.canPlaySound = value;
        }

        set CanPlaySound(value) {
          if (value) {
            this._SoundEffectAudioSource.play();
          } else {
            this._SoundEffectAudioSource.stop();
          }

          localStorage.setItem("CanPlayEffects", value.toString());
          this.canPlaySound = value;
        }

        get CanPlayWinSound() {
          return this.canPlaySound;
        }

        get CanPlaySound() {
          return this.canPlaySound;
        }

        setVolumePrefFromLocal() {
          let MusicVolume = localStorage.getItem("MusicVolume");
          let EffectVolume = localStorage.getItem("EffectVolume");
          let CanPlayMusic = localStorage.getItem("CanPlayMusic");
          let CanPlayEffects = localStorage.getItem("CanPlayEffects");

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
        }

      });

      SoundManager._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2d9d7d6b0009ca4b46da16de0ab9552b723c9925.js.map