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
var moveDeco = function (target) {
    target.prototype.getPosition = function () {
        return { x: 0, y: 0 };
    };
};
var Tank = /** @class */ (function () {
    function Tank() {
    }
    Tank = __decorate([
        moveDeco,
        __metadata("design:paramtypes", [])
    ], Tank);
    return Tank;
}());
var Player = /** @class */ (function () {
    function Player() {
    }
    Player = __decorate([
        moveDeco,
        __metadata("design:paramtypes", [])
    ], Player);
    return Player;
}());
var tt = new Tank();
//console.log((tt as any).getPosition())
var pp = new Player();
//console.log((pp as any).getPosition())
// 装饰器工厂
function moveDecoFactory(x, y) {
    return function (target) {
        target.prototype.getPosition = function () {
            return { x: x, y: y };
        };
    };
}
var musicDecoratorFactory = function (musicType) {
    switch (musicType) {
        case 'Tank1':
            return function (target) {
                target.prototype.playMusic = function () {
                    console.log('播放坦克音乐');
                };
            };
        case 'Player1':
            return function (target) {
                target.prototype.playMusic = function () {
                    console.log('播放玩家音乐');
                };
            };
        default:
            return function (target) {
                target.prototype.playMusic = function () {
                    console.log('播放默认音乐');
                };
            };
    }
};
var Tank1 = /** @class */ (function () {
    function Tank1() {
    }
    Tank1 = __decorate([
        musicDecoratorFactory('Tank1')
    ], Tank1);
    return Tank1;
}());
var Player1 = /** @class */ (function () {
    function Player1() {
    }
    Player1 = __decorate([
        musicDecoratorFactory()
    ], Player1);
    return Player1;
}());
var test2 = new Tank1();
test2.playMusic();
var test3 = new Player1();
test3.playMusic();
