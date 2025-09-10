let divs = document.querySelectorAll('div');
console.log(divs);

// dom to array
let divs2 = Array.from(divs, (item) => {
     console.log(item.innerHTML);
     item.style.backgroundColor = 'red';
}); 

