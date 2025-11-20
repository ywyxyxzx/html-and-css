"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User;
(function (User) {
    User.hd1 = 'hdr.com';
    let Member;
    (function (Member) {
        Member.name = 'hdr';
    })(Member = User.Member || (User.Member = {}));
})(User = exports.User || (exports.User = {}));
console.log(User.Member.name);
