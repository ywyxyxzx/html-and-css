
import {request} from './require.js';

export function getDetail(id) {
    return request({
        url:'/api/goods/'+id,
    })
}
