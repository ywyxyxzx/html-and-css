import React from 'react'
export const withFetch = (fetch) => (Comp) => {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                data: []
            }
        }
        componentDidMount() {
            console.log(fetch)
           if(fetch === 'A') {
            this.setState({data:[
               {id: 1,title: 'Vue3',category:'A'},
               {id: 2,title: 'React',category:'A'},
       
            ]})
           }else {
            this.setState({data:[
               {id: 1,title: 'python',category:'B'},
               {id: 2,title: 'Django',category:'B'},
       
            ]})
           }
        }
        render() {
            return <Comp {...this.props} data={this.state.data}></Comp>
        }
    }
}
