import React, { useState } from 'react';
const ThemeContext = React.createContext();

export const withProvider = Comp => {

    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                store: {
                    type: 'primary',
                    name: "search"
                }
            }
        }

        render() {
            return <ThemeContext.Provider value={this.state.store}>
                <Comp {...this.props}></Comp>
            </ThemeContext.Provider>
        }
    }
}



export const withConsumer = Comp => {
    return class extends React.Component {
        render() {
            return <ThemeContext.Consumer>
                {
                    value => <Comp {...this.props} value={value}></Comp>
                }
            </ThemeContext.Consumer>
        }
    }
}