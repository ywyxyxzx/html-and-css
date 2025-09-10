let domArr = document.querySelector(".textDiv");
console.log(domArr, [...domArr.textContent]);
[...domArr.textContent].reduce((pre, cur, index)=>{
    (pre == index) && (domArr.innerHTML = '');
    console.log(pre, cur, index);
    let span = document.createElement("span");
    span.innerHTML = cur;
    
    span.addEventListener("mouseover", function(){
        console.log(this.classList)
        if(!this.classList.contains("color")){
           this.classList.add("color");
        }
        
    })
     span.addEventListener("animationend", function(){
        console.log(`end`)
        this.classList.remove("color");
    })
    domArr.appendChild(span);
},0)