import {observable, action} from 'mobx';

const appState = observable({
    num: 0
});
appState.increment = action(()=>{
    appState.num++;
    console.log(appState.num);
});
appState.decrement = action(()=>{
    appState.num--;
    console.log(appState.num);
});
export default appState;