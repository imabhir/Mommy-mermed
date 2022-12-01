import { JsonAsset, resources } from "cc";

export class SingletonClass {
    currentlvl=0;
    boolMusic:Boolean=true;
    boolSound:Boolean=false;
    value;
    private static _instance:SingletonClass = new SingletonClass();
    public static getInstance():SingletonClass
    {
        return SingletonClass._instance;
    }

//     constructor(){
    
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
    onSound(){
        this.boolSound=true;
    }
    offsound(){
        this.boolSound=false;
    }

    onMusic(){
        this.boolMusic=true;
    }
    offMusic(){
        this.boolMusic=false;
    }
} 

