import React,{ Component } from "react";
import {withAuth} from '../HOC/WithAuth'

const role = 'User'

@withAuth(role)
class Auth2 extends Component{
    render (){
        return (<div>Auth2</div>)
    }
}
export default Auth2;