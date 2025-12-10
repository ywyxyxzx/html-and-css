<template>
  <div>
    <table class="lessons">
        <thead>
            <tr >
                <td v-for="item in tableTitles">
                   <div class="tr-inner">
                        <span>{{item.title}}</span> 
                        <div class="sort-icon" v-if="item.isSort">
                            <span class="asc" @click="sort(item.field, 1)" :class="{'active': sortFields === item.field && sortOrder === 1}"></span> 
                            <span class="desc" @click="sort(item.field, -1)" :class="{'active': sortFields === item.field && sortOrder === -1}"></span> 
                        </div>
                    </div>
                </td>
            </tr>
         </thead>
        <tbody>
             <tr v-for="lesson in lessonsTable">
                <td>{{lesson.title}}</td>
                <td>{{lesson.price}}</td>   
                <td>{{lesson.comments}}</td>  
            </tr>
        </tbody>
    </table>
  </div>
</template>
<script>
    import lessons from '../data/lesson.js';

  export default {
    data(){
        return {
            lessons: lessons,
             sortFields: '',
             sortOrder: 0, // 1 升序 -1 降序
             tableTitles:[
                {
                    title: 'name',
                    field: 'title',
                    isSort: false
                },
                {
                    title: 'price',
                    field: 'price',
                    isSort: true
                },
                {
                    title: 'comments',
                    field: 'comments',
                    isSort: true
                }
             ]
        }
       
    },
    computed:{
        lessonsTable(){
            if(!this.sortFields) 
                return this.lessons;
            return this.lessons.sort((a,b) => {
                if(this.sortOrder === 1) 
                 return a[this.sortFields] - b[this.sortFields]
                else if(this.sortOrder === -1)
                 return b[this.sortFields] - a[this.sortFields]
                else
                 return 0
            })
        }
    },
    methods: {
        sort(field , sortOrder) {
            this.sortFields = field;
            this.sortOrder = sortOrder;
        }
    }
  }
</script>
<style scoped lang="scss">
    table.lessons{
        border-collapse: collapse;
        width:600px;
        margin:0 auto;
        border:1px solid #ccc;
        & th{
            background-color:#ddd;
        }
        & td, & th{
            border:1px solid #ccc;
        }
        & tr .tr-inner{
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            & .sort-icon{
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                width: 10px;
                  & .asc, & .desc{
                    cursor: pointer;
                }
                & .asc{
                   width: 0;
                    height: 0;
                    border-bottom: 5px solid #ccc;
                    border-right: 5px solid transparent;
                    border-left: 5px solid transparent;
                }
                & .desc{
                    width: 0;
                    height: 0;
                    border-top: 5px solid #ccc;
                    border-right: 5px solid transparent;
                    border-left: 5px solid transparent;
                }
                   & .asc.active{
                    border-bottom: 5px solid skyblue;
                }
                & .desc.active{
                    border-top: 5px solid skyblue;
                }
    
            }
        }
    }
</style>