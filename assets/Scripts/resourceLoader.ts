import { _decorator, Component, Node, resources, Prefab, instantiate, director, SpriteFrame, Sprite, Texture2D, ImageAsset, SystemEvent, Input, Scene, SceneAsset, Vec3, UITransform, JsonAsset, AudioClip, AudioSource } from "cc";
import { GamePlay } from "./gamePlay";
import { glowing } from "./glowing";
import { SoundManager } from "./managers/soundManager";
import { SingletonClass } from "./singleTon";
import { ResourceUtils } from "./managers/resourceUtils"
const { ccclass, property } = _decorator;

@ccclass("resourceLoader")
export class resourceLoader extends Component {

    @property({type   : Prefab})
    imageSlicer : Prefab = null;
    @property({type   : Prefab})
    loading : Prefab = null;
    @property({type   : Prefab})
    endPrefab : Prefab = null;
    @property({type   : Prefab})
    settingMenu : Prefab = null;

   @property({type: Prefab})
   imageArray : ImageAsset[] =[];
   inc : number =1;

   @property({type: Prefab})
   glowPrefab: Prefab = null;
    btn:Node=null
    img : any = null;
    ImageSlide : Node = null;
    result: Boolean = false
    glowInstantiate:Node=null;
    child : Node = null;
    soundsObj:any=null;
    soundManager:any=null;
    load:Node=null
    @property(Node) musicAudioSource: Node = null;
    @property(Node) soundAudioSource: Node = null;
    @property(Node) winSound:Node=null;

    start() {
        
        this.initAudioSource();
        this.soundsObj= SingletonClass.getInstance();
        this.soundManager = SoundManager.getInstance();
        ResourceUtils.getInstance().musicFiles();
    }
    initAudioSource() {
        SoundManager.getInstance().init(this.musicAudioSource.getComponent(AudioSource)!);
        SoundManager.getInstance().initSoundEffectAS(this.soundAudioSource.getComponent(AudioSource)!);
        SoundManager.getInstance().initWinSound(this.winSound.getComponent(AudioSource)!);
    }
    handleStartButtonClick (){
        
        if(!this.soundsObj.boolSound){
            
            this.soundManager.playSoundEffect( ResourceUtils.getInstance().getMusicFile("sound"),false);
        }
        
        this.child=this.node.getChildByName("Node");  
        this.btn=this.child.getChildByName('Button');
        this.btn.active=false;
        this.load=instantiate(this.loading);
        this.node.addChild(this.load);
        this.getImages();    
    }
    addSlider(){
        this.load.destroy();
        this.result = false
        this.child.active = false
        this.ImageSlide = instantiate(this.imageSlicer);
        this.node.addChild(this.ImageSlide)
        this.setSelectedImage()
         
    }
    getImages(){

        
        resources.loadDir('images', ImageAsset, (err, item) => {
            if (err) {
                console.log("ERROR IN LOADING");
            } else {
                this.imageArray =item;
                console.log('Array length',item.length)
                this.addSlider();
            }
        });
    }
    
    setSelectedImage(){
            let nextBtn = this.ImageSlide.getChildByName('nextImage');
            let resetBtn = this.ImageSlide.getChildByName('resetImage');
            let prevImage = this.ImageSlide.getChildByName('prevImage');
           
            prevImage.on('click', this.prevImage, this)
            resetBtn.on('click', this.resetImage,this)
            nextBtn.on('click',this.nextImage,this);
            let imageI = SpriteFrame.createWithImage(this.imageArray[this.inc]);
            console.log(this.imageArray[this.inc]);
            this.ImageSlide.getComponent(GamePlay).setImageforSlice(this.imageArray[this.inc],this.inc,this.addGlow);
        }
        
        prevImage = () =>{
            this.soundManager.canPlayMusic=false;
            this.soundManager.stopWinMusic();
            if(!this.soundsObj.boolSound){
            
                this.soundManager.playSoundEffect( ResourceUtils.getInstance().getMusicFile("sound"),false);
            }
            this.btn.active=true;
            this.load.destroy();
            this.ImageSlide.destroy();
            this.child.active = true
            this.inc=0

        }
        resetImage = () => {
            this.soundManager.canPlayMusic=false;
            this.soundManager.stopWinMusic();
            if(!this.soundsObj.boolSound){
            
                this.soundManager.playSoundEffect( ResourceUtils.getInstance().getMusicFile("sound"),false);
            }
            if(this.result){
            this.glowInstantiate.destroy();
            }
            
           this.ImageSlide.getComponent(GamePlay).setImageforSlice(this.imageArray[this.inc],this.inc,this.addGlow);
        }
        nextImage = () =>{

            this.soundManager.canPlayMusic=false;
            this.soundManager.stopWinMusic();
            console.log("Next Image button")
            if(this.inc<this.imageArray.length-1){
                if(this.result){
                    ++this.inc
                    this.ImageSlide.destroy();
                    this.addSlider();
                }
            } else{
                console.log("END OF ARRAY")
                this.ImageSlide.destroy();
                let end = instantiate(this.endPrefab)
                let bg = this.node.getChildByName('Node')
                bg.active = true
                bg.addChild(end)
            }
        }
        addGlow = (result : Boolean, pos : Vec3) =>{
                this.result = result;
                let nextBtn = this.ImageSlide.getChildByName("nextImage")
                    nextBtn.getComponent(Sprite).grayscale = false
                    this.glowInstantiate = instantiate(this.glowPrefab);
                    this.img= SpriteFrame.createWithImage(this.imageArray[this.inc])
                    this.glowInstantiate.getComponent(glowing).blink(this.img)
                    let sprite = this.glowInstantiate.getChildByName('Item_cat');
                    let maskContent = this.glowInstantiate.getChildByName('Mask');
                    this.ImageSlide.addChild(this.glowInstantiate);
                    // this.glowInstantiate.setPosition(0, pos.y, 0);
                   let imageRect = this.img._rect;
                    sprite.getComponent(UITransform).height = imageRect.height;
                    sprite.getComponent(UITransform).width = imageRect.width;
                    maskContent.getComponent(UITransform).height = imageRect.height;
                    maskContent.getComponent(UITransform).width = imageRect.width;
                }



                update(){
                    if(this.soundsObj.boolSound){
                    this.soundManager.canPlayMusic=false;
                    this.soundManager.stopWinMusic();
                    }
                }
        }
