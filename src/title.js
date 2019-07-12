import React from 'react'

/* function Title(props) {
    return <h1>Props from another component: {props.name}</h1>
}
 */

class Title extends React.Component {
    render () {
        return (
            <h1>{
                this.props.name + ' '
                + this.props.age + ' '
                + this.props.lastName.first + ' '
                + this.props.lastName.last + ' '
                + this.props.Address.street
            }</h1>
        )
    }    
}

Title.defaultProps = {
    name: 'Sem nome',
    age: 99,
    lastName: {
        first: 'Sem',
        last: 'sobrenome'
    },
    Address: {
        street: 'Sem rua',
        number: 'Sem número'
    }
}



export default Title