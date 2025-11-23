//import './main.css';
import './main.less';
import icon from './images/28.jpg';
console.log('hello webpack')
const xd = ()=>{
     
    alert('hello xd')

}
window.xd = xd;
// eslint-disable-next-line
const xdclass = ()=> new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('hello xdclass');
        console.log('promise excuted');
    },1000)
})
console.log(xdclass())
const img = new Image();
img.src= icon;
document.body.append(img);