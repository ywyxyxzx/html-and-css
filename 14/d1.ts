// 类装饰器
let moveDeco : ClassDecorator = (target: Function) => {
    target.prototype.getPosition = ():{x:number,y:number} => {
        return {x:0,y:0}
    }
}
@moveDeco
class Tank {
    constructor(){}
    // public getPosition():{x:number,y:number}{
    //     return {x:0,y:0}
    // }
}
@moveDeco
class Player {
    constructor(){}
    // public getPosition():{x:number,y:number}{
    //     return {x:0,y:0}
    // }
}
const tt = new Tank()
//console.log((tt as any).getPosition())
const pp = new Player()
//console.log((pp as any).getPosition())
// 装饰器工厂
function moveDecoFactory(x:number,y:number):ClassDecorator {
    return (target: Function) => {
        target.prototype.getPosition = ():{x:number,y:number} => {
            return {x,y}
        }
    }
}

const musicDecoratorFactory = (musicType?:string):ClassDecorator => {
    switch(musicType){
        case 'Tank1':
            return (target: Function) => {
                target.prototype.playMusic = () => {
                    console.log('播放坦克音乐')
                }
            }
        case 'Player1':
            return (target: Function) => {
                target.prototype.playMusic = () => {
                    console.log('播放玩家音乐')
                }
            }
        default:
            return (target: Function) => {
                target.prototype.playMusic = () => {
                    console.log('播放默认音乐')
                }
            }
    }
}
@musicDecoratorFactory('Tank1')
class Tank1{

}

@musicDecoratorFactory()
class Player1{

}

let test2 = new Tank1();
(test2 as any).playMusic();
let test3 = new Player1();
(test3 as any).playMusic();