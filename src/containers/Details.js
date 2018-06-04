import React,{Component} from 'react'

export default class Details extends Component{
    render(){
        return (
            <div>
                { console.log(this.props) }
                <p>{ this.props.match.params.id }</p>
                <p>{ this.props.location.state }</p>
            </div>
        )
    }
}
