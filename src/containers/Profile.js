import React,{Component} from 'react'

export default class Profile extends Component{
    componentWillMount (){
        console.log('===========profile')
        console.log(this.props)
    }
    render(){
        return (
            <div>个人中心</div>
        )
    }
}
