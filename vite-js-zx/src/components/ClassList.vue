<template>
    <div class="classlist">
        <div v-for="(lesson,index) in lessons" :key="index" class="lesson-wrap">
            <span :class="{'is-deleted': lesson.isDeleted}">{{lesson.title}}</span>
            <button @click="del(lesson)">{{lesson.isDeleted ? 'cancel' : 'delete'}}</button>
        </div>

    </div>
    
</template>
<script>
    import lessons from '../data/lesson.js';
    export default {
         beforeCreate(){
    console.log('beforeCreate Card')
  },
  created(){
    console.log('created Card')
  },
   beforeMount(){
    console.log('beforeMount Card')
  },
  mounted(){
    console.log('mounted Card')
  },
    beforeUpdate(){
    console.log('beforeUpdate')
  },
  updated(){
    console.log('updated')
  },
        data() {
            return {
                lessons: lessons
            }
        },
        methods: {
            del(lesson) {
                lesson.isDeleted = !lesson.isDeleted;
            }
        }
    }

</script>
<style lang="scss" scoped>
    .classlist {
       

        & .lesson-wrap{
            display: flex;
            justify-content: space-between;

            & .is-deleted{
                text-decoration: line-through;
            }
        }
    }
</style>