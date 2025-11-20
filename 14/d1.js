"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// 类装饰器
let moveDeco = (target) => {
    target.prototype.getPosition = () => {
        return { x: 0, y: 0 };
    };
};
let Tank = class Tank {
    constructor() { }
};
Tank = __decorate([
    moveDeco,
    __metadata("design:paramtypes", [])
], Tank);
let Player = class Player {
    constructor() { }
};
Player = __decorate([
    moveDeco,
    __metadata("design:paramtypes", [])
], Player);
const tt = new Tank();
//console.log((tt as any).getPosition())
const pp = new Player();
//console.log((pp as any).getPosition())
// 装饰器工厂
function moveDecoFactory(x, y) {
    return (target) => {
        target.prototype.getPosition = () => {
            return { x, y };
        };
    };
}
const musicDecoratorFactory = (musicType) => {
    switch (musicType) {
        case 'Tank1':
            return (target) => {
                target.prototype.playMusic = () => {
                    console.log('播放坦克音乐');
                };
            };
        case 'Player1':
            return (target) => {
                target.prototype.playMusic = () => {
                    console.log('播放玩家音乐');
                };
            };
        default:
            return (target) => {
                target.prototype.playMusic = () => {
                    console.log('播放默认音乐');
                };
            };
    }
};
let Tank1 = class Tank1 {
};
Tank1 = __decorate([
    musicDecoratorFactory('Tank1')
], Tank1);
let Player1 = class Player1 {
};
Player1 = __decorate([
    musicDecoratorFactory()
], Player1);
let test2 = new Tank1();
test2.playMusic();
let test3 = new Player1();
test3.playMusic();
