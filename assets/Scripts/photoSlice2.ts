import { _decorator, Component, Node, SpriteFrame, Texture2D, math, Sprite, ImageAsset, Label, EventTouch, UITransform, Vec3, EventMouse, Prefab, instantiate, JsonAsset, Intersection2D, tween, assetManager, AudioSource, AudioClip } from 'cc';
import { glowing } from './glowing';
const { ccclass, property } = _decorator;
import { SingletonClass } from './singleTon';
import { Audio } from './audio';
import { ResourceUtils } from './managers/resourceUtils';
import { SoundManager } from './managers/soundManager';
@ccclass('photoSlice2')
export class photoSlice2 extends Component {
    
    MouseposX:Number=0;
    MouseposY:Number=0;
    imageSprite :SpriteFrame = null;
    rect:Vec3=null;
    flag : boolean=true;
    puzzleResult : Boolean = false;
    GnumOfSlice:number=0;
    imageCallback : any = null;
    selectImgPos : Vec3 = null;
    pos:Vec3=null;
    NegativePoint:number=0;
    audio: any=null;
    soundsObj:any=null;
    soundManager:any=null;
    
    start() {
        this.audio=this.node.getComponent(AudioSource).clip;
        this.soundsObj=SingletonClass.getInstance();
        this.soundManager = SoundManager.getInstance();
    }
    /**
     * asdasdasdad
     * @param splitCount ad
     * @param Index 
     * @param imageAsset 
     */
    setSlice(splitCount : number ,Index :number,imageAsset : ImageAsset, callback){
       
        this.GnumOfSlice=splitCount
        this.imageCallback = callback
        let sprite = SpriteFrame.createWithImage(imageAsset); 
        
        if(this.flag == true){
            this.imageSprite = sprite
            this.flag = false
        }
        
        console.log(sprite);
        // this.NegativePoint=(imageAsset.height/2)-(imageAsset.height/this.GnumOfSlice)-(this.GnumOfSlice-1)*((imageAsset.height/this.GnumOfSlice))+((imageAsset.height/this.GnumOfSlice)/2);
        this.NegativePoint=(sprite.height/2)-(sprite.height/this.GnumOfSlice)-(this.GnumOfSlice-1)*((sprite.height/this.GnumOfSlice))+((sprite.height/this.GnumOfSlice)/2);
        
        let rect=math.rect(0,Index*(sprite.height/splitCount),sprite.width,sprite.height/splitCount);
        this.node.on(Node.EventType.TOUCH_START,this.touchStart,this,true);
        this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this, true);
        this.node.on(Node.EventType.TOUCH_END,this.checkOrder2,this,true);
        sprite.setRect(rect);
        this.node.getComponent(Sprite).spriteFrame = sprite;
       this.node.name = `${Index}`
       
       
    }


    touchStart(event:EventTouch){
        
        this.rect = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(event.getUILocation().x,event.getUILocation().y,0)); 
        this.pos=this.node.getPosition();
        console.log(this.pos);
        this.rect.x=this.rect.x-this.pos.x;
        this.rect.y=this.rect.y-this.pos.y;  
       
        this.selectImgPos = this.node.getPosition();
    }

    onTouchMove(event: EventTouch) {

         if(this.rect.x<0&&this.rect.y<0){
            event.target.position =  this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(event.getUILocation().x-this.rect.x,event.getUILocation().y-this.rect.y,0)); 
        }else if(this.rect.x>=0&&this.rect.y<0){
            event.target.position =  this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(event.getUILocation().x-this.rect.x,event.getUILocation().y-this.rect.y,0));
        }else if(this.rect.x<0&&this.rect.y>0){
            event.target.position =  this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(event.getUILocation().x-this.rect.x,event.getUILocation().y+this.rect.y,0));
        }else{
            event.target.position =  this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(event.getUILocation().x-this.rect.x,event.getUILocation().y-this.rect.y,0));
        }
        var pos=this.node.getPosition();
        pos.z=0;
        
        this.node.setPosition(pos);
        pos.x=0;
        this.node.setPosition(pos);
    }

    checkOrder2(event:EventTouch){
        var Nodepos=this.node.getPosition();
       
           this.node.setPosition(Nodepos);
            var nodeName=parseInt(this.node.name);
            if(Nodepos.y  >= ((this.imageSprite.height)/2-((this.imageSprite.height/this.GnumOfSlice )))){

                this.node.setPosition(this.selectImgPos);
                console.log("out of bound + ",Nodepos.y);
            }else if (Nodepos.y < this.NegativePoint    ){
                console.log("work")
                this.node.setPosition(this.selectImgPos);
                console.log("out of bound",Nodepos.y);
                
            }
                 
            for(var i=0;i<this.GnumOfSlice;i++){
                let AnotherNode=this.node.parent.getChildByName(`${i}`);
                if(nodeName!=i){ 
                    var lowerDistance=Vec3.distance(AnotherNode.getPosition(),Nodepos);
                        if(lowerDistance<(this.imageSprite.height/this.GnumOfSlice)){
                        let newPos = AnotherNode.getPosition();
                        let pos=newPos;
                        this.node.setPosition(pos);
                        newPos.y = this.selectImgPos.y
                        newPos.z=0;
                       
                        if(this.selectImgPos.y<newPos.y){
                            tween(AnotherNode)
                        .to(0.07,{position : new Vec3(newPos.x,-newPos.y,newPos.z), })
                        .call(() => {
                            if(!this.soundsObj.boolSound){
                            this.audio.play();   
                            }
                           
                            this.checkPuzzle();
                        })
                        .start();
                        }else{
                            tween(AnotherNode)
                            .to(0.07,{position : new Vec3(newPos.x,newPos.y,newPos.z), })
                            .call(() => {
                                if(!this.soundsObj.boolSound){
                                    this.audio.play();   
                                    }
                                this.checkPuzzle();
                            })
                            .start();
                        }
                       

                        break;
                    }
                }
            }
        
        

    }

    checkPuzzle(){
       
        var FirstNode=this.node.parent.getChildByName('0');
        var secNode=this.node.parent.getChildByName('1');
        var FirstNodePos=FirstNode.getPosition();
        var check=0;
        if(FirstNode.getPosition().y > secNode.getPosition().y){
        check=1;
        for(var i=1;i<this.GnumOfSlice;i++){
            var remaingNode=this.node.parent.getChildByName(`${i}`);
            var distance=Vec3.distance(remaingNode.getPosition(),FirstNodePos);
            
            if( distance+30 >= i*(this.imageSprite.height/this.GnumOfSlice) && distance-30 <= i *(this.imageSprite.height/this.GnumOfSlice)){
            }
            else{
                check=0;
            }
        }
        }
        if(check){
            if(!this.soundsObj.boolSound){
                this.soundManager.setWinMusicVolume(1);
                this.soundManager.playWinSoundEffect( ResourceUtils.getInstance().getMusicFile("Sky-Puzzle"),false);
                console.log("win sound");
            }
            let mid = Math.floor(this.GnumOfSlice/2);
            let c = this.node.parent.getChildByName(`${mid}`)
            this.puzzleResult = true;
            this.imageCallback(this.puzzleResult, c.getPosition());
   
        }
    }
    update(deltaTime: number) {
    }
}

