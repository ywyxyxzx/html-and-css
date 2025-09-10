let divs = document.querySelectorAll('div');
[...divs].map((item)=>{
    item.addEventListener('click', function(){
        console.log(item);
        this.classList.toggle("redBg");
    })
})