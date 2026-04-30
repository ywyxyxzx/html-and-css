import React,{ Component } from "react";
import {withAuth} from '../HOC/WithAuth'

const role = 'Admin'

@withAuth(role)
class Auth1 extends Component{
    render (){
        return (<div>Auth1</div>)
    }
}
export default Auth1;