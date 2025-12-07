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
const vm = app.mount('#app')
console.log(vm.$data.name)                                                                                                                                                                                                                                                                                                                                                                                                       