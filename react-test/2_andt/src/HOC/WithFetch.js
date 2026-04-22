import React from 'react'
const withFetch = (fetch) => (Comp) => {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                data: []
            }
        }
        componentDidMount() {
           if(fetch === 'A') {
            this.setState({data:[
               {id: 1,title: 'Vue3',catagory:'A'},
               {id: 2,title: 'React',catagory:'A'},
       
            ]})
           }else {
            this.setState({data:[
               {id: 1,title: 'python',catagory:'B'},
               {id: 2,title: 'Django',catagory:'B'},
       
            ]})
           }
        }
        render() {
            return <Comp {...this.props} data={this.state.data}></Comp>
        }
    }
}