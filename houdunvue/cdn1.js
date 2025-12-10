const app = Vue.createApp({
    data() {
        return {
            name: 'zs',
            num: 0,
           
        }
        
    },
    computed:{
        error(){
           return this.num < 0 ? '不能小于0' : this.num > 5 ? '不能大于5' : '';
        }
    },
    methods: {
        add(e){
          //  if(this.num < 5){
                this.num++;
            //}
            
        },
       sub(e){
           // if(this.num > 0){
                this.num--;
           // }
        }
    }
});


// 局部组件
const todo = {
    data(){
        return {
            name: 'zs13123'
        }
    },
    template:`<div>{{name}}</div>`
}
// 全局组件
app.component('hhh', {

    template: `123123hhhhhh123<todo/>`,
    components:{
        todo
    },
    methods: {


    }

})




const vm = app.mount('#app')
console.log(vm.$data.name)                                                                                                                                                                                                                                                                                                                                                                                                       