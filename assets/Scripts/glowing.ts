import { _decorator, Component,Animation, Node, SpriteFrame, Sprite, UITransform, Vec3, Prefab, instantiate, spriteAssembler, animation, AudioSource, AudioClip } from 'cc';
import { ResourceUtils } from './managers/resourceUtils';
import { SingletonClass } from './singleTon';
import { SoundManager } from './managers/soundManager';
const { ccclass, property } = _decorator;

@ccclass('glowing')
export class glowing extends Component {
    
    @property({type : Node})
    getMask : Node = null!
    audio:any=null;
    soundsObj:any=null;
    check:Boolean=true;
    soundManager:any=null;
    start(){
        // this.soundsObj=SingletonClass.getInstance();
        // console.log(this.soundsObj.boolSound)
        // this.audio = this.node.getComponent(AudioSource).clip;
        // if(!this.soundsObj.boolSound){
        //     this.audio.play(); 
        // }
        this.soundManager = SoundManager.getInstance();

    }

    blink = (img : any) =>{
       
        this.getMask.getComponent(Sprite).spriteFrame = img
        this.node.getChildByName('Item_cat').getComponent(Sprite).spriteFrame = img;
        this.soundsObj=SingletonClass.getInstance();
        console.log(this.soundsObj.boolSound)
        this.audio = this.node.getComponent(AudioSource).clip;
       
        
    }   
    update(){}
}

