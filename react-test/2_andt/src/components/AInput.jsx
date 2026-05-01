import React from 'react'

class AInput extends React.Component {
    render() {
        const { prefix, ...inputProps } = this.props;
        return (
            <>
                {prefix}
                <input {...inputProps} />
            </>
        );
    }
}

export default AInput;