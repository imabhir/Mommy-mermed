import { AudioClip, AudioSource, Vec3 } from "cc";

export class SoundManager {
    private static _instance: SoundManager = null!;
    private _audioSource: AudioSource = null!;
    private _winSound : AudioSource=null;
    private _SoundEffectAudioSource: AudioSource = null!;
    private volume: number = 1!;

    private canPlayMusic = true;
    private canPlaySound = true;
    private canPlayWinsound=true;

    public static getInstance() {
        if (!SoundManager._instance) {
            SoundManager._instance = new SoundManager();
        }
        return SoundManager._instance;
    }

    init(audioSource: AudioSource) {
        this._audioSource = audioSource;
    }
    initWinSound(audioSource:AudioSource){
        this._winSound=audioSource;
    }

    initSoundEffectAS(audioSource: AudioSource) {
        this._SoundEffectAudioSource = audioSource;
    }

    playOneShotSoundEffect(clip: AudioClip) {
        if (!this.canPlayMusic) {
            return;
        }
        if (clip) {
            this._audioSource.playOneShot(clip, 1);
        } else {
            console.log(clip, "Invalid audio clip format");
        }
    } 
    playWinSoundEffect(clip: AudioClip, loop: boolean = false) {
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

    playSoundEffect(clip: AudioClip, loop: boolean = false) {
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

    playMusic(loop: boolean) {
        if (!this.canPlayMusic) {
            return;
        }
        this._audioSource.loop = loop;
        if (!this._audioSource.playing) {
            this._audioSource.play();
        }
    }

    playMusicClip(clip: AudioClip, loop: boolean) {
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

    setMusicVolume(flag: number) {
        flag = Math.round(flag * 10) / 10;
        this._audioSource.volume = flag;
        localStorage.setItem("MusicVolume", flag.toString());
    }
    setWinMusicVolume(flag: number) {
        flag = Math.round(flag * 10) / 10;
        this._winSound.volume = flag;
        localStorage.setItem("WinMusicVolume", flag.toString());
    }

    setEffectsVolume(flag: number) {
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
    get CanPlayMusic(): boolean {
            return this.canPlayMusic;
        }

    set CanPlayMusic(value: boolean) {
        if (value) {
            this._audioSource.play();
        } else {
            this._audioSource.pause();
        }
        localStorage.setItem("CanPlayMusic", value.toString());
        this.canPlayMusic = value;
    }

    
    set CanPlayWinSound(value: boolean) {
        if (value) {
            this._winSound.play();
        } else {
            this._winSound.stop();
        }
        localStorage.setItem("CanPlayEffects", value.toString());
        this.canPlaySound = value;
    }
    set CanPlaySound(value: boolean) {
        if (value) {
            this._SoundEffectAudioSource.play();
        } else {
            this._SoundEffectAudioSource.stop();
        }
        localStorage.setItem("CanPlayEffects", value.toString());
        this.canPlaySound = value;
    }
    get CanPlayWinSound(): boolean {
        return this.canPlaySound;
    }
    get CanPlaySound(): boolean {
        return this.canPlaySound;
    }

    setVolumePrefFromLocal() {
        let MusicVolume: string = localStorage.getItem("MusicVolume");
        let EffectVolume: string = localStorage.getItem("EffectVolume");
        let CanPlayMusic: string = localStorage.getItem("CanPlayMusic");
        let CanPlayEffects: string = localStorage.getItem("CanPlayEffects");
        let winMusic:string=localStorage.getItem("WinMusicVolume");
        if(winMusic){
            this.setWinMusicVolume(parseInt(winMusic));
            
        }

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
}
