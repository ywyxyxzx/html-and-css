export namespace User{
    export let hd1 = 'hdr.com';
    export namespace Member{
        export let name = 'hdr';
    }
}
console.log(User.Member.name)