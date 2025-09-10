let set = new WeakSet();
let lis = document.querySelectorAll('li');
lis.forEach(li => {
    set.add(li);
    
});
console.log(set);
lis.forEach(li => {
    li.addEventListener('click', () => {
        if(set.has(li)){
            set.delete(li)
        } else {
            set.add(li)
        }
        console.log(set);
    })
})
