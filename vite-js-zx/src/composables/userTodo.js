import {ref , watch} from 'vue';
import userRequest from '../request/fetch.js';

const todos = ref([])
const orderBy = ref('asc');
export default ()=>{
 
    const { listRequest, delItemRequest, addItemRequest } = userRequest();

    const getListHandle = async () => {
        todos.value = await listRequest()
        return todos.value
    }
    const delItemHandle = async (id)=>{
        return await delItemRequest(id)
    }
    const addItemHandle = async(data)=>{
        return await addItemRequest(data)
     }

     watch(orderBy, async (nv, ov) => {
        
        if (nv !== ov) {
            
        }
    })


    return { 
        todos,
        orderBy,
        getListHandle,
        delItemHandle,
        addItemHandle,
     }
    }