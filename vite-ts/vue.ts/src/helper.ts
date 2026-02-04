const login = true;
const logincheck = async (to, from , next)=>{
    let res =  await new Promise(resolve=> {
        setTimeout(()=>{
            console.log('logincheck')
            resolve(false)
        }, 1000)
        
    })
    if(res ){
        next()
    } else{
        next({name: 'login'})
    }
}
export {login, logincheck}